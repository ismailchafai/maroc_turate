"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CRAFT_CATEGORIES } from '@/lib/turath-types'
import { SearchIcon, FilterIcon, HeartIcon, CartIcon, ChevronRightIcon } from '../icons'
import { BottomNavigation } from '../bottom-navigation'
import { useNavigation } from '../navigation-provider'

const FEATURED_ARTISANS = [
  { id: '1', name: 'Fatima Zahra', craft: 'Zellige', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop', coverImage: 'https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?w=400&h=200&fit=crop' },
  { id: '2', name: 'Hassan Benchekroun', craft: 'Leather', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop', coverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop' },
]

const PRODUCTS = [
  { id: '1', name: 'Handwoven Berber Rug', price: 3200, image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=300&h=400&fit=crop', artisan: 'Aicha B.', category: 'Textiles', commission: 85, liked: false },
  { id: '2', name: 'Zellige Mirror Frame', price: 1450, image: 'https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?w=300&h=400&fit=crop', artisan: 'Fatima Z.', category: 'Zellige', commission: 85, liked: true },
  { id: '3', name: 'Leather Pouf Ottoman', price: 890, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop', artisan: 'Hassan B.', category: 'Leather', commission: 85, liked: false },
  { id: '4', name: 'Silver Berber Necklace', price: 2100, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=400&fit=crop', artisan: 'Malika A.', category: 'Jewelry', commission: 85, liked: false },
  { id: '5', name: 'Carved Cedar Box', price: 650, image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300&h=400&fit=crop', artisan: 'Omar T.', category: 'Wood', commission: 85, liked: true },
  { id: '6', name: 'Traditional Tagine', price: 380, image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=300&h=400&fit=crop', artisan: 'Khadija M.', category: 'Pottery', commission: 85, liked: false },
]

interface MarketplaceScreenProps {
  isDark?: boolean
}

export function MarketplaceScreen({ isDark }: MarketplaceScreenProps) {
  void isDark
  const { navigate } = useNavigation()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>(
    PRODUCTS.reduce((acc, p) => ({ ...acc, [p.id]: p.liked }), {})
  )
  const [cartCount, setCartCount] = useState(0)

  const filteredProducts = activeCategory ? PRODUCTS.filter(p => p.category === activeCategory) : PRODUCTS

  const toggleLike = (productId: string) => {
    setLikedProducts(prev => ({ ...prev, [productId]: !prev[productId] }))
  }

  return (
    <div className="h-full flex flex-col bg-medina">
      {/* Header */}
      <div className="pt-11 px-4 pb-4 bg-gradient-to-b from-turath-argan to-turath-parchment relative shadow-md border-b-2 border-turath-earth/40">
        <div className="absolute inset-0 zellige-pattern opacity-[0.14] pointer-events-none" />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2.5xl font-bold font-serif text-foreground drop-shadow-sm">السوق</h1>
            <p className="text-xs text-muted-foreground font-semibold">Artisan Marketplace</p>
          </div>
          <button 
            onClick={() => navigate('checkout')} 
            className="relative w-11 h-11 rounded-xl bg-turath-red/15 flex items-center justify-center hover:bg-turath-red/25 transition-all border-1.5 border-turath-red/40 hover:shadow-md"
          >
            <CartIcon className="w-5.5 h-5.5 text-turath-red" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-turath-red text-white font-bold text-xs rounded-full flex items-center justify-center border-2 border-white shadow-md">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search bar */}
        <div className="flex gap-2.5 relative z-10 mb-3.5">
          <div className="flex-1 flex items-center gap-2.5 px-4 py-3 bg-white/75 backdrop-blur-sm border-1.5 border-turath-saffron/25 rounded-xl shadow-sm">
            <SearchIcon className="w-4.5 h-4.5 text-turath-red flex-shrink-0" />
            <input 
              type="text" 
              placeholder="ابحث..." 
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans" 
            />
          </div>
          <button className="w-11 h-11 rounded-xl bg-turath-saffron flex items-center justify-center hover:shadow-lg active:scale-95 transition-all border-1.5 border-turath-saffron/50">
            <FilterIcon className="w-5 h-5 text-turath-charcoal" />
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide relative z-10">
          <button 
            onClick={() => setActiveCategory(null)} 
            className={cn(
              "px-4 py-2.5 rounded-xl text-xs font-bold font-serif whitespace-nowrap transition-all shadow-sm border-1.5 backdrop-blur-sm",
              !activeCategory 
                ? "bg-turath-red text-white border-turath-red/60 ring-1 ring-turath-red/20" 
                : "bg-white/60 text-foreground border-turath-earth/30 hover:bg-turath-saffron/20 hover:border-turath-saffron/50 hover:shadow-md"
            )}
          >
            الكل
          </button>
          {CRAFT_CATEGORIES.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={cn(
                "px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm border-1.5 backdrop-blur-sm",
                activeCategory === cat 
                  ? "bg-turath-red text-white border-turath-red/60 ring-1 ring-turath-red/20" 
                  : "bg-white/60 text-foreground border-turath-earth/30 hover:bg-turath-saffron/20 hover:border-turath-saffron/50 hover:shadow-md"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Featured Artisans */}
        <div className="px-3 pt-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground font-serif">الصنّاع البارزون</h2>
            <button onClick={() => navigate('artisan-profile')} className="text-xs text-turath-red font-bold flex items-center gap-1 hover:gap-2 transition-all">
              عرض المزيد
              <ChevronRightIcon className="w-3 h-3" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {FEATURED_ARTISANS.map((artisan, idx) => (
              <button 
                key={artisan.id} 
                onClick={() => navigate('artisan-profile')} 
                className="flex-shrink-0 w-56 rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border-1.5 border-turath-saffron/30 shadow-md hover:shadow-lg transition-all"
                style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.1}s both` }}
              >
                <div className="h-24 bg-cover bg-center relative" style={{ backgroundImage: `url(${artisan.coverImage})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 to-transparent" />
                </div>
                <div className="px-4 pb-4 -mt-6 relative">
                  <div className="w-12 h-12 rounded-full bg-cover bg-center border-3 border-white shadow-md" style={{ backgroundImage: `url(${artisan.image})` }} />
                  <p className="font-semibold text-sm text-foreground mt-2.5">{artisan.name}</p>
                  <p className="text-xs text-turath-saffron font-semibold">{artisan.craft}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="px-3 pt-3">
          <h2 className="text-base font-bold text-foreground font-serif mb-3">المنتجات</h2>
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map((product, idx) => (
              <button 
                key={product.id} 
                onClick={() => navigate('checkout')} 
                className="rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border-1.5 border-turath-earth/30 text-left active:scale-[0.96] transition-transform shadow-md hover:shadow-lg"
                style={{ animation: `slide-in-right 0.3s ease-out ${idx * 0.05}s both` }}
              >
                <div className="relative">
                  <div className="h-36 bg-cover bg-center bg-gradient-to-br from-turath-earth to-turath-desert" style={{ backgroundImage: `url(${product.image})` }} />
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleLike(product.id); setCartCount(c => c + 1) }} 
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  >
                    <HeartIcon 
                      className={cn("w-4 h-4", likedProducts[product.id] ? "text-turath-red fill-turath-red" : "text-muted-foreground")} 
                      filled={likedProducts[product.id]} 
                    />
                  </button>
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 bg-turath-green/95 text-white rounded-lg text-[9px] font-bold shadow-sm">
                    {product.commission}%
                  </div>
                </div>
                <div className="p-3 bg-white/90">
                  <p className="text-xs text-muted-foreground font-semibold">{product.artisan}</p>
                  <h3 className="font-bold text-sm text-foreground truncate mt-1">{product.name}</h3>
                  <p className="text-turath-red font-bold mt-1.5 text-base">{product.price} DH</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
