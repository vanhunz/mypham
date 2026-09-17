/* ==========================================================================
   ROSELLE COSMETICS - MASTER JAVASCRIPT ENGINE (A-Z COMPLETE SYSTEM)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. STORAGE KEYS & INITIAL DATA STATE
// --------------------------------------------------------------------------
const STORAGE_KEYS = {
  CART: 'roselle_cart_v3',
  WISHLIST: 'roselle_wishlist_v3',
  ORDERS: 'roselle_orders_v3',
  USERS: 'roselle_users_v3',
  ACTIVE_USER: 'roselle_active_user_v3',
  REVIEWS: 'roselle_reviews_v3'
};

// --------------------------------------------------------------------------
// 2. PRODUCT DATABASE (80 HIGH-RES LUXURY COSMETICS - 8 CATEGORIES)
// --------------------------------------------------------------------------
const PRODUCTS_DATA = [
  // --- 1. SKINCARE (10 PRODUCTS) ---
  {
    id: 1,
    name: "Serum Phục Hồi & Trẻ Hóa Da Tế Bào Gốc Bio-Cellular",
    brand: "ROSELLE LUXE",
    category: "skincare",
    categoryName: "Skincare",
    price: 1250000,
    oldPrice: 1650000,
    rating: 4.9,
    reviewsCount: 142,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p1.jpg",
    images: ["assets/products/p1.jpg"],
    description: "Serum tế bào gốc cao cấp giúp phục hồi màng ẩm, tái tạo độ đàn hồi và làm mờ nếp nhăn chuyên sâu. Chứa 10% Peptide Complex và Hyaluronic Acid đa phân tử.",
    ingredients: "Aqua, Niacinamide 5%, Peptide Complex, Hydrolyzed Hyaluronic Acid, Centella Asiatica Extract, Ceramide NP, Squalane.",
    usage: "Dùng 3-4 giọt thoa đều khắp mặt và cổ sau bước toner. Sử dụng đều đặn mỗi sáng và tối.",
    stock: 28,
    isExclusive: false
  },
  {
    id: 2,
    name: "Kem Dưỡng Tái Cấu Trúc Trứng Cá Tầm Caviar Royal Cream",
    brand: "ROSELLE ATELIER",
    category: "skincare",
    categoryName: "Skincare",
    price: 2890000,
    oldPrice: 3500000,
    rating: 4.98,
    reviewsCount: 96,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p2.jpg",
    images: ["assets/products/p2.jpg"],
    description: "Chiết xuất trứng cá tầm đen đại dương cùng tinh chất vàng 24K nano giúp xóa mờ nếp nhăn và cung cấp nguồn dinh dưỡng trẻ hóa vô tận cho làn da quý tộc.",
    ingredients: "Caviar Extract 20%, 24K Nano Gold Flakes, Matrixyl 3000, Shea Butter, Marine Collagen.",
    usage: "Lấy một lượng nhỏ bằng hạt ngọc trai, massage nhẹ nhàng nâng cơ mặt mỗi tối.",
    stock: 12,
    isExclusive: true,
    exclusiveNote: "Số lượng sản xuất giới hạn 50 hũ (Chỉ còn 12 hũ)"
  },
  {
    id: 3,
    name: "Dầu Tẩy Trang Tinh Dầu Hoa Hồng Damask Rose Cleansing Elixir",
    brand: "ROSELLE BOTANICALS",
    category: "skincare",
    categoryName: "Skincare",
    price: 520000,
    oldPrice: 650000,
    rating: 4.85,
    reviewsCount: 178,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p3.jpg",
    images: ["assets/products/p3.jpg"],
    description: "Dầu tẩy trang nhũ hóa nhanh từ hoa hồng Damask Bulgari, cuốn sạch bụi mịn và lớp makeup kháng nước mà vẫn giữ ẩm mượt mà cho da.",
    ingredients: "Damask Rose Flower Oil, Jojoba Seed Oil, Olive Fruit Oil, Vitamin E.",
    usage: "Massage 1-2 phút trên da khô rồi thêm chút nước ấm để nhũ hóa.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 4,
    name: "Mặt Nạ Ngủ Thạch Collagen Ngọc Trai Pearl Sleeping Jelly",
    brand: "ROSELLE ROYAL",
    category: "skincare",
    categoryName: "Skincare",
    price: 680000,
    oldPrice: 850000,
    rating: 4.9,
    reviewsCount: 110,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p4.jpg",
    images: ["assets/products/p4.jpg"],
    description: "Mặt nạ ngủ thạch hồng mọng nước ngậm tinh chất ngọc trai và collagen thủy phân, đánh thức làn da căng bóng mịn màng như sương mai.",
    ingredients: "Hydrolyzed Pearl Powder, Marine Collagen, Hyaluronic Acid, Sakura Extract.",
    usage: "Thoa một lớp mỏng trước khi ngủ 2-3 lần mỗi tuần.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 5,
    name: "Nước Hoa Hồng Cánh Hoa Tươi Hữu Cơ Rose Petal Toner",
    brand: "ROSELLE BOTANICALS",
    category: "skincare",
    categoryName: "Skincare",
    price: 490000,
    oldPrice: 620000,
    rating: 4.8,
    reviewsCount: 165,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p5.jpg",
    images: ["assets/products/p5.jpg"],
    description: "Toner chứa những cánh hoa hồng hữu cơ lơ lửng, cân bằng độ pH tức thì và cấp ẩm chuyên sâu cho làn da rạng rỡ.",
    ingredients: "Rosa Damascena Flower Water, Real Rose Petals, Chamomile, Witch Hazel.",
    usage: "Thấm vào bông tẩy trang hoặc vỗ nhẹ trực tiếp lên da sau khi rửa mặt.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 6,
    name: "Kem Dưỡng Trắng & Cấp Ẩm Tế Bào Gốc Edelweiss Silk",
    brand: "ROSELLE LUXE",
    category: "skincare",
    categoryName: "Skincare",
    price: 1350000,
    oldPrice: 1700000,
    rating: 4.92,
    reviewsCount: 84,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p6.jpg",
    images: ["assets/products/p6.jpg"],
    description: "Chiết xuất tế bào gốc hoa tuyết nhung Alpine quý hiếm cùng Niacinamide dưỡng trắng da căng mịn chuẩn công chúa.",
    ingredients: "Leontopodium Alpinum Callus Culture, Niacinamide 4%, Arbutin, Ceramide NP.",
    usage: "Sử dụng sáng và tối sau bước serum.",
    stock: 22,
    isExclusive: false
  },
  {
    id: 7,
    name: "Sữa Rửa Mặt Bọt Mây Cúc La Mã Chamomile Cloud Foam",
    brand: "ROSELLE BOTANICALS",
    category: "skincare",
    categoryName: "Skincare",
    price: 380000,
    oldPrice: 480000,
    rating: 4.75,
    reviewsCount: 190,
    badge: "sale",
    badgeText: "-21% SALE",
    image: "assets/products/p7.jpg",
    images: ["assets/products/p7.jpg"],
    description: "Bọt mịn như mây nhẹ nhàng làm sạch sâu lỗ chân lông mà không gây khô căng da nhờ chiết xuất cúc La Mã và HA.",
    ingredients: "Chamomile Extract, Amino Acid Surfactants, Glycerin, Centella.",
    usage: "Bơm 1-2 pump bọt massage đều khắp mặt rồi rửa sạch.",
    stock: 60,
    isExclusive: false
  },
  {
    id: 8,
    name: "Kem Mắt Kim Cương Xóa Quầng Thâm Diamond Eye Elixir",
    brand: "ROSELLE ATELIER",
    category: "skincare",
    categoryName: "Skincare",
    price: 1850000,
    oldPrice: 2300000,
    rating: 4.95,
    reviewsCount: 72,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p8.jpg",
    images: ["assets/products/p8.jpg"],
    description: "Đầu lăn massage mạ vàng 24K kết hợp bột kim cương và Caffeine giúp xóa tan bọng mắt, làm mờ quầng thâm và nếp nhăn khóe mắt.",
    ingredients: "Diamond Powder, Caffeine 5%, Matrixyl Synthe'6, 24K Gold Plated Head.",
    usage: "Lăn nhẹ nhàng quanh vùng mắt mỗi sáng và tối.",
    stock: 15,
    isExclusive: true,
    exclusiveNote: "Tích hợp đầu massage pha lê hoàng gia"
  },
  {
    id: 9,
    name: "Tẩy Da Chết Mặt Hạnh Nhân & Đường Mía Almond Polish",
    brand: "ROSELLE BOTANICALS",
    category: "skincare",
    categoryName: "Skincare",
    price: 420000,
    oldPrice: 520000,
    rating: 4.8,
    reviewsCount: 130,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p9.jpg",
    images: ["assets/products/p9.jpg"],
    description: "Hạt đường mía siêu mịn kết hợp sữa hạnh nhân nhẹ nhàng loại bỏ lớp sừng cằn cỗi mang lại làn da trắng hồng mềm mại.",
    ingredients: "Cane Sugar, Sweet Almond Oil, Honey Extract, Vitamin E.",
    usage: "Massage nhẹ nhàng 1 phút trên da ẩm rồi rửa sạch.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 10,
    name: "Xịt Khoáng Tinh Chất Ngọc Trai & Hoa Sen Tuyết Pearl Mist",
    brand: "ROSELLE ROYAL",
    category: "skincare",
    categoryName: "Skincare",
    price: 360000,
    oldPrice: 450000,
    rating: 4.88,
    reviewsCount: 155,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p10.jpg",
    images: ["assets/products/p10.jpg"],
    description: "Tia xịt màng sương siêu mịn chứa bột ngọc trai và nước khoáng tinh khiết cấp ẩm tức thì cho da căng tràn sức sống.",
    ingredients: "Pearl Extract, Snow Lotus Extract, Glacier Water, Hyaluronic Acid.",
    usage: "Xịt cách mặt 20cm bất cứ khi nào da cần cấp ẩm.",
    stock: 55,
    isExclusive: false
  },

  // --- 2. MAKEUP (10 PRODUCTS) ---
  {
    id: 11,
    name: "Phấn Nước Cushion Che Phủ Hoàn Hảo Luminous Glow SPF 45",
    brand: "ROSELLE LUXE",
    category: "makeup",
    categoryName: "Makeup",
    price: 890000,
    oldPrice: 1100000,
    rating: 4.85,
    reviewsCount: 164,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p11.jpg",
    images: ["assets/products/p11.jpg"],
    description: "Lớp nền mỏng nhẹ như làn da thứ hai nhưng có khả năng che phủ khuyết điểm lên đến 95%. Tạo hiệu ứng căng bóng chuẩn tiểu thư.",
    ingredients: "Titanium Dioxide, Pearl Extract, Niacinamide, Rosehip Oil.",
    usage: "Dùng bông phấn dặm nhẹ nhàng đều khắp mặt từ trong ra ngoài.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 12,
    name: "Bảng Phấn Mắt 12 Ô Hoàng Gia Grand Velvet Palette",
    brand: "ROSELLE ATELIER",
    category: "makeup",
    categoryName: "Makeup",
    price: 980000,
    oldPrice: 1250000,
    rating: 4.8,
    reviewsCount: 112,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p12.jpg",
    images: ["assets/products/p12.jpg"],
    description: "Gồm 12 tông màu kết hợp giữa lì mịn, nhũ kim cương và satin lấp lánh lấy cảm hứng từ hoàng hôn Paris lãng mạn.",
    ingredients: "Mica, Synthetic Fluorphlogopite, Dimethicone, Zinc Stearate.",
    usage: "Phối màu nền và màu nhũ lấp lánh tạo điểm nhấn đôi mắt.",
    stock: 25,
    isExclusive: false
  },
  {
    id: 13,
    name: "Bảng Phấn Mắt Vương Miện Công Chúa Roselle Tiara Palette",
    brand: "ROSELLE ATELIER",
    category: "makeup",
    categoryName: "Makeup",
    price: 1550000,
    oldPrice: 1950000,
    rating: 4.97,
    reviewsCount: 88,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p13.jpg",
    images: ["assets/products/p13.jpg"],
    description: "Hộp bảng mắt đính vương miện mạ vàng nạm đá pha lê với 16 ô nhũ ngọc trai và tông hồng đào tiểu thư độc bản.",
    ingredients: "Pearl Pigments, Real Diamond Dust, Squalane, Jojoba Oil.",
    usage: "Dùng cọ hoặc ngón tay tán nhẹ nhàng lên bầu mắt.",
    stock: 10,
    isExclusive: true,
    exclusiveNote: "Thiết kế vỏ vương miện mạ vàng khắc tên riêng"
  },
  {
    id: 14,
    name: "Má Hồng Dạng Kem Trái Đào Sweet Peach Cream Blush",
    brand: "ROSELLE GLAM",
    category: "makeup",
    categoryName: "Makeup",
    price: 450000,
    oldPrice: 580000,
    rating: 4.9,
    reviewsCount: 140,
    badge: "sale",
    badgeText: "-22% SALE",
    image: "assets/products/p14.jpg",
    images: ["assets/products/p14.jpg"],
    description: "Chất kem mềm xốp tan vào da như sữa, tạo hiệu ứng ửng hồng tự nhiên tựa cánh hoa đào mùa xuân.",
    ingredients: "Peach Kernel Oil, Shea Butter, Mica, Tocopherol.",
    usage: "Chấm 2-3 điểm lên gò má và dùng tay tán đều theo hướng xếch lên.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 15,
    name: "Phấn Phủ Bột Ngọc Trai Kiềm Dầu Mịn Màng Pearl Powder",
    brand: "ROSELLE LUXE",
    category: "makeup",
    categoryName: "Makeup",
    price: 650000,
    oldPrice: 800000,
    rating: 4.82,
    reviewsCount: 125,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p15.jpg",
    images: ["assets/products/p15.jpg"],
    description: "Hạt phấn siêu vi nano kiềm dầu suốt 16 giờ nhưng không gây mốc nền, giúp làn da trong trẻo mịn màng như lụa.",
    ingredients: "Silica, Hydrolyzed Pearl, Zea Mays Starch, Allantoin.",
    usage: "Dùng bông phấn phủ nhẹ lên vùng chữ T và toàn bộ gương mặt.",
    stock: 38,
    isExclusive: false
  },
  {
    id: 16,
    name: "Mascara Chuốt Mi Cánh Bướm Uốn Cong Butterfly Lash",
    brand: "ROSELLE GLAM",
    category: "makeup",
    categoryName: "Makeup",
    price: 480000,
    oldPrice: 600000,
    rating: 4.78,
    reviewsCount: 95,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p16.jpg",
    images: ["assets/products/p16.jpg"],
    description: "Đầu cọ cánh bướm độc quyền giúp làm dài, dày và giữ cong mi suốt ngày dài mà không lem trôi dưới nước.",
    ingredients: "Beeswax, Carnauba Wax, Provitamin B5, Keratin.",
    usage: "Chuốt zíc-zắc từ chân mi lên ngọn mi.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 17,
    name: "Kem Lót Ngọc Trai Glowy Illuminating Primer",
    brand: "ROSELLE ROYAL",
    category: "makeup",
    categoryName: "Makeup",
    price: 720000,
    oldPrice: 900000,
    rating: 4.9,
    reviewsCount: 108,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p17.jpg",
    images: ["assets/products/p17.jpg"],
    description: "Kem lót chứa tinh thể ngọc trai hồng bắt sáng, che phủ lỗ chân lông và giữ lớp makeup bền màu cả ngày.",
    ingredients: "Pearl Extract, Rosa Centifolia Water, Niacinamide, Dimethicone.",
    usage: "Thoa một lớp mỏng trước khi đánh kem nền hoặc cushion.",
    stock: 30,
    isExclusive: false
  },
  {
    id: 18,
    name: "Bút Kẻ Mắt Dạ Nét Mảnh Chống Nước Precision Royal Liner",
    brand: "ROSELLE GLAM",
    category: "makeup",
    categoryName: "Makeup",
    price: 320000,
    oldPrice: 420000,
    rating: 4.76,
    reviewsCount: 160,
    badge: "sale",
    badgeText: "-24% SALE",
    image: "assets/products/p18.jpg",
    images: ["assets/products/p18.jpg"],
    description: "Đầu cọ siêu mảnh 0.01mm vẽ đường eyeliner sắc sảo, khô nhanh trong 3 giây và kháng nước bền bỉ.",
    ingredients: "Carbon Black, Acrylates Copolymer, Chamomile Extract.",
    usage: "Vẽ sát chân mi từ đầu mắt kéo dài về phía đuôi mắt.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 19,
    name: "Bảng Bắt Sáng Kim Cương Hoàng Gia Diamond Glow Palette",
    brand: "ROSELLE ATELIER",
    category: "makeup",
    categoryName: "Makeup",
    price: 1350000,
    oldPrice: 1750000,
    rating: 4.96,
    reviewsCount: 75,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p19.jpg",
    images: ["assets/products/p19.jpg"],
    description: "4 ô phấn bắt sáng chứa bụi kim cương và ngọc trai ánh hồng champagne mang lại hiệu ứng làn da phát sáng rạng ngời.",
    ingredients: "Diamond Powder, Pearl Dust, Squalane, Macadamia Seed Oil.",
    usage: "Quét lên gò má, sống mũi, nhân trung và xương quai xanh.",
    stock: 14,
    isExclusive: true,
    exclusiveNote: "Số lượng phát hành giới hạn VIP"
  },
  {
    id: 20,
    name: "Xịt Khóa Nền Glitter Lấp Lánh Shimmer Setting Spray",
    brand: "ROSELLE LUXE",
    category: "makeup",
    categoryName: "Makeup",
    price: 520000,
    oldPrice: 650000,
    rating: 4.85,
    reviewsCount: 92,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p20.jpg",
    images: ["assets/products/p20.jpg"],
    description: "Xịt khóa nền chứa nhũ vàng siêu mịn tạo lớp màng bảo vệ makeup không trôi, không xỉn màu suốt 18 tiếng.",
    ingredients: "PVP, Rose Water, Gold Shimmer Particles, Aloe Vera Extract.",
    usage: "Lắc đều và xịt đều toàn mặt sau khi hoàn tất trang điểm.",
    stock: 35,
    isExclusive: false
  },

  // --- 3. SON MÔI (10 PRODUCTS) ---
  {
    id: 21,
    name: "Son Kem Lì Nhung Mịn Velvet Rose Tint #08 Rouge Noir",
    brand: "ROSELLE ATELIER",
    category: "son-moi",
    categoryName: "Son môi",
    price: 580000,
    oldPrice: 720000,
    rating: 4.88,
    reviewsCount: 218,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p21.jpg",
    images: ["assets/products/p21.jpg"],
    description: "Chất son nhung mịn nhẹ tênh như sương, bám màu bền bỉ suốt 8 tiếng mà không gây khô môi nhờ tinh dầu tầm xuân.",
    ingredients: "Dimethicone, Rosa Canina Fruit Oil, Shea Butter, Silica.",
    usage: "Thoa trực tiếp lên môi từ lòng môi tán đều ra viền môi.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 22,
    name: "Son Thỏi Vương Miện Hoàng Kim Royal Jewel Lipstick #01 Crown Red",
    brand: "ROSELLE ATELIER",
    category: "son-moi",
    categoryName: "Son môi",
    price: 1450000,
    oldPrice: 1850000,
    rating: 4.98,
    reviewsCount: 94,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p22.jpg",
    images: ["assets/products/p22.jpg"],
    description: "Vỏ son đúc bằng hợp kim mạ vàng 18K gắn vương miện đính đá quý. Chất son nhung mịn hoàng gia lên màu chuẩn sắc.",
    ingredients: "Camellia Oil, 24K Gold Flakes, Jojoba Wax, Red Iron Oxide.",
    usage: "Thoa full môi quyến rũ hoặc thoa nhẹ tạo hiệu ứng cánh hoa.",
    stock: 8,
    isExclusive: true,
    exclusiveNote: "Khắc tên chữ cái đầu của bạn miễn phí"
  },
  {
    id: 23,
    name: "Son Bóng Pha Lê Thạch Gương Crystal Jelly Lip Gloss #03 Sakura",
    brand: "ROSELLE GLAM",
    category: "son-moi",
    categoryName: "Son môi",
    price: 390000,
    oldPrice: 490000,
    rating: 4.9,
    reviewsCount: 180,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p23.jpg",
    images: ["assets/products/p23.jpg"],
    description: "Hiệu ứng môi mọng nước căng bóng chuẩn công chúa với chiết xuất dầu hoa anh đào và nhũ pha lê óng ánh.",
    ingredients: "Polybutene, Cherry Blossom Oil, Hyaluronic Acid, Shimmer.",
    usage: "Thoa đè lên lớp son lì hoặc thoa riêng dưỡng môi căng bóng.",
    stock: 55,
    isExclusive: false
  },
  {
    id: 24,
    name: "Son Thỏi Lì Nhung Mịn Soft Matte #05 Coral Dream",
    brand: "ROSELLE LUXE",
    category: "son-moi",
    categoryName: "Son môi",
    price: 620000,
    oldPrice: 780000,
    rating: 4.82,
    reviewsCount: 135,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p24.jpg",
    images: ["assets/products/p24.jpg"],
    description: "Tông hồng san hô ngọt ngào làm sáng bừng khuôn mặt, chất son êm mượt lướt nhẹ trên môi không lộ vân môi.",
    ingredients: "Synthetic Wax, Argan Oil, Shea Butter, Vitamin E.",
    usage: "Thoa trực tiếp lên môi bất cứ khi nào cần rạng rỡ.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 25,
    name: "Son Dưỡng Cánh Hoa Mật Ong Rose Honey Lip Balm",
    brand: "ROSELLE BOTANICALS",
    category: "son-moi",
    categoryName: "Son môi",
    price: 320000,
    oldPrice: 420000,
    rating: 4.95,
    reviewsCount: 210,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p25.jpg",
    images: ["assets/products/p25.jpg"],
    description: "Son dưỡng ửng hồng tự nhiên từ tinh chất hoa hồng hữu cơ và mật ong rừng, phục hồi môi thâm nứt nẻ chỉ sau 1 đêm.",
    ingredients: "Beeswax, Raw Honey, Organic Rose Extract, Jojoba Oil.",
    usage: "Thoa hàng ngày và làm mặt nạ ngủ môi trước khi đi ngủ.",
    stock: 60,
    isExclusive: false
  },
  {
    id: 26,
    name: "Son Kem Bùn Xốp Mịn Marshmallow Pink Velvet Tint",
    brand: "ROSELLE LUXE",
    category: "son-moi",
    categoryName: "Son môi",
    price: 450000,
    oldPrice: 580000,
    rating: 4.8,
    reviewsCount: 115,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p26.jpg",
    images: ["assets/products/p26.jpg"],
    description: "Chất son bùn mịn xốp như kẹo marshmallow, che mờ hoàn toàn vân môi và cho hiệu ứng môi sương mờ sang chảnh.",
    ingredients: "Dimethicone Crosspolymer, Silica, Sweet Almond Oil.",
    usage: "Chấm 3 điểm lên lòng môi rồi tán mờ ra viền môi.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 27,
    name: "Son Kem Bóng Khóa Màu Water Tint #02 Strawberry Milk",
    brand: "ROSELLE GLAM",
    category: "son-moi",
    categoryName: "Son môi",
    price: 410000,
    oldPrice: 520000,
    rating: 4.84,
    reviewsCount: 98,
    badge: "sale",
    badgeText: "-21% SALE",
    image: "assets/products/p27.jpg",
    images: ["assets/products/p27.jpg"],
    description: "Lớp bóng thủy tinh trong suốt khóa chặt màu son hồng dâu sữa bên dưới suốt 12 tiếng không dính cốc chén.",
    ingredients: "Water, Diphenyl Dimethicone, Strawberry Extract, Glycerin.",
    usage: "Thoa đều và đợi 1 phút để lớp màng bóng định hình.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 28,
    name: "Son Thỏi Dưỡng Tinh Dầu Hoa Trà Camellia Lip Butter",
    brand: "ROSELLE BOTANICALS",
    category: "son-moi",
    categoryName: "Son môi",
    price: 360000,
    oldPrice: 460000,
    rating: 4.78,
    reviewsCount: 88,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p28.jpg",
    images: ["assets/products/p28.jpg"],
    description: "Bơ dưỡng môi cô đặc từ hoa trà đỏ đảo Jeju, làm dịu tức thì đôi môi khô nứt và giữ ẩm suốt 24 giờ.",
    ingredients: "Camellia Japonica Seed Oil, Cocoa Seed Butter, Squalane.",
    usage: "Thoa lót trước khi makeup hoặc dùng dưỡng hàng ngày.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 29,
    name: "Son Kem Nhũ Kim Cương 3D Fairy Diamond Lip Glaze",
    brand: "ROSELLE ATELIER",
    category: "son-moi",
    categoryName: "Son môi",
    price: 920000,
    oldPrice: 1200000,
    rating: 4.94,
    reviewsCount: 65,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p29.jpg",
    images: ["assets/products/p29.jpg"],
    description: "Chứa nhũ kim cương 3D lấp lánh như viên pha lê hoàng gia, tạo hiệu ứng đôi môi kiêu sa lộng lẫy trong các buổi dạ tiệc.",
    ingredients: "Diamond Dust, Calcium Sodium Borosilicate, Peptides.",
    usage: "Thoa lên giữa môi tạo hiệu ứng 3D bừng sáng.",
    stock: 12,
    isExclusive: true,
    exclusiveNote: "Phiên bản dạ tiệc giới hạn"
  },
  {
    id: 30,
    name: "Set 5 Thỏi Son Mini Hoàng Gia Roselle Vault",
    brand: "ROSELLE ATELIER",
    category: "son-moi",
    categoryName: "Son môi",
    price: 2450000,
    oldPrice: 3200000,
    rating: 5.0,
    reviewsCount: 82,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p30.jpg",
    images: ["assets/products/p30.jpg"],
    description: "Bộ sưu tập 5 tông màu son hoàng gia kinh điển đặt trong hộp quà bọc nhung hồng kèm vương miện mạ vàng sang trọng.",
    ingredients: "Full Royal Lip Care Complex, 24K Gold Particles, Shea Butter.",
    usage: "Bộ quà tặng cao cấp dành riêng cho nàng công chúa.",
    stock: 6,
    isExclusive: true,
    exclusiveNote: "Hộp quà nhung bọc lụa cao cấp kèm thiệp hoàng gia"
  },

  // --- 4. SERUM (10 PRODUCTS) ---
  {
    id: 31,
    name: "Tinh Chất Vàng 24K Đặc Trị Nếp Nhăn Pure Aurum Elixir",
    brand: "ROSELLE ATELIER",
    category: "serum",
    categoryName: "Serum",
    price: 3100000,
    oldPrice: 3900000,
    rating: 5.0,
    reviewsCount: 64,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p31.jpg",
    images: ["assets/products/p31.jpg"],
    description: "Được bào chế giới hạn với 99.9% vảy vàng 24K tinh khiết và nọc rắn tổng hợp Syn-Ake, mang lại hiệu ứng thon gọn và nâng cơ đỉnh cao.",
    ingredients: "Pure 24K Gold Flakes, Syn-Ake Tripeptide, Copper Tripeptide-1, Royal Jelly.",
    usage: "Thoa 2-3 giọt vỗ nhẹ cho vàng thẩm thấu sâu vào da.",
    stock: 6,
    isExclusive: true,
    exclusiveNote: "Sản xuất giới hạn 50 chai đợt này"
  },
  {
    id: 32,
    name: "Serum Phục Hồi Cấp Nước Hyaluronic Acid B5 Princess",
    brand: "ROSELLE LUXE",
    category: "serum",
    categoryName: "Serum",
    price: 850000,
    oldPrice: 1100000,
    rating: 4.9,
    reviewsCount: 195,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p32.jpg",
    images: ["assets/products/p32.jpg"],
    description: "Nồng độ 5% Vitamin B5 cùng HA 5 phân tử giúp cấp ẩm tức thì, làm dịu da kích ứng và củng cố hàng rào bảo vệ da.",
    ingredients: "Panthenol 5%, Multi-Molecular Hyaluronic Acid, Madecassoside.",
    usage: "Dùng 3-4 giọt thoa đều trên da ẩm mỗi sáng và tối.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 33,
    name: "Serum Dưỡng Trắng & Mờ Thâm Alpha Arbutin 5% + Niacinamide",
    brand: "ROSELLE ROYAL",
    category: "serum",
    categoryName: "Serum",
    price: 950000,
    oldPrice: 1200000,
    rating: 4.88,
    reviewsCount: 145,
    badge: "sale",
    badgeText: "-21% SALE",
    image: "assets/products/p33.jpg",
    images: ["assets/products/p33.jpg"],
    description: "Công thức truyền trắng mờ thâm nám an toàn, ức chế sắc tố melanin giúp làn da trắng hồng bật tông tự nhiên.",
    ingredients: "Alpha Arbutin 5%, Niacinamide 6%, Glutathione, Licorice Extract.",
    usage: "Thoa đều toàn mặt, kết hợp kem chống nắng vào ban ngày.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 34,
    name: "Serum Vitamin C 15% Tươi Chống Oxy Hóa Glow Booster",
    brand: "ROSELLE LUXE",
    category: "serum",
    categoryName: "Serum",
    price: 1150000,
    oldPrice: 1450000,
    rating: 4.85,
    reviewsCount: 110,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p34.jpg",
    images: ["assets/products/p34.jpg"],
    description: "15% Pure L-Ascorbic Acid kết hợp Ferulic Acid bảo vệ da khỏi gốc tự do, kích thích sản sinh collagen và làm sáng da.",
    ingredients: "L-Ascorbic Acid 15%, Ferulic Acid 1%, Vitamin E, Hyaluronic Acid.",
    usage: "Dùng 3 giọt mỗi buổi sáng trước bước kem chống nắng.",
    stock: 28,
    isExclusive: false
  },
  {
    id: 35,
    name: "Serum Niacinamide 10% + Zinc 1% Thu Nhỏ Lỗ Chân Lông",
    brand: "ROSELLE BOTANICALS",
    category: "serum",
    categoryName: "Serum",
    price: 620000,
    oldPrice: 780000,
    rating: 4.82,
    reviewsCount: 168,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p35.jpg",
    images: ["assets/products/p35.jpg"],
    description: "Kiểm soát dầu thừa, giảm viêm mụn và làm se khít lỗ chân lông, trả lại bề mặt da láng mịn như cánh hoa.",
    ingredients: "Niacinamide 10%, Zinc PCA 1%, Tamarind Seed Gum.",
    usage: "Thoa 3 giọt sáng và tối lên vùng chữ T và hai bên má.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 36,
    name: "Serum Retinol 0.5% Tái Tạo Da Trẻ Hóa Ban Đêm",
    brand: "ROSELLE LUXE",
    category: "serum",
    categoryName: "Serum",
    price: 1450000,
    oldPrice: 1800000,
    rating: 4.92,
    reviewsCount: 86,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p36.jpg",
    images: ["assets/products/p36.jpg"],
    description: "Retinol bọc vi nang giải phóng chậm, làm phẳng nếp nhăn và trẻ hóa cấu trúc da mà không gây bong tróc đỏ rát.",
    ingredients: "Encapsulated Retinol 0.5%, Ceramide Complex, Squalane.",
    usage: "Sử dụng 2-3 lần/tuần vào ban đêm, tăng dần tần suất.",
    stock: 25,
    isExclusive: false
  },
  {
    id: 37,
    name: "Serum Peptide Tổ Yến Hoàng Gia Royal Bird's Nest",
    brand: "ROSELLE ATELIER",
    category: "serum",
    categoryName: "Serum",
    price: 2750000,
    oldPrice: 3400000,
    rating: 4.96,
    reviewsCount: 58,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p37.jpg",
    images: ["assets/products/p37.jpg"],
    description: "Chiết xuất tổ yến đảo tự nhiên kết hợp phức hợp 9 Peptide tăng sinh collagen gấp 4 lần, đem lại làn da không tuổi.",
    ingredients: "Swiftlet Nest Extract 30%, 9-Peptide Complex, Marine Collagen.",
    usage: "Thoa 4 giọt massage nâng cơ mặt mỗi tối.",
    stock: 9,
    isExclusive: true,
    exclusiveNote: "Chiết xuất tổ yến thiên nhiên nguyên chất"
  },
  {
    id: 38,
    name: "Serum Rau Má Làm Dịu & Giảm Đỏ Centella Calming Elixir",
    brand: "ROSELLE BOTANICALS",
    category: "serum",
    categoryName: "Serum",
    price: 550000,
    oldPrice: 700000,
    rating: 4.86,
    reviewsCount: 172,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p38.jpg",
    images: ["assets/products/p38.jpg"],
    description: "Cứu tinh cho làn da nhạy cảm mẩn đỏ, làm dịu tức thì trong 15 phút với chiết xuất rau má hữu cơ Madagascar.",
    ingredients: "Centella Asiatica Extract 85%, Asiaticoside, Allantoin.",
    usage: "Thoa khi da có dấu hiệu căng rát, kích ứng hoặc sau nặn mụn.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 39,
    name: "Serum Tế Bào Gốc Hoa Tuyết Nhung Alpine Stem Cell",
    brand: "ROSELLE LUXE",
    category: "serum",
    categoryName: "Serum",
    price: 1650000,
    oldPrice: 2100000,
    rating: 4.9,
    reviewsCount: 78,
    badge: "sale",
    badgeText: "-21% SALE",
    image: "assets/products/p39.jpg",
    images: ["assets/products/p39.jpg"],
    description: "Đánh thức tế bào da ngủ quên, thúc đẩy chu kỳ tái tạo da mới mềm mịn, săn chắc và đều màu rạng rỡ.",
    ingredients: "Edelweiss Stem Cell, EGF, Niacinamide, Adenosine.",
    usage: "Thoa 3-4 giọt khắp mặt trước kem dưỡng.",
    stock: 20,
    isExclusive: false
  },
  {
    id: 40,
    name: "Serum Collagen Thủy Phân Tươi Collagen Marine Booster",
    brand: "ROSELLE ROYAL",
    category: "serum",
    categoryName: "Serum",
    price: 980000,
    oldPrice: 1250000,
    rating: 4.88,
    reviewsCount: 104,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p40.jpg",
    images: ["assets/products/p40.jpg"],
    description: "Collagen biển sâu kích thước siêu nhỏ thẩm thấu sâu, làm đầy các rãnh nhăn và giữ da luôn căng mọng.",
    ingredients: "Hydrolyzed Marine Collagen 20%, Elastin, Hyaluronic Acid.",
    usage: "Dùng sáng và tối hàng ngày.",
    stock: 35,
    isExclusive: false
  },

  // --- 5. KEM CHỐNG NẮNG (10 PRODUCTS) ---
  {
    id: 41,
    name: "Kem Chống Nắng Phổ Rộng Invisible Shield SPF 50+ PA++++",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 690000,
    oldPrice: 850000,
    rating: 5.0,
    reviewsCount: 310,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p41.jpg",
    images: ["assets/products/p41.jpg"],
    description: "Kem chống nắng vô hình không để lại vệt trắng, kiểm soát dầu thừa suốt ngày dài và kháng nước đỉnh cao.",
    ingredients: "Zinc Oxide 12%, Tinosorb S, Uvinul A Plus, Niacinamide.",
    usage: "Thoa trước khi ra nắng 15-20 phút.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 42,
    name: "Kem Chống Nắng Nâng Tone Ngọc Trai Hồng Pink Glow SPF 50+",
    brand: "ROSELLE ROYAL",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 750000,
    oldPrice: 920000,
    rating: 4.95,
    reviewsCount: 245,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p42.jpg",
    images: ["assets/products/p42.jpg"],
    description: "Nâng tone trắng hồng tự nhiên thay thế lớp lót trang điểm, chứa bột ngọc trai cho làn da phát sáng rạng rỡ.",
    ingredients: "Pearl Powder, Titanium Dioxide, Rose Water, Centella Extract.",
    usage: "Thoa đều khắp mặt và cổ mỗi sáng.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 43,
    name: "Sáp Chống Nắng Dạng Thỏi Tiện Lợi Glow Sun Stick SPF 50+",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 490000,
    oldPrice: 620000,
    rating: 4.82,
    reviewsCount: 130,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p43.jpg",
    images: ["assets/products/p43.jpg"],
    description: "Dạng thỏi tiện lợi dặm lại chống nắng mọi lúc mọi nơi ngay trên lớp trang điểm mà không làm xê dịch nền.",
    ingredients: "Chemical UV Filters, Camellia Oil, Silica, Vitamin E.",
    usage: "Lăn trực tiếp trên mặt sau mỗi 2-3 tiếng.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 44,
    name: "Sữa Chống Nắng Kiềm Dầu Mỏng Nhẹ Matte Milk SPF 50+",
    brand: "ROSELLE LUXE",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 680000,
    oldPrice: 850000,
    rating: 4.86,
    reviewsCount: 115,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p44.jpg",
    images: ["assets/products/p44.jpg"],
    description: "Kết cấu dạng sữa lỏng thấm tức thì, kiềm dầu suốt 12 tiếng không gây bóng nhờn hay bí bách da.",
    ingredients: "Hybrid Filters, Silica Microspheres, Green Tea Leaf Extract.",
    usage: "Lắc đều trước khi dùng, thoa 2 đốt ngón tay.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 45,
    name: "Kem Chống Nắng Cấp Nước Dịu Mát Water Drop Sunscreen",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 580000,
    oldPrice: 720000,
    rating: 4.9,
    reviewsCount: 142,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p45.jpg",
    images: ["assets/products/p45.jpg"],
    description: "Vỡ tan thành giọt nước khi thoa lên da, hạ nhiệt độ da tức thì -3°C và cấp ẩm sâu cho da mùa hè.",
    ingredients: "Glacier Water, Hyaluronic Acid, Aloe Vera, Centella.",
    usage: "Thoa đều khắp mặt và cổ buổi sáng.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 46,
    name: "Kem Chống Nắng Thuần Khoáng Da Nhạy Cảm Pure Mineral",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 640000,
    oldPrice: 800000,
    rating: 4.8,
    reviewsCount: 95,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p46.jpg",
    images: ["assets/products/p46.jpg"],
    description: "100% màng lọc khoáng chất dịu nhẹ, an toàn tuyệt đối cho mẹ bầu và làn da nhạy cảm nhất.",
    ingredients: "Non-nano Zinc Oxide 15%, Titanium Dioxide 5%, Ceramide NP.",
    usage: "Vỗ nhẹ trên da cho kem tiệp màu.",
    stock: 30,
    isExclusive: false
  },
  {
    id: 47,
    name: "Xịt Chống Nắng Toàn Thân Làm Mát Tức Thì Body Sun Mist",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 450000,
    oldPrice: 580000,
    rating: 4.75,
    reviewsCount: 160,
    badge: "sale",
    badgeText: "-22% SALE",
    image: "assets/products/p47.jpg",
    images: ["assets/products/p47.jpg"],
    description: "Tia xịt 360 độ tiện lợi bảo vệ toàn thân khi đi biển hoặc hoạt động ngoài trời không lo cháy nắng.",
    ingredients: "Broad Spectrum UV Filters, Peppermint Extract, Vitamin C.",
    usage: "Xịt đều cơ thể cách 15cm trước khi ra ngoài.",
    stock: 55,
    isExclusive: false
  },
  {
    id: 48,
    name: "Kem Chống Nắng Hoàng Kim Tế Bào Gốc Royal Gold Sun Elixir",
    brand: "ROSELLE ATELIER",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 1950000,
    oldPrice: 2450000,
    rating: 4.98,
    reviewsCount: 68,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p48.jpg",
    images: ["assets/products/p48.jpg"],
    description: "Sản phẩm kết hợp giữa tinh chất chống nắng đỉnh cao và tế bào gốc vàng 24K ngăn ngừa lão hóa do tia hồng ngoại.",
    ingredients: "24K Nano Gold, Edelweiss Stem Cells, Ectoin, Tinosorb M.",
    usage: "Dùng mỗi sáng làm lớp dưỡng bảo vệ hoàng gia.",
    stock: 11,
    isExclusive: true,
    exclusiveNote: "Công nghệ chống lão hóa ánh sáng độc quyền"
  },
  {
    id: 49,
    name: "Kem Chống Nắng Chống Ánh Sáng Xanh Blue Shield SPF 50+",
    brand: "ROSELLE LUXE",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 720000,
    oldPrice: 890000,
    rating: 4.84,
    reviewsCount: 88,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p49.jpg",
    images: ["assets/products/p49.jpg"],
    description: "Bảo vệ làn da trước tác hại của ánh sáng xanh từ màn hình máy tính, điện thoại và bụi mịn ô nhiễm.",
    ingredients: "Lutein, Niacinamide, Cocoa Seed Extract, UV Filters.",
    usage: "Thoa hàng ngày cho nhân viên văn phòng và người dùng thiết bị điện tử.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 50,
    name: "Kem Chống Nắng Thể Thao Kháng Nước Sport Shield SPF 50+",
    brand: "ROSELLE BOTANICALS",
    category: "kem-chong-nang",
    categoryName: "Kem chống nắng",
    price: 590000,
    oldPrice: 750000,
    rating: 4.8,
    reviewsCount: 112,
    badge: "sale",
    badgeText: "-21% SALE",
    image: "assets/products/p50.jpg",
    images: ["assets/products/p50.jpg"],
    description: "Kháng nước lên tới 80 phút khi bơi lội hoặc vận động đổ mồ hôi nhiều, không cay mắt.",
    ingredients: "Water-Resistant Polymers, Zinc Oxide, Vitamin E.",
    usage: "Thoa lại sau mỗi 80 phút bơi lội.",
    stock: 40,
    isExclusive: false
  },

  // --- 6. BODY CARE (10 PRODUCTS) ---
  {
    id: 51,
    name: "Sữa Dưỡng Thể Trắng Mịn Tinh Dầu Hoa Trà Camellia Body Silk",
    brand: "ROSELLE BOTANICALS",
    category: "body-care",
    categoryName: "Body Care",
    price: 620000,
    oldPrice: 750000,
    rating: 4.88,
    reviewsCount: 130,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p51.jpg",
    images: ["assets/products/p51.jpg"],
    description: "Sữa dưỡng thể hương hoa trà dịu ngọt, thẩm thấu tức thì không nhờn dính. Nuôi dưỡng làn da trắng mịn 24 giờ.",
    ingredients: "Camellia Seed Oil, Niacinamide 3%, Alpha Arbutin, Shea Butter.",
    usage: "Thoa đều khắp cơ thể sau khi tắm.",
    stock: 55,
    isExclusive: false
  },
  {
    id: 52,
    name: "Sữa Tắm Nước Hoa Cánh Hoa Hồng Pháp French Rose Shower Gel",
    brand: "ROSELLE ATELIER",
    category: "body-care",
    categoryName: "Body Care",
    price: 480000,
    oldPrice: 600000,
    rating: 4.92,
    reviewsCount: 175,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p52.jpg",
    images: ["assets/products/p52.jpg"],
    description: "Sữa tắm dạng gel chứa cánh hoa hồng Pháp tươi và tinh dầu lưu hương thơm ngát suốt 12 tiếng như xịt nước hoa.",
    ingredients: "French Rose Petals, Rose Essential Oil, Glycerin, Aloe Vera.",
    usage: "Tạo bọt với bông tắm massage toàn thân và thư giãn.",
    stock: 60,
    isExclusive: false
  },
  {
    id: 53,
    name: "Tẩy Tế Bào Chết Body Đường Mía & Dâu Tây Strawberry Sugar Scrub",
    brand: "ROSELLE BOTANICALS",
    category: "body-care",
    categoryName: "Body Care",
    price: 420000,
    oldPrice: 540000,
    rating: 4.9,
    reviewsCount: 150,
    badge: "sale",
    badgeText: "-22% SALE",
    image: "assets/products/p53.jpg",
    images: ["assets/products/p53.jpg"],
    description: "Hạt đường mía hữu cơ kết hợp dâu tây tươi nhẹ nhàng tẩy sạch lớp da sần sùi ở khuỷu tay, đầu gối cho da mịn như lụa.",
    ingredients: "Organic Cane Sugar, Strawberry Fruit Extract, Coconut Oil.",
    usage: "Massage nhẹ nhàng trên da ẩm 2 lần mỗi tuần.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 54,
    name: "Bơ Dưỡng Thể Hạt Mỡ & Hạnh Nhân Cấp Ẩm Sâu Shea Butter",
    brand: "ROSELLE BOTANICALS",
    category: "body-care",
    categoryName: "Body Care",
    price: 550000,
    oldPrice: 680000,
    rating: 4.84,
    reviewsCount: 92,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p54.jpg",
    images: ["assets/products/p54.jpg"],
    description: "Bơ dưỡng đậm đặc hồi sinh làn da khô ráp mùa đông, đem lại độ mềm mại và đàn hồi tự nhiên.",
    ingredients: "Raw Shea Butter 25%, Sweet Almond Oil, Cocoa Butter.",
    usage: "Thoa kỹ vùng da khô như khuỷu tay, gót chân và toàn thân.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 55,
    name: "Xịt Thơm Toàn Thân & Tóc Hoa Anh Đào Cherry Blossom Mist",
    brand: "ROSELLE GLAM",
    category: "body-care",
    categoryName: "Body Care",
    price: 360000,
    oldPrice: 460000,
    rating: 4.88,
    reviewsCount: 185,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p55.jpg",
    images: ["assets/products/p55.jpg"],
    description: "Hương hoa anh đào ngọt ngào và thanh khiết lưu giữ trên cơ thể và mái tóc, đem lại cảm giác tự tin như nàng thơ.",
    ingredients: "Cherry Blossom Fragrance, Chamomile Water, Aloe Vera.",
    usage: "Xịt lên tóc và cơ thể sau khi tắm hoặc trước khi ra ngoài.",
    stock: 70,
    isExclusive: false
  },
  {
    id: 56,
    name: "Kem Dưỡng Trắng & Nâng Cơ Vùng Cổ & Ngực Neck Pearl Cream",
    brand: "ROSELLE ATELIER",
    category: "body-care",
    categoryName: "Body Care",
    price: 1650000,
    oldPrice: 2100000,
    rating: 4.96,
    reviewsCount: 64,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p56.jpg",
    images: ["assets/products/p56.jpg"],
    description: "Đặc trị nếp nhăn vòng cổ và làm săn chắc vùng da ngực quý phái với bột ngọc trai và collagen thủy phân.",
    ingredients: "Hydrolyzed Pearl, Volufiline, Marine Collagen, Peptides.",
    usage: "Massage từ dưới ngực vuốt ngược lên cổ mỗi tối.",
    stock: 12,
    isExclusive: true,
    exclusiveNote: "Liệu trình chăm sóc vùng cổ quý tộc"
  },
  {
    id: 57,
    name: "Tinh Dầu Massage Body Hoa Oải Hương Lavender Relaxing Oil",
    brand: "ROSELLE BOTANICALS",
    category: "body-care",
    categoryName: "Body Care",
    price: 490000,
    oldPrice: 620000,
    rating: 4.8,
    reviewsCount: 110,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p57.jpg",
    images: ["assets/products/p57.jpg"],
    description: "Tinh dầu hoa oải hương Provence giúp giải tỏa căng thẳng, thư giãn cơ bắp và giúp giấc ngủ sâu hơn.",
    ingredients: "French Lavender Essential Oil, Jojoba Oil, Grape Seed Oil.",
    usage: "Massage nhẹ nhàng toàn thân trước khi đi ngủ.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 58,
    name: "Sữa Dưỡng Thể Nhũ Kim Tuyến Shimmering Body Glow",
    brand: "ROSELLE ROYAL",
    category: "body-care",
    categoryName: "Body Care",
    price: 680000,
    oldPrice: 850000,
    rating: 4.9,
    reviewsCount: 96,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p58.jpg",
    images: ["assets/products/p58.jpg"],
    description: "Chứa nhũ kim tuyến vàng hồng lấp lánh cho đôi chân thon và bờ vai phát sáng quyến rũ trong những bữa tiệc tối.",
    ingredients: "Rose Gold Mica, Niacinamide, Hyaluronic Acid, Argan Oil.",
    usage: "Thoa lên vai, xương quai xanh và chân khi diện đầm tiệc.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 59,
    name: "Muối Tắm Ngâm Bồn Thảo Mộc Hoàng Gia Royal Bath Salt",
    brand: "ROSELLE ATELIER",
    category: "body-care",
    categoryName: "Body Care",
    price: 850000,
    oldPrice: 1100000,
    rating: 4.95,
    reviewsCount: 52,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p59.jpg",
    images: ["assets/products/p59.jpg"],
    description: "Muối hồng Himalaya ướp tinh dầu hoa hồng Damask và hoa nhài hoàng cung giúp thải độc da và thư giãn tuyệt đối.",
    ingredients: "Himalayan Pink Salt, Dried Rose Petals, Jasmine Essential Oil.",
    usage: "Hòa 2 muỗng muối vào bồn nước ấm ngâm mình 20 phút.",
    stock: 14,
    isExclusive: true,
    exclusiveNote: "Thủ công đúc hũ thủy tinh hoàng gia"
  },
  {
    id: 60,
    name: "Kem Dưỡng Mềm Mượt Tay & Móng Hoa Linh Lan Hand Cream",
    brand: "ROSELLE ATELIER",
    category: "body-care",
    categoryName: "Body Care",
    price: 280000,
    oldPrice: 350000,
    rating: 4.82,
    reviewsCount: 160,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p60.jpg",
    images: ["assets/products/p60.jpg"],
    description: "Chăm sóc đôi bàn tay búp măng ngọc ngà, nuôi dưỡng móng tay chắc khỏe với hương hoa linh lan trong trẻo.",
    ingredients: "Shea Butter, Keratin, Lily of the Valley Extract, Vitamin E.",
    usage: "Thoa đều bàn tay và móng tay sau khi rửa tay.",
    stock: 50,
    isExclusive: false
  },

  // --- 7. HAIR CARE (10 PRODUCTS) ---
  {
    id: 61,
    name: "Dầu Gội & Dầu Xả Phục Hồi Tóc Biotin & Keratin Silk",
    brand: "ROSELLE BOTANICALS",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 750000,
    oldPrice: 920000,
    rating: 4.88,
    reviewsCount: 75,
    badge: "sale",
    badgeText: "-18% SALE",
    image: "assets/products/p61.jpg",
    images: ["assets/products/p61.jpg"],
    description: "Bộ đôi hữu cơ bổ sung Keratin thủy phân và Biotin đậm đặc giúp giảm gãy rụng đến 92% và tạo độ bóng bồng bềnh.",
    ingredients: "Hydrolyzed Keratin, Biotin, Argan Oil, Amino Acid Complex.",
    usage: "Gội sạch và ủ dầu xả phần thân tóc 3-5 phút.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 62,
    name: "Tinh Dầu Dưỡng Tóc Bóng Mượt Argan Princess Hair Elixir",
    brand: "ROSELLE ROYAL",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 650000,
    oldPrice: 820000,
    rating: 4.95,
    reviewsCount: 140,
    badge: "best",
    badgeText: "BEST SELLER",
    image: "assets/products/p62.jpg",
    images: ["assets/products/p62.jpg"],
    description: "Tinh dầu Argan nguyên chất Morocco giúp tóc suôn mượt như tơ lụa, chống chẻ ngọn và phục hồi tóc cháy khô.",
    ingredients: "Pure Moroccan Argan Oil, Camellia Oil, Vitamin E, Cyclopentasiloxane.",
    usage: "Thoa 1-2 giọt lên đuôi tóc khi tóc còn ẩm hoặc sau sấy.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 63,
    name: "Mặt Nạ Ủ Tóc Collagen & Hoa Hồng Rose Collagen Mask",
    brand: "ROSELLE ATELIER",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 580000,
    oldPrice: 720000,
    rating: 4.9,
    reviewsCount: 98,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p63.jpg",
    images: ["assets/products/p63.jpg"],
    description: "Kem ủ tóc phục hồi chuyên sâu như salon cao cấp, bổ sung collagen tươi cho mái tóc óng ả bồng bềnh hương hoa hồng.",
    ingredients: "Marine Collagen, Rose Essential Oil, Keratin, Panthenol.",
    usage: "Ủ tóc 15-20 phút rồi xả sạch với nước mát.",
    stock: 30,
    isExclusive: false
  },
  {
    id: 64,
    name: "Xịt Dưỡng Tóc Chống Nhiệt & Hương Nước Hoa Hair Mist",
    brand: "ROSELLE GLAM",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 390000,
    oldPrice: 490000,
    rating: 4.82,
    reviewsCount: 115,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p64.jpg",
    images: ["assets/products/p64.jpg"],
    description: "Bảo vệ tóc trước nhiệt độ máy sấy, máy uốn 230°C và lưu lại hương thơm nước hoa quý phái suốt 24 giờ.",
    ingredients: "Heat Protectant Complex, Silk Amino Acids, Fragrance.",
    usage: "Xịt đều lên tóc trước khi tạo kiểu hoặc trước khi ra ngoài.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 65,
    name: "Tẩy Tế Bào Chết Da Đầu Muối Biển Scalp Refresh Scrub",
    brand: "ROSELLE BOTANICALS",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 460000,
    oldPrice: 580000,
    rating: 4.86,
    reviewsCount: 88,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p65.jpg",
    images: ["assets/products/p65.jpg"],
    description: "Muối biển kết hợp tràm trà và bạc hà làm sạch sâu gàu, dầu thừa và bã nhờn chân tóc cho da đầu thông thoáng.",
    ingredients: "Sea Salt Crystals, Tea Tree Oil, Peppermint, Salicylic Acid.",
    usage: "Massage trực tiếp trên da đầu ướt 1-2 lần/tuần trước gội đầu.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 66,
    name: "Dầu Gội Khô Tạo Phồng Tức Thì Volume Dry Shampoo",
    brand: "ROSELLE LUXE",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 340000,
    oldPrice: 420000,
    rating: 4.75,
    reviewsCount: 155,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p66.jpg",
    images: ["assets/products/p66.jpg"],
    description: "Hút sạch dầu bết dính trong 30 giây, tạo độ phồng bồng bềnh tự nhiên cho mái tóc không cần gội nước.",
    ingredients: "Rice Starch, Tapioca Starch, Cherry Blossom Fragrance.",
    usage: "Lắc đều và xịt cách chân tóc 20cm rồi dùng tay tán đều.",
    stock: 60,
    isExclusive: false
  },
  {
    id: 67,
    name: "Tinh Chất Kích Thích Mọc Tóc Bưởi Hồng & Biotin Hair Booster",
    brand: "ROSELLE BOTANICALS",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 520000,
    oldPrice: 650000,
    rating: 4.9,
    reviewsCount: 132,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p67.jpg",
    images: ["assets/products/p67.jpg"],
    description: "Kích thích nang tóc phát triển, giúp tóc con mọc tua tủa và dày dặn hơn sau 4 tuần sử dụng.",
    ingredients: "Pink Grapefruit Peel Oil, Biotin, Red Clover Extract, Zinc.",
    usage: "Xịt trực tiếp vào chân tóc và massage 2 phút mỗi tối.",
    stock: 45,
    isExclusive: false
  },
  {
    id: 68,
    name: "Kem Xả Khô Tạo Lọn Tóc Uốn Bồng Bềnh Curl Silk",
    brand: "ROSELLE ATELIER",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 490000,
    oldPrice: 620000,
    rating: 4.8,
    reviewsCount: 78,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p68.jpg",
    images: ["assets/products/p68.jpg"],
    description: "Định hình lọn tóc xoăn sóng bồng bềnh tự nhiên không cứng đơ, giữ nếp suốt cả ngày.",
    ingredients: "Silk Protein, Jojoba Oil, Polyquaternium, Panthenol.",
    usage: "Bóp nhẹ lên lọn tóc ẩm từ dưới lên trên.",
    stock: 30,
    isExclusive: false
  },
  {
    id: 69,
    name: "Bộ Gội Xả Tím Khử Ánh Vàng Giữ Màu Tóc Tẩy Purple Shield",
    brand: "ROSELLE LUXE",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 820000,
    oldPrice: 1050000,
    rating: 4.85,
    reviewsCount: 65,
    badge: "sale",
    badgeText: "-22% SALE",
    image: "assets/products/p69.jpg",
    images: ["assets/products/p69.jpg"],
    description: "Sắc tố tím chuẩn Salon trung hòa ánh vàng đồng, giữ tông màu tóc tẩy bạch kim và pastel luôn trong trẻo.",
    ingredients: "Violet Pigments, Keratin, Argan Oil, Coconut Acid.",
    usage: "Dùng 1-2 lần/tuần thay cho dầu gội thường.",
    stock: 25,
    isExclusive: false
  },
  {
    id: 70,
    name: "Lược Massage Da Đầu Mạ Vàng Roselle Gold Cushion Brush",
    brand: "ROSELLE ATELIER",
    category: "hair-care",
    categoryName: "Hair Care",
    price: 1250000,
    oldPrice: 1600000,
    rating: 4.98,
    reviewsCount: 88,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p70.jpg",
    images: ["assets/products/p70.jpg"],
    description: "Lược chải đệm khí bọc vàng hoàng gia với răng lược bọc ngọc chống tĩnh điện, kích thích tuần hoàn máu và gỡ rối hoàn hảo.",
    ingredients: "18K Gold Plating, Natural Rubber Cushion, Beechwood Handle.",
    usage: "Chải tóc từ chân tới ngọn tóc và massage nhẹ da đầu.",
    stock: 15,
    isExclusive: true,
    exclusiveNote: "Thiết kế vương miện mạ vàng cao cấp"
  },

  // --- 8. NƯỚC HOA (10 PRODUCTS) ---
  {
    id: 71,
    name: "Nước Hoa Niche Éclat D'Or Eau De Parfum 100ml",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 3450000,
    oldPrice: 4200000,
    rating: 4.98,
    reviewsCount: 88,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p71.jpg",
    images: ["assets/products/p71.jpg"],
    description: "Tuyệt tác hương thơm độc quyền chỉ có tại Roselle. Hòa quyện giữa hoa hồng Grasse quý hiếm, nghệ tây Ba Tư và gỗ tuyết tùng hoàng gia.",
    ingredients: "Grasse Rose Essence, Saffron Oil, Cedarwood, Ambergris.",
    usage: "Xịt vào các điểm mạch trên cổ tay, sau gáy và ngực.",
    stock: 8,
    isExclusive: true,
    exclusiveNote: "Khắc tên chữ cái độc bản miễn phí"
  },
  {
    id: 72,
    name: "Nến Thơm Cao Cấp Tinh Dầu Thiên Nhiên Midnight Rose Scent",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 780000,
    oldPrice: 950000,
    rating: 4.92,
    reviewsCount: 78,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p72.jpg",
    images: ["assets/products/p72.jpg"],
    description: "Nến thơm sáp đậu nành thủ công đúc tay tại xưởng Roselle. Tinh dầu hoa hồng Damask kết hợp hoắc hương và rêu sồi thư giãn.",
    ingredients: "100% Natural Soy Wax, Damask Rose Essential Oil, Patchouli.",
    usage: "Đốt nến 1-2 giờ để hương thơm lan tỏa khắp phòng ngủ.",
    stock: 15,
    isExclusive: true,
    exclusiveNote: "Thủ công 100% phiên bản giới hạn"
  },
  {
    id: 73,
    name: "Nước Hoa Nữ Roselle Dream Floral EDP 50ml",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 1850000,
    oldPrice: 2300000,
    rating: 4.9,
    reviewsCount: 120,
    badge: "best",
    badgeText: "ROSELLE PICK",
    image: "assets/products/p73.jpg",
    images: ["assets/products/p73.jpg"],
    description: "Hương hoa mẫu đơn ngọt ngào hòa quyện quả mâm xôi mọng nước và xạ hương trắng mang lại thần thái kiêu sa dịu dàng.",
    ingredients: "Peony Petals, Raspberry Essence, White Musk, Bergamot.",
    usage: "Xịt lên tóc và trang phục để lưu hương cả ngày.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 74,
    name: "Nước Hoa Hoàng Gia Hương Gỗ & Hổ Phách Royal Amber Wood",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 3890000,
    oldPrice: 4800000,
    rating: 4.99,
    reviewsCount: 45,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p74.jpg",
    images: ["assets/products/p74.jpg"],
    description: "Tuyệt phẩm mùi hương quý tộc kết hợp trầm hương đắt giá, hổ phách ấm áp và vanilla Madagascar huyền bí.",
    ingredients: "Oud Wood, Royal Amber, Madagascar Vanilla, Sandalwood.",
    usage: "Xịt cho những buổi tiệc đêm sang trọng.",
    stock: 5,
    isExclusive: true,
    exclusiveNote: "Số lượng chỉ còn 5 chai độc quyền"
  },
  {
    id: 75,
    name: "Tinh Dầu Thơm Phòng Khuếch Tán White Jasmine Diffuser",
    brand: "ROSELLE BOTANICALS",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 650000,
    oldPrice: 800000,
    rating: 4.85,
    reviewsCount: 110,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p75.jpg",
    images: ["assets/products/p75.jpg"],
    description: "Bộ que khuếch tán hoa nhài trắng thanh khiết, biến không gian phòng ngủ của bạn thành cung điện hoàng gia.",
    ingredients: "White Jasmine Extract, Bergamot Essential Oil, Reed Sticks.",
    usage: "Cắm 5-6 que mây vào lọ để hương thơm lan tỏa.",
    stock: 40,
    isExclusive: false
  },
  {
    id: 76,
    name: "Nước Hoa Dạng Lăn Bỏ Túi Tiện Lợi Rose Petal Roller EDP",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 450000,
    oldPrice: 580000,
    rating: 4.88,
    reviewsCount: 165,
    badge: "sale",
    badgeText: "-22% SALE",
    image: "assets/products/p76.jpg",
    images: ["assets/products/p76.jpg"],
    description: "Dạng đầu lăn pha lê nhỏ gọn bỏ túi, dặm lại mùi hương hoa hồng tươi mát bất kỳ lúc nào trong ngày.",
    ingredients: "Concentrated Rose Oil, Jojoba Carrier Oil, Vitamin E.",
    usage: "Lăn nhẹ lên cổ tay và sau mang tai.",
    stock: 60,
    isExclusive: false
  },
  {
    id: 77,
    name: "Xịt Thơm Gối & Giường Ngủ Thư Giãn Sweet Dreams Mist",
    brand: "ROSELLE BOTANICALS",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 380000,
    oldPrice: 480000,
    rating: 4.9,
    reviewsCount: 140,
    badge: "best",
    badgeText: "HOT PICK",
    image: "assets/products/p77.jpg",
    images: ["assets/products/p77.jpg"],
    description: "Hòa quyện hoa cúc La Mã và oải hương làm dịu tâm trí, xua tan âu lo và mang lại giấc ngủ êm ái.",
    ingredients: "Chamomile Water, Lavender Oil, Clary Sage, Pure Distilled Water.",
    usage: "Xịt 2-3 pump lên gối và chăn 10 phút trước khi ngủ.",
    stock: 50,
    isExclusive: false
  },
  {
    id: 78,
    name: "Nến Thơm Sáp Dừa Tinh Dầu Vanilla Warm Vanilla Glow",
    brand: "ROSELLE BOTANICALS",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 590000,
    oldPrice: 750000,
    rating: 4.82,
    reviewsCount: 95,
    badge: "new",
    badgeText: "NEW",
    image: "assets/products/p78.jpg",
    images: ["assets/products/p78.jpg"],
    description: "Hương thơm ngọt ngào ấm áp tựa chiếc bánh nướng caramel vani trong căn phòng công chúa xinh xắn.",
    ingredients: "Coconut Wax, Vanilla Bean Extract, Caramel Oil, Cotton Wick.",
    usage: "Thắp nến thư giãn trong lúc tắm hoặc đọc sách.",
    stock: 35,
    isExclusive: false
  },
  {
    id: 79,
    name: "Nước Hoa Nữ Quyến Rũ Black Orchid & Peony EDP 50ml",
    brand: "ROSELLE LUXE",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 1950000,
    oldPrice: 2450000,
    rating: 4.87,
    reviewsCount: 110,
    badge: "sale",
    badgeText: "-20% SALE",
    image: "assets/products/p79.jpg",
    images: ["assets/products/p79.jpg"],
    description: "Sự kết hợp táo bạo giữa hoa phong lan đen ma mị, hoa mẫu đơn ngọt ngào và hoắc hương phương Đông.",
    ingredients: "Black Orchid, Pink Peony, Patchouli, Pink Pepper.",
    usage: "Xịt điểm mạch tạo sức hút quyến rũ khó cưỡng.",
    stock: 30,
    isExclusive: false
  },
  {
    id: 80,
    name: "Set 4 Chai Nước Hoa Mini Hoàng Gia Roselle Discovery Set",
    brand: "ROSELLE ATELIER",
    category: "nuoc-hoa",
    categoryName: "Nước hoa",
    price: 2890000,
    oldPrice: 3800000,
    rating: 5.0,
    reviewsCount: 74,
    badge: "exclusive",
    badgeText: "ROYAL EXCLUSIVE",
    image: "assets/products/p80.jpg",
    images: ["assets/products/p80.jpg"],
    description: "Bộ sưu tập khám phá 4 tuyệt phẩm nước hoa Niche hoàng gia cao cấp nhất đặt trong hộp quà bọc lụa nhung nạm ngọc.",
    ingredients: "4x 15ml EDP (Éclat D'Or, Royal Amber, Roselle Dream, Black Orchid).",
    usage: "Trải nghiệm các nốt hương hoàng gia cho từng dịp đặc biệt.",
    stock: 7,
    isExclusive: true,
    exclusiveNote: "Bộ quà tặng giới hạn VIP Club"
  }
].filter(product => ![5, 28, 35, 36, 39, 40, 41, 43, 44, 45, 52, 55, 56, 58, 59, 63, 68].includes(product.id));

// --------------------------------------------------------------------------
// 3. UTILITY FUNCTIONS (FORMATTING & RENDERING)
// --------------------------------------------------------------------------
function formatMoney(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', 'đ');
}

function renderRatingStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += '<i class="fas fa-star"></i>';
    } else if (i === fullStars + 1 && hasHalf) {
      starsHtml += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHtml += '<i class="far fa-star"></i>';
    }
  }
  return starsHtml;
}

// --------------------------------------------------------------------------
// 4. USER AUTHENTICATION & MULTI-USER STATE ENGINE
// --------------------------------------------------------------------------
const DEFAULT_USER = {
  id: 1,
  name: "Ngọc Hân Roselle",
  email: "princess@roselle.vn",
  phone: "0988666888",
  password: "123",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  tier: "ROSELLE GOLD VIP",
  points: 2500,
  address: "88 Đường Hoa Hồng, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh"
};

function getUsers() {
  const data = localStorage.getItem(STORAGE_KEYS.USERS);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([DEFAULT_USER]));
    return [DEFAULT_USER];
  }
  return JSON.parse(data);
}

function getActiveUser() {
  const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_USER);
  if (!data) {
    // Default logged in user for instant rich demo experience
    localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(DEFAULT_USER));
    return DEFAULT_USER;
  }
  return JSON.parse(data);
}

function setActiveUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_USER);
  } else {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(user));
  }
  syncHeaderAuth();
}

function registerUser(name, email, phone, password) {
  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: "Email này đã được đăng ký tài khoản rồi nàng nhé!" };
  }
  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    phone: phone,
    password: password,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    tier: "ROSELLE SILVER VIP",
    points: 500,
    address: ""
  };
  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  setActiveUser(newUser);
  return { success: true, user: newUser };
}

function loginUser(identifier, password) {
  const users = getUsers();
  const found = users.find(u => 
    (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) && 
    u.password === password
  );
  if (found) {
    setActiveUser(found);
    return { success: true, user: found };
  }
  return { success: false, message: "Email/Số điện thoại hoặc mật khẩu chưa chính xác." };
}

function logoutUser() {
  setActiveUser(null);
  showToast("Đã đăng xuất", "Hẹn sớm gặp lại nàng tại Roselle Cosmetics!", "info");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 700);
}

// --------------------------------------------------------------------------
// 5. SHOPPING CART & WISHLIST STORAGE ENGINE
// --------------------------------------------------------------------------
function getCart() {
  const data = localStorage.getItem(STORAGE_KEYS.CART);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateHeaderCartCount();
  renderCartDrawer();
}

function addToCart(productId, quantity = 1, showFeedback = true, variant = '') {
  const product = PRODUCTS_DATA.find(p => p.id === Number(productId));
  if (!product) return;

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === Number(productId) && (!variant || item.variant === variant));

  if (existingIndex > -1) {
    cart[existingIndex].quantity += Number(quantity);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      variant: variant || 'Fullsize 50ml',
      quantity: Number(quantity)
    });
  }

  saveCart(cart);

  if (showFeedback) {
    showToast('✨ Đã thêm vào giỏ hàng', `${product.name} (x${quantity})`, 'rose');
    toggleCartDrawer(true);
  }
}

function removeFromCart(productId, variant = '') {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === Number(productId) && (!variant || item.variant === variant)));
  saveCart(cart);
  showToast('Đã xóa sản phẩm', 'Sản phẩm đã được gỡ khỏi giỏ hàng.', 'info');
}

function updateCartQuantity(productId, quantity, variant = '') {
  let cart = getCart();
  const item = cart.find(item => item.id === Number(productId) && (!variant || item.variant === variant));
  if (item) {
    item.quantity = Math.max(1, Number(quantity));
    saveCart(cart);
  }
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateHeaderCartCount() {
  const badges = document.querySelectorAll('.cart-count-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
  });
}

// Wishlist System
function getWishlist() {
  const data = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  return data ? JSON.parse(data) : [1, 22, 71];
}

function toggleWishlist(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === Number(productId));
  if (!product) return;

  let wishlist = getWishlist();
  const index = wishlist.indexOf(Number(productId));

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Đã bỏ yêu thích', `${product.name}`, 'info');
  } else {
    wishlist.push(Number(productId));
    showToast('💖 Đã thêm vào yêu thích', `${product.name}`, 'gold');
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  updateWishlistBadges();
  return index === -1;
}

function updateWishlistBadges() {
  const wishlist = getWishlist();
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(badge => {
    badge.textContent = wishlist.length;
  });

  document.querySelectorAll('.btn-wishlist-toggle').forEach(btn => {
    const pId = Number(btn.dataset.productId);
    if (wishlist.includes(pId)) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="far fa-heart"></i>';
    }
  });
}

// --------------------------------------------------------------------------
// 6. TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
function showToast(title, message, type = 'rose') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconHtml = '<i class="fas fa-heart" style="color: var(--rose-primary);"></i>';
  if (type === 'gold') iconHtml = '<i class="fas fa-crown" style="color: var(--royal-gold);"></i>';
  if (type === 'success') iconHtml = '<i class="fas fa-check-circle" style="color: #10B981;"></i>';
  if (type === 'info') iconHtml = '<i class="fas fa-sparkles" style="color: var(--rose-primary);"></i>';

  toast.innerHTML = `
    <div class="toast-icon">${iconHtml}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// --------------------------------------------------------------------------
// 7. PRODUCT CARD HTML GENERATOR
// --------------------------------------------------------------------------
function createProductCardHTML(p) {
  const wishlist = getWishlist();
  const isWished = wishlist.includes(p.id);

  let badgeClass = 'badge-new';
  if (p.badge === 'sale') badgeClass = 'badge-sale';
  if (p.badge === 'best') badgeClass = 'badge-best';
  if (p.badge === 'exclusive') badgeClass = 'badge-exclusive';

  return `
    <div class="product-card" data-category="${p.category}" data-id="${p.id}">
      <div class="product-thumb">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80';">
        <div class="product-badges">
          <span class="badge ${badgeClass}">${p.isExclusive ? '👑 ' : ''}${p.badgeText}</span>
        </div>
        <div class="product-actions-hover">
          <button class="hover-action-btn btn-wishlist-toggle ${isWished ? 'active' : ''}" data-product-id="${p.id}" title="Yêu thích">
            <i class="${isWished ? 'fas fa-heart' : 'far fa-heart'}"></i>
          </button>
          <a href="product-detail.html?id=${p.id}" class="hover-action-btn" title="Xem chi tiết">
            <i class="far fa-eye"></i>
          </a>
        </div>
        <button class="product-quick-add btn-add-cart-quick" data-product-id="${p.id}">
          <i class="fas fa-shopping-bag"></i> Thêm Vào Giỏ
        </button>
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h4 class="product-title">
          <a href="product-detail.html?id=${p.id}">${p.name}</a>
        </h4>
        <div class="product-rating">
          <div class="stars">${renderRatingStars(p.rating)}</div>
          <span class="rating-count">(${p.reviewsCount})</span>
        </div>
        <div class="product-price-box">
          <span class="product-price">${formatMoney(p.price)}</span>
          ${p.oldPrice ? `<span class="product-old-price">${formatMoney(p.oldPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 8. SLIDE-OUT CART DRAWER ENGINE
// --------------------------------------------------------------------------
function ensureCartDrawerDOM() {
  if (document.querySelector('.cart-drawer-backdrop')) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'cart-drawer-backdrop';
  
  const drawer = document.createElement('div');
  drawer.className = 'cart-drawer';
  drawer.innerHTML = `
    <div class="cart-drawer-header">
      <h3><i class="fas fa-shopping-bag" style="color: var(--rose-primary);"></i> Giỏ Hàng Roselle</h3>
      <button class="cart-drawer-close" title="Đóng">&times;</button>
    </div>
    <div class="cart-drawer-body" id="cartDrawerBody">
      <!-- Dynamic Cart Drawer Items -->
    </div>
    <div class="cart-drawer-footer" id="cartDrawerFooter">
      <div class="shipping-progress-box">
        <div class="shipping-progress-text" id="drawerShippingText">Thêm 499.000đ để được Freeship</div>
        <div class="shipping-progress-bar">
          <div class="shipping-progress-fill" id="drawerShippingFill" style="width: 0%;"></div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.1rem; margin-bottom: 14px;">
        <span>Tạm tính:</span>
        <span id="drawerSubtotal" style="color: var(--rose-primary); font-family: var(--font-heading);">0đ</span>
      </div>
      <div style="display: flex; gap: 10px;">
        <a href="cart.html" class="btn btn-outline" style="flex: 1;">XEM GIỎ HÀNG</a>
        <a href="checkout.html" class="btn btn-primary" style="flex: 1;"><i class="fas fa-crown"></i> THANH TOÁN</a>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  backdrop.addEventListener('click', () => toggleCartDrawer(false));
  drawer.querySelector('.cart-drawer-close')?.addEventListener('click', () => toggleCartDrawer(false));
}

function toggleCartDrawer(show = true) {
  ensureCartDrawerDOM();
  const backdrop = document.querySelector('.cart-drawer-backdrop');
  const drawer = document.querySelector('.cart-drawer');
  if (!backdrop || !drawer) return;

  if (show) {
    backdrop.classList.add('active');
    drawer.classList.add('active');
    renderCartDrawer();
  } else {
    backdrop.classList.remove('active');
    drawer.classList.remove('active');
  }
}

function renderCartDrawer() {
  const body = document.querySelector('#cartDrawerBody');
  const subtotalEl = document.querySelector('#drawerSubtotal');
  const shipText = document.querySelector('#drawerShippingText');
  const shipFill = document.querySelector('#drawerShippingFill');
  if (!body) return;

  const cart = getCart();
  const subtotal = getCartSubtotal();

  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 50px 10px;">
        <i class="fas fa-shopping-bag" style="font-size: 3rem; color: var(--rose-light); margin-bottom: 14px;"></i>
        <h4 style="color: var(--primary-noir); margin-bottom: 6px;">Hộp quà đang trống</h4>
        <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 20px;">Nàng hãy khám phá ngay các siêu phẩm mỹ phẩm Roselle nhé!</p>
        <a href="products.html" class="btn btn-primary btn-sm" onclick="toggleCartDrawer(false)"><i class="fas fa-sparkles"></i> MUA SẮM NGAY</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '0đ';
    if (shipFill) shipFill.style.width = '0%';
    if (shipText) shipText.textContent = 'Mua từ 499.000đ để được Freeship toàn quốc';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div style="display: flex; gap: 12px; align-items: center; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
      <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80';" style="width: 56px; height: 56px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-subtle);">
      <div style="flex: 1;">
        <h5 style="font-size: 0.88rem; font-weight: 700; color: var(--primary-noir); margin-bottom: 2px;">${item.name}</h5>
        <div style="font-size: 0.76rem; color: var(--text-muted); margin-bottom: 4px;">${item.variant || 'Fullsize'}</div>
        <div style="font-weight: 700; color: var(--rose-primary); font-size: 0.88rem;">${formatMoney(item.price)}</div>
      </div>
      <div style="display: flex; align-items: center; gap: 6px;">
        <div class="quantity-control" style="height: 32px;">
          <button class="qty-btn drawer-qty-minus" data-id="${item.id}" data-variant="${item.variant}">-</button>
          <input type="text" class="qty-input" value="${item.quantity}" readonly style="width: 32px; font-size: 0.82rem;">
          <button class="qty-btn drawer-qty-plus" data-id="${item.id}" data-variant="${item.variant}">+</button>
        </div>
        <button class="cart-remove-btn drawer-remove-btn" data-id="${item.id}" data-variant="${item.variant}" title="Xóa" style="padding: 4px;">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);

  const freeThreshold = 499000;
  if (subtotal >= freeThreshold) {
    if (shipText) shipText.innerHTML = '<strong style="color: #10B981;"><i class="fas fa-check-circle"></i> Nàng đã được MIỄN PHÍ VẬN CHUYỂN toàn quốc!</strong>';
    if (shipFill) shipFill.style.width = '100%';
  } else {
    const remain = freeThreshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
    if (shipText) shipText.textContent = `Thêm ${formatMoney(remain)} để được FREESHIP toàn quốc ✨`;
    if (shipFill) shipFill.style.width = `${pct}%`;
  }

  // Drawer event listeners
  body.querySelectorAll('.drawer-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const variant = btn.dataset.variant;
      const item = cart.find(i => i.id === id && i.variant === variant);
      if (item) {
        if (item.quantity > 1) {
          updateCartQuantity(id, item.quantity - 1, variant);
        } else {
          removeFromCart(id, variant);
        }
      }
    });
  });

  body.querySelectorAll('.drawer-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const variant = btn.dataset.variant;
      const item = cart.find(i => i.id === id && i.variant === variant);
      if (item) {
        updateCartQuantity(id, item.quantity + 1, variant);
      }
    });
  });

  body.querySelectorAll('.drawer-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const variant = btn.dataset.variant;
      removeFromCart(id, variant);
    });
  });
}

// --------------------------------------------------------------------------
// 9. HEADER & GLOBAL NAVIGATION SYNC
// --------------------------------------------------------------------------
function syncHeaderAuth() {
  const user = getActiveUser();
  const userContainers = document.querySelectorAll('.nav-actions');

  userContainers.forEach(container => {
    let authWrapper = container.querySelector('.user-menu-wrapper');
    if (!authWrapper) {
      authWrapper = document.createElement('div');
      authWrapper.className = 'user-menu-wrapper';
      const userBtn = container.querySelector('a[href="login.html"], a[href="account.html"]');
      if (userBtn) {
        userBtn.replaceWith(authWrapper);
      } else {
        container.insertBefore(authWrapper, container.querySelector('a[href="cart.html"]'));
      }
    }

    if (user) {
      authWrapper.innerHTML = `
        <button class="user-header-btn" id="userHeaderBtn" title="Tài khoản của tôi">
          <img src="${user.avatar}" alt="${user.name}" class="user-header-avatar">
          <span class="user-header-name">${user.name.split(' ').slice(-1)[0]}</span>
          <i class="fas fa-angle-down" style="font-size: 0.75rem; color: var(--rose-primary);"></i>
        </button>
        <div class="user-dropdown-menu" id="userDropdownMenu">
          <div class="user-dropdown-header">
            <h5>${user.name}</h5>
            <span><i class="fas fa-crown"></i> ${user.tier || 'ROSELLE VIP'}</span>
          </div>
          <a href="account.html#overviewTab" class="user-dropdown-item"><i class="fas fa-user-circle"></i> Hồ sơ cá nhân</a>
          <a href="account.html#ordersTab" class="user-dropdown-item"><i class="fas fa-box-open"></i> Đơn hàng của tôi</a>
          <a href="account.html#trackingTab" class="user-dropdown-item"><i class="fas fa-shipping-fast"></i> Tra cứu vận đơn</a>
          <a href="account.html#wishlistTab" class="user-dropdown-item"><i class="fas fa-heart"></i> Danh sách yêu thích</a>
          <div class="user-dropdown-divider"></div>
          <a href="#" class="user-dropdown-item btn-header-logout" style="color: #E11D48;"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
        </div>
      `;

      const headerBtn = authWrapper.querySelector('#userHeaderBtn');
      const dropdown = authWrapper.querySelector('#userDropdownMenu');
      const logoutBtn = authWrapper.querySelector('.btn-header-logout');

      headerBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown?.classList.toggle('active');
      });

      logoutBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        logoutUser();
      });
    } else {
      authWrapper.innerHTML = `
        <a href="login.html" class="action-btn" title="Đăng nhập / Đăng ký">
          <i class="far fa-user"></i>
        </a>
      `;
    }
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.user-dropdown-menu').forEach(menu => menu.classList.remove('active'));
  });
}

function initHeaderAndSearch() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Cart button trigger drawer
  document.querySelectorAll('a[href="cart.html"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!window.location.pathname.includes('cart.html') && !window.location.pathname.includes('checkout.html')) {
        e.preventDefault();
        toggleCartDrawer(true);
      }
    });
  });

  // Search Modal
  const searchBtn = document.querySelector('.btn-search-trigger');
  const searchModal = document.querySelector('.search-modal');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.querySelector('#globalSearchInput');
  const searchResultsContainer = document.querySelector('#searchResultsList');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('active');
      searchInput?.focus();
    });

    searchClose?.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.remove('active');
      }
    });

    if (searchInput && searchResultsContainer) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchResultsContainer.innerHTML = '<p class="text-center" style="padding: 20px; color: var(--text-light);">Nhập ít nhất 2 ký tự để tìm kiếm mỹ phẩm Roselle...</p>';
          return;
        }

        const matches = PRODUCTS_DATA.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.brand.toLowerCase().includes(query) ||
          p.categoryName.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
          searchResultsContainer.innerHTML = '<p class="text-center" style="padding: 20px; color: var(--text-muted);">Không tìm thấy sản phẩm phù hợp.</p>';
          return;
        }

        searchResultsContainer.innerHTML = matches.map(p => `
          <a href="product-detail.html?id=${p.id}" class="search-result-item" style="display: flex; gap: 12px; align-items: center; padding: 10px; border-bottom: 1px solid var(--border-subtle);">
            <img src="${p.image}" alt="${p.name}" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
              <h5 style="font-size: 0.9rem; margin-bottom: 2px; color: var(--primary-noir);">${p.name}</h5>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--rose-primary);">${formatMoney(p.price)}</div>
            </div>
            <span class="badge ${p.isExclusive ? 'badge-exclusive' : 'badge-new'}" style="font-size: 0.65rem;">${p.categoryName}</span>
          </a>
        `).join('');
      });
    }
  }

  // Delegated Quick Add & Wishlist Clicks
  document.addEventListener('click', (e) => {
    const quickAddBtn = e.target.closest('.btn-add-cart-quick');
    if (quickAddBtn) {
      e.preventDefault();
      const pId = quickAddBtn.dataset.productId;
      addToCart(pId, 1, true);
    }

    const wishBtn = e.target.closest('.btn-wishlist-toggle');
    if (wishBtn) {
      e.preventDefault();
      const pId = wishBtn.dataset.productId;
      toggleWishlist(pId);
    }
  });

  syncHeaderAuth();
  updateHeaderCartCount();
  updateWishlistBadges();
  ensureCartDrawerDOM();
}

// --------------------------------------------------------------------------
// 10. CHECKOUT & PAYMENT METHOD ENGINE (VIETQR / MOMO / CARD / COD)
// --------------------------------------------------------------------------
function initCheckoutPage() {
  const checkoutItemsContainer = document.querySelector('#checkoutOrderItems');
  const checkoutSubtotalEl = document.querySelector('#checkoutSubtotal');
  const checkoutShippingEl = document.querySelector('#checkoutShipping');
  const checkoutDiscountEl = document.querySelector('#checkoutDiscount');
  const checkoutGrandTotalEl = document.querySelector('#checkoutGrandTotal');
  const checkoutForm = document.querySelector('#checkoutForm');
  const orderSuccessModal = document.querySelector('#orderSuccessModal');

  // Coupon variables
  let appliedDiscount = 0;

  function calculateTotals() {
    const subtotal = getCartSubtotal();
    const shipping = subtotal >= 499000 || subtotal === 0 ? 0 : 30000;
    const grandTotal = Math.max(0, subtotal - appliedDiscount + shipping);
    return { subtotal, shipping, grandTotal, appliedDiscount };
  }

  function renderCheckoutSummary() {
    const cart = getCart();
    if (cart.length === 0 && !orderSuccessModal?.classList.contains('active')) {
      showToast('Giỏ hàng trống', 'Nàng hãy chọn những món mỹ phẩm yêu thích trước nhé!', 'info');
    }

    if (checkoutItemsContainer) {
      checkoutItemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--border-subtle);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-subtle);">
            <div>
              <h5 style="font-size: 0.88rem; margin: 0; color: var(--primary-noir);">${item.name}</h5>
              <div style="font-size: 0.76rem; color: var(--text-muted);">${item.variant || 'Fullsize'} • SL: ${item.quantity}</div>
            </div>
          </div>
          <span style="font-weight: 700; color: var(--rose-primary); font-family: var(--font-heading);">${formatMoney(item.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    const { subtotal, shipping, grandTotal } = calculateTotals();

    if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = formatMoney(subtotal);
    if (checkoutShippingEl) checkoutShippingEl.textContent = shipping === 0 ? 'Miễn phí' : formatMoney(shipping);
    if (checkoutDiscountEl) checkoutDiscountEl.textContent = appliedDiscount > 0 ? `-${formatMoney(appliedDiscount)}` : '0đ';
    if (checkoutGrandTotalEl) checkoutGrandTotalEl.textContent = formatMoney(grandTotal);

    updateVietQRDetails(grandTotal);
  }

  // Dynamic VietQR generator
  function updateVietQRDetails(amount) {
    const qrImg = document.querySelector('#vietqrImage');
    const qrAmountDisplay = document.querySelector('#vietqrAmountDisplay');
    const qrMemoDisplay = document.querySelector('#vietqrMemoDisplay');
    const currentOrderCode = 'ROS' + Math.floor(100000 + Math.random() * 900000);

    if (qrAmountDisplay) qrAmountDisplay.textContent = formatMoney(amount);
    if (qrMemoDisplay) qrMemoDisplay.textContent = currentOrderCode;

    if (qrImg) {
      const encodedAccount = 'CONG%20TY%20CP%20MY%20PHAM%20ROSELLE';
      const memo = currentOrderCode;
      qrImg.src = `https://api.vietqr.io/image/970422-888866669999-q8eU1K9.jpg?accountName=${encodedAccount}&amount=${amount}&addInfo=${memo}`;
    }
  }

  // Payment method switcher
  const paymentItems = document.querySelectorAll('.payment-method-item');
  const vietqrBox = document.querySelector('#vietqrPaymentBox');
  const cardBox = document.querySelector('#cardPaymentBox');

  paymentItems.forEach(item => {
    item.addEventListener('click', () => {
      paymentItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const radio = item.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const methodVal = radio?.value;
      if (vietqrBox) vietqrBox.style.display = methodVal === 'BANKING' ? 'block' : 'none';
      if (cardBox) cardBox.style.display = methodVal === 'CARD' ? 'block' : 'none';
    });
  });

  // Copy Buttons for Bank Info
  document.querySelectorAll('.btn-copy-info').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('Đã sao chép', `Nội dung: ${textToCopy}`, 'success');
        });
      }
    });
  });

  // Credit Card formatting
  const cardNumberInput = document.querySelector('#cardNumInput');
  const cardExpiryInput = document.querySelector('#cardExpInput');
  const cardPreviewNum = document.querySelector('#cardPreviewNumber');
  const cardPreviewExp = document.querySelector('#cardPreviewExpiry');
  const cardPreviewName = document.querySelector('#cardPreviewHolder');
  const cardHolderInput = document.querySelector('#cardNameInput');

  cardNumberInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = val;
    if (cardPreviewNum) cardPreviewNum.textContent = val || '•••• •••• •••• ••••';
  });

  cardExpiryInput?.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    e.target.value = val;
    if (cardPreviewExp) cardPreviewExp.textContent = val || 'MM/YY';
  });

  cardHolderInput?.addEventListener('input', (e) => {
    if (cardPreviewName) cardPreviewName.textContent = e.target.value.toUpperCase() || 'TEN CHU THE';
  });

  // Coupon application
  const couponInput = document.querySelector('#checkoutCouponInput');
  const couponBtn = document.querySelector('#checkoutCouponBtn');

  function applyDiscountCode(code) {
    const subtotal = getCartSubtotal();
    if (code === 'ROSELLE10' || code === 'BEAUTY10') {
      appliedDiscount = Math.round(subtotal * 0.1);
      showToast('Áp dụng thành công!', 'Giảm ngay 10% tổng đơn hàng ✨', 'rose');
    } else if (code === 'ROSELLE20' || code === 'VIP20') {
      appliedDiscount = Math.round(subtotal * 0.2);
      showToast('Đặc quyền VIP', 'Giảm ngay 20% tổng đơn hàng 👑', 'gold');
    } else if (code === 'FREESHIP') {
      appliedDiscount = 30000;
      showToast('Áp dụng thành công!', 'Miễn phí giao hàng toàn quốc 🚚', 'success');
    } else if (code === 'WELCOME50') {
      appliedDiscount = 50000;
      showToast('Chào mừng thành viên mới!', 'Giảm trực tiếp 50.000đ 🌸', 'rose');
    } else {
      showToast('Mã không hợp lệ', 'Nàng hãy thử mã ROSELLE10 hoặc FREESHIP nhé!', 'info');
      return;
    }
    renderCheckoutSummary();
  }

  couponBtn?.addEventListener('click', () => {
    applyDiscountCode(couponInput?.value.trim().toUpperCase());
  });

  document.querySelectorAll('.coupon-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.dataset.code || chip.textContent.trim();
      if (couponInput) couponInput.value = code;
      applyDiscountCode(code);
    });
  });

  // Pre-fill user information if logged in
  const user = getActiveUser();
  if (user) {
    const nameInput = document.querySelector('#checkoutName');
    const phoneInput = document.querySelector('#checkoutPhone');
    const emailInput = document.querySelector('#checkoutEmail');
    const addressInput = document.querySelector('#checkoutAddress');

    if (nameInput && !nameInput.value) nameInput.value = user.name;
    if (phoneInput && !phoneInput.value) phoneInput.value = user.phone;
    if (emailInput && !emailInput.value) emailInput.value = user.email;
    if (addressInput && !addressInput.value && user.address) addressInput.value = user.address;
  }

  // Checkout Form Submission
  checkoutForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) {
      showToast('Giỏ hàng trống', 'Nàng hãy thêm sản phẩm trước khi thanh toán nhé!', 'info');
      return;
    }

    const name = document.querySelector('#checkoutName')?.value;
    const phone = document.querySelector('#checkoutPhone')?.value;
    const email = document.querySelector('#checkoutEmail')?.value;
    const address = document.querySelector('#checkoutAddress')?.value;
    const note = document.querySelector('#checkoutNote')?.value || '';
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'COD';

    const randomOrderCode = 'ROS-' + Math.floor(100000 + Math.random() * 900000);
    const { subtotal, shipping, grandTotal, appliedDiscount } = calculateTotals();

    let paymentMethodName = 'Thanh toán tiền mặt khi nhận hàng (COD)';
    if (paymentMethod === 'BANKING') paymentMethodName = 'Chuyển khoản VietQR 24/7';
    if (paymentMethod === 'MOMO') paymentMethodName = 'Ví điện tử MoMo';
    if (paymentMethod === 'CARD') paymentMethodName = 'Thẻ tín dụng Quốc tế';

    const orderData = {
      orderCode: randomOrderCode,
      date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      customerName: name,
      phone: phone,
      email: email,
      address: address,
      note: note,
      items: cart,
      subtotal: subtotal,
      discount: appliedDiscount,
      shipping: shipping,
      total: grandTotal,
      paymentMethod: paymentMethodName,
      statusCode: 'ChoXacNhan',
      status: '👑 Đang chuẩn bị hộp quà Roselle',
      trackingSteps: [
        { label: 'Đặt hàng thành công', time: 'Vừa xong', completed: true },
        { label: 'Roselle tiếp nhận đơn', time: 'Đang xử lý', completed: true },
        { label: 'Đóng gói quà lụa nhung', time: 'Dự kiến hôm nay', completed: false },
        { label: 'Bàn giao vận chuyển', time: 'Dự kiến ngày mai', completed: false },
        { label: 'Giao hàng thành công', time: '1-2 ngày tới', completed: false }
      ]
    };

    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]');
    existingOrders.unshift(orderData);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(existingOrders));

    // Show modal
    const orderCodeDisplay = document.querySelector('#successOrderCode');
    const orderTotalDisplay = document.querySelector('#successOrderTotal');
    const orderCustomerDisplay = document.querySelector('#successOrderCustomer');

    if (orderCodeDisplay) orderCodeDisplay.textContent = randomOrderCode;
    if (orderTotalDisplay) orderTotalDisplay.textContent = formatMoney(grandTotal);
    if (orderCustomerDisplay) orderCustomerDisplay.textContent = `${name} (${phone}) - ${address}`;

    if (orderSuccessModal) orderSuccessModal.classList.add('active');

    // Clear cart
    saveCart([]);
  });

  // Print Invoice Button
  document.querySelector('#btnPrintInvoice')?.addEventListener('click', () => {
    window.print();
  });

  renderCheckoutSummary();
}

// --------------------------------------------------------------------------
// 11. CART PAGE ENGINE (CART.HTML)
// --------------------------------------------------------------------------
function initCartPage() {
  const cartTableBody = document.querySelector('#cartTableBody');
  const cartSummaryWrapper = document.querySelector('#cartSummaryWrapper');
  const emptyCartState = document.querySelector('#emptyCartState');
  const cartSubtotalEl = document.querySelector('#cartSubtotal');
  const cartDiscountEl = document.querySelector('#cartDiscount');
  const cartShippingEl = document.querySelector('#cartShipping');
  const cartGrandTotalEl = document.querySelector('#cartGrandTotal');
  const couponInput = document.querySelector('#couponCodeInput');
  const applyCouponBtn = document.querySelector('#applyCouponBtn');
  const shipText = document.querySelector('#cartShippingNotice');
  const shipFill = document.querySelector('#cartShippingFill');

  let discountPercent = 0;
  let fixedDiscount = 0;

  function renderCart() {
    const cart = getCart();
    if (!cartTableBody) return;

    if (cart.length === 0) {
      if (cartTableBody.closest('.cart-table-wrapper')) {
        cartTableBody.closest('.cart-table-wrapper').style.display = 'none';
      }
      if (cartSummaryWrapper) cartSummaryWrapper.style.display = 'none';
      if (emptyCartState) emptyCartState.style.display = 'block';
      return;
    }

    if (cartTableBody.closest('.cart-table-wrapper')) {
      cartTableBody.closest('.cart-table-wrapper').style.display = 'block';
    }
    if (cartSummaryWrapper) cartSummaryWrapper.style.display = 'block';
    if (emptyCartState) emptyCartState.style.display = 'none';

    cartTableBody.innerHTML = cart.map(item => `
      <tr data-id="${item.id}" data-variant="${item.variant}">
        <td>
          <div class="cart-product-cell">
            <img src="${item.image}" alt="${item.name}" class="cart-product-img">
            <div>
              <h4 class="cart-product-title">${item.name}</h4>
              <span class="cart-product-meta">${item.brand} • ${item.variant || 'Fullsize 50ml'}</span>
            </div>
          </div>
        </td>
        <td class="cart-price-cell">${formatMoney(item.price)}</td>
        <td>
          <div class="quantity-control">
            <button class="qty-btn cart-qty-minus" data-id="${item.id}" data-variant="${item.variant}">-</button>
            <input type="text" class="qty-input" value="${item.quantity}" readonly>
            <button class="qty-btn cart-qty-plus" data-id="${item.id}" data-variant="${item.variant}">+</button>
          </div>
        </td>
        <td class="cart-subtotal-cell">${formatMoney(item.price * item.quantity)}</td>
        <td style="text-align: center;">
          <button class="cart-remove-btn" data-id="${item.id}" data-variant="${item.variant}" title="Xóa">
            <i class="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `).join('');

    const subtotal = getCartSubtotal();
    const discountAmount = Math.round(subtotal * discountPercent) + fixedDiscount;
    const shipping = subtotal >= 499000 || subtotal === 0 ? 0 : 30000;
    const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatMoney(subtotal);
    if (cartDiscountEl) cartDiscountEl.textContent = discountAmount > 0 ? `-${formatMoney(discountAmount)}` : '0đ';
    if (cartShippingEl) cartShippingEl.textContent = shipping === 0 ? 'Miễn phí' : formatMoney(shipping);
    if (cartGrandTotalEl) cartGrandTotalEl.textContent = formatMoney(grandTotal);

    // Free shipping threshold
    if (shipText && shipFill) {
      if (subtotal >= 499000) {
        shipText.innerHTML = '<strong style="color: #10B981;"><i class="fas fa-check-circle"></i> Đơn hàng của nàng đã đủ điều kiện FREESHIP toàn quốc!</strong>';
        shipFill.style.width = '100%';
      } else {
        const remain = 499000 - subtotal;
        const pct = Math.min(100, Math.round((subtotal / 499000) * 100));
        shipText.textContent = `Mua thêm ${formatMoney(remain)} để được FREESHIP toàn quốc ✨`;
        shipFill.style.width = `${pct}%`;
      }
    }
  }

  cartTableBody?.addEventListener('click', (e) => {
    const minusBtn = e.target.closest('.cart-qty-minus');
    const plusBtn = e.target.closest('.cart-qty-plus');
    const removeBtn = e.target.closest('.cart-remove-btn');

    if (minusBtn) {
      const id = Number(minusBtn.dataset.id);
      const variant = minusBtn.dataset.variant;
      const cart = getCart();
      const item = cart.find(i => i.id === id && i.variant === variant);
      if (item) {
        if (item.quantity > 1) {
          updateCartQuantity(id, item.quantity - 1, variant);
        } else {
          removeFromCart(id, variant);
        }
        renderCart();
      }
    }

    if (plusBtn) {
      const id = Number(plusBtn.dataset.id);
      const variant = plusBtn.dataset.variant;
      const cart = getCart();
      const item = cart.find(i => i.id === id && i.variant === variant);
      if (item) {
        updateCartQuantity(id, item.quantity + 1, variant);
        renderCart();
      }
    }

    if (removeBtn) {
      const id = Number(removeBtn.dataset.id);
      const variant = removeBtn.dataset.variant;
      removeFromCart(id, variant);
      renderCart();
    }
  });

  applyCouponBtn?.addEventListener('click', () => {
    const code = couponInput?.value.trim().toUpperCase();
    if (code === 'ROSELLE10' || code === 'BEAUTY10') {
      discountPercent = 0.1;
      fixedDiscount = 0;
      showToast('Áp dụng mã thành công!', 'Nàng được giảm ngay 10% tổng đơn hàng ✨', 'rose');
      renderCart();
    } else if (code === 'ROSELLE20' || code === 'VIP20') {
      discountPercent = 0.2;
      fixedDiscount = 0;
      showToast('Áp dụng mã thành công!', 'Đặc quyền VIP giảm ngay 20% tổng đơn hàng 👑', 'gold');
      renderCart();
    } else if (code === 'FREESHIP') {
      fixedDiscount = 30000;
      discountPercent = 0;
      showToast('Áp dụng mã thành công!', 'Miễn phí vận chuyển toàn quốc 🚚', 'success');
      renderCart();
    } else if (code === 'WELCOME50') {
      fixedDiscount = 50000;
      discountPercent = 0;
      showToast('Chào mừng thành viên mới!', 'Giảm trực tiếp 50.000đ 🌸', 'rose');
      renderCart();
    } else {
      showToast('Mã không hợp lệ', 'Nàng hãy thử mã ROSELLE10 hoặc FREESHIP nhé!', 'info');
    }
  });

  document.querySelectorAll('.coupon-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.dataset.code || chip.textContent.trim();
      if (couponInput) couponInput.value = code;
      applyCouponBtn?.click();
    });
  });

  renderCart();
}

// --------------------------------------------------------------------------
// 12. ACCOUNT DASHBOARD & ORDER TRACKING ENGINE (ACCOUNT.HTML)
// --------------------------------------------------------------------------
function initAccountPage() {
  const user = getActiveUser();
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  // User Profile displays
  document.querySelectorAll('.user-display-name').forEach(el => el.textContent = user.name);
  document.querySelectorAll('.user-display-email').forEach(el => el.textContent = user.email);
  document.querySelectorAll('.user-display-phone').forEach(el => el.textContent = user.phone);
  document.querySelectorAll('.user-display-tier').forEach(el => el.textContent = user.tier || 'ROSELLE GOLD VIP');
  document.querySelectorAll('.user-display-points').forEach(el => el.textContent = (user.points || 2500).toLocaleString());
  document.querySelectorAll('.user-display-avatar').forEach(img => img.src = user.avatar);

  // Tab switcher
  const navLinks = document.querySelectorAll('.account-nav-link');
  const tabPanes = document.querySelectorAll('.account-tab-pane');

  function activateTab(tabId) {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${tabId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === tabId) {
        pane.style.display = 'block';
      } else {
        pane.style.display = 'none';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        activateTab(href.substring(1));
      }
    });
  });

  // Handle URL hash tab switching
  if (window.location.hash) {
    activateTab(window.location.hash.substring(1));
  }

  // Edit Profile Form
  const profileForm = document.querySelector('#editProfileForm');
  if (profileForm) {
    const nameIn = document.querySelector('#profName');
    const phoneIn = document.querySelector('#profPhone');
    const emailIn = document.querySelector('#profEmail');
    const addrIn = document.querySelector('#profAddress');

    if (nameIn) nameIn.value = user.name;
    if (phoneIn) phoneIn.value = user.phone;
    if (emailIn) emailIn.value = user.email;
    if (addrIn) addrIn.value = user.address || '';

    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      user.name = nameIn?.value || user.name;
      user.phone = phoneIn?.value || user.phone;
      user.address = addrIn?.value || user.address;

      setActiveUser(user);
      showToast('Đã lưu thay đổi', 'Thông tin hồ sơ cá nhân đã được cập nhật thành công!', 'success');
      setTimeout(() => window.location.reload(), 800);
    });
  }

  // Render Orders History
  const ordersContainer = document.querySelector('#accountOrdersList');
  const orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]');

  function renderOrders(filterStatus = 'all') {
    if (!ordersContainer) return;

    let filtered = orders;
    if (filterStatus !== 'all') {
      filtered = orders.filter(o => o.statusCode === filterStatus);
    }

    if (filtered.length === 0) {
      ordersContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; background: var(--rose-bubble); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <i class="fas fa-box-open" style="font-size: 2.5rem; color: var(--rose-light); margin-bottom: 12px;"></i>
          <h4 style="color: var(--primary-noir);">Không có đơn hàng nào</h4>
          <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 16px;">Nàng hãy chọn những món mỹ phẩm ưng ý để làm đẹp cho mình nhé!</p>
          <a href="products.html" class="btn btn-primary btn-sm"><i class="fas fa-sparkles"></i> KHÁM PHÁ MỸ PHẨM</a>
        </div>
      `;
      return;
    }

    ordersContainer.innerHTML = filtered.map(ord => `
      <div style="border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; margin-bottom: 18px; background: #FFFFFF; box-shadow: var(--shadow-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
          <div>
            <strong style="color: var(--primary-noir); font-size: 1.05rem;">Đơn hàng #${ord.orderCode}</strong>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Ngày đặt: ${ord.date} • ${ord.paymentMethod}</div>
          </div>
          <span class="badge badge-exclusive" style="font-size: 0.72rem;">${ord.status}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
          ${ord.items.map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${item.image}" alt="${item.name}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;">
                <div>
                  <span style="font-weight: 600; color: var(--primary-noir);">${item.name}</span>
                  <div style="font-size: 0.76rem; color: var(--text-muted);">${item.variant || ''} x${item.quantity}</div>
                </div>
              </div>
              <span style="font-weight: 700; color: var(--rose-primary); font-family: var(--font-heading);">${formatMoney(item.price * item.quantity)}</span>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700; border-top: 1px dashed var(--border-subtle); padding-top: 12px; flex-wrap: wrap; gap: 10px;">
          <div>
            <span style="font-size: 0.88rem; color: var(--text-muted);">Tổng thanh toán: </span>
            <span style="color: var(--rose-primary); font-family: var(--font-heading); font-size: 1.25rem;">${formatMoney(ord.total)}</span>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-rose btn-sm btn-reorder" data-code="${ord.orderCode}"><i class="fas fa-sync-alt"></i> Mua Lại</button>
            <button class="btn btn-outline btn-sm btn-track-order" data-code="${ord.orderCode}"><i class="fas fa-shipping-fast"></i> Tra Cứu</button>
          </div>
        </div>
      </div>
    `).join('');

    // Reorder action
    ordersContainer.querySelectorAll('.btn-reorder').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        const ord = orders.find(o => o.orderCode === code);
        if (ord) {
          ord.items.forEach(item => addToCart(item.id, item.quantity, false, item.variant));
          showToast('Đã thêm vào giỏ hàng', 'Tất cả sản phẩm đã được đưa vào giỏ!', 'success');
          toggleCartDrawer(true);
        }
      });
    });

    // Tracking action
    ordersContainer.querySelectorAll('.btn-track-order').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        activateTab('trackingTab');
        const trackInput = document.querySelector('#trackingOrderInput');
        if (trackInput) {
          trackInput.value = code;
          document.querySelector('#btnDoTrackOrder')?.click();
        }
      });
    });
  }

  // Order filter pills
  document.querySelectorAll('.order-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.order-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderOrders(pill.dataset.status);
    });
  });

  // Tracking tab functionality
  const btnDoTrack = document.querySelector('#btnDoTrackOrder');
  const trackInput = document.querySelector('#trackingOrderInput');
  const trackingResultBox = document.querySelector('#trackingResultBox');

  btnDoTrack?.addEventListener('click', () => {
    const code = trackInput?.value.trim().toUpperCase();
    if (!code) {
      showToast('Chưa nhập mã đơn', 'Nàng hãy nhập mã đơn hàng (Ví dụ: ROS-123456)', 'info');
      return;
    }

    const found = orders.find(o => o.orderCode.toUpperCase() === code || o.orderCode.toUpperCase().includes(code));
    if (!found) {
      if (trackingResultBox) {
        trackingResultBox.innerHTML = `
          <div style="text-align: center; padding: 30px; background: var(--rose-bubble); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <i class="fas fa-search" style="font-size: 2rem; color: var(--rose-primary); margin-bottom: 10px;"></i>
            <h4>Không tìm thấy vận đơn #${code}</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Nàng vui lòng kiểm tra lại chính xác mã đơn hàng nhé!</p>
          </div>
        `;
      }
      return;
    }

    if (trackingResultBox) {
      trackingResultBox.innerHTML = `
        <div style="background: #FFFFFF; border: 1.5px solid var(--rose-primary); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 12px; margin-bottom: 18px;">
            <div>
              <h4 style="color: var(--primary-noir); margin: 0;">Vận đơn #${found.orderCode}</h4>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Đơn vị vận chuyển: <strong>Ahamove Express VIP</strong></div>
            </div>
            <span class="badge badge-sale">${found.status}</span>
          </div>

          <!-- Stepper -->
          <div class="tracking-stepper">
            ${(found.trackingSteps || []).map((step, idx) => `
              <div class="step-item ${step.completed ? 'completed' : (idx === 2 ? 'active' : '')}">
                <div class="step-circle">${step.completed ? '✓' : idx + 1}</div>
                <div class="step-label">${step.label}</div>
              </div>
            `).join('')}
          </div>

          <div style="background: var(--rose-bubble); border-radius: var(--radius-sm); padding: 14px; font-size: 0.85rem; line-height: 1.7; color: var(--text-dark);">
            <div><strong>Người nhận:</strong> ${found.customerName} (${found.phone})</div>
            <div><strong>Địa chỉ giao:</strong> ${found.address}</div>
            <div><strong>Tổng tiền thu hộ:</strong> <span style="color: var(--rose-primary); font-weight: 700;">${formatMoney(found.total)}</span></div>
          </div>
        </div>
      `;
    }
  });

  // Wishlist in Dashboard
  const wishlistContainer = document.querySelector('#accountWishlistGrid');
  if (wishlistContainer) {
    const wishIds = getWishlist();
    const wishProducts = PRODUCTS_DATA.filter(p => wishIds.includes(p.id));

    if (wishProducts.length === 0) {
      wishlistContainer.innerHTML = '<p style="color: var(--text-muted); padding: 30px 0; grid-column: 1 / -1; text-align: center;">Danh sách yêu thích đang trống. Hãy thả tim các món mỹ phẩm nàng yêu nhé! ❤️</p>';
    } else {
      wishlistContainer.innerHTML = wishProducts.map(p => createProductCardHTML(p)).join('');
    }
  }

  // Logout button
  document.querySelector('#btnLogout')?.addEventListener('click', (e) => {
    e.preventDefault();
    logoutUser();
  });

  renderOrders();
}

// --------------------------------------------------------------------------
// 13. LOGIN & REGISTER PAGE ENGINE (LOGIN.HTML)
// --------------------------------------------------------------------------
function initLoginPage() {
  const tabBtns = document.querySelectorAll('.auth-tab-btn');
  const loginForm = document.querySelector('#loginForm');
  const registerForm = document.querySelector('#registerForm');
  const forgotModal = document.querySelector('#forgotPasswordModal');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.tab === 'login') {
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
      } else {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
      }
    });
  });

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#loginEmail')?.value;
    const pass = document.querySelector('#loginPassword')?.value;

    const res = loginUser(email, pass);
    if (res.success) {
      showToast('Đăng nhập thành công', `Chào mừng ${res.user.name} quay trở lại Roselle! 👑✨`, 'rose');
      setTimeout(() => {
        window.location.href = 'account.html';
      }, 800);
    } else {
      showToast('Đăng nhập thất bại', res.message, 'info');
    }
  });

  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#regName')?.value;
    const email = document.querySelector('#regEmail')?.value;
    const phone = document.querySelector('#regPhone')?.value;
    const pass = document.querySelector('#regPassword')?.value;
    const passConfirm = document.querySelector('#regPasswordConfirm')?.value;

    if (passConfirm && pass !== passConfirm) {
      showToast('Mật khẩu không khớp', 'Nàng vui lòng nhập lại mật khẩu xác nhận nhé!', 'info');
      return;
    }

    const res = registerUser(name, email, phone, pass);
    if (res.success) {
      showToast('Đăng ký thành công', 'Tặng nàng voucher 50K chào mừng thành viên mới! 🌸', 'rose');
      setTimeout(() => {
        window.location.href = 'account.html';
      }, 800);
    } else {
      showToast('Đăng ký không thành công', res.message, 'info');
    }
  });

  // Forgot password triggers
  document.querySelector('#btnForgotPass')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (forgotModal) forgotModal.classList.add('active');
  });

  document.querySelector('#forgotCloseBtn')?.addEventListener('click', () => {
    if (forgotModal) forgotModal.classList.remove('active');
  });
}

// --------------------------------------------------------------------------
// 14. PRODUCTS CATALOG PAGE ENGINE (PRODUCTS.HTML)
// --------------------------------------------------------------------------
function initProductsPage() {
  const catalogGrid = document.querySelector('#catalogProductsGrid');
  if (!catalogGrid) return;

  let currentCategory = 'all';
  let currentSort = 'default';
  let currentMaxPrice = 5000000;
  let currentSearchQuery = '';

  const sortSelect = document.querySelector('#catalogSortSelect');
  const priceSlider = document.querySelector('#priceRangeSlider');
  const priceDisplay = document.querySelector('#priceRangeValue');
  const categoryPills = document.querySelectorAll('.category-filter-link');
  const totalCountEl = document.querySelector('#catalogTotalCount');

  document.querySelectorAll('[data-category-count]').forEach(countEl => {
    const category = countEl.dataset.categoryCount;
    countEl.textContent = category === 'all'
      ? PRODUCTS_DATA.length
      : PRODUCTS_DATA.filter(product => product.category === category).length;
  });

  function renderCatalog() {
    let filtered = PRODUCTS_DATA.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchPrice = p.price <= currentMaxPrice;
      const matchSearch = !currentSearchQuery || 
        p.name.toLowerCase().includes(currentSearchQuery) ||
        p.brand.toLowerCase().includes(currentSearchQuery) ||
        p.categoryName.toLowerCase().includes(currentSearchQuery);
      return matchCat && matchPrice && matchSearch;
    });

    // Sorting
    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    if (totalCountEl) totalCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: 20px; border: 1px solid var(--border-subtle);">
          <i class="fas fa-crown" style="font-size: 3rem; color: var(--rose-primary); margin-bottom: 16px;"></i>
          <h3 style="color: var(--primary-noir);">Không tìm thấy sản phẩm</h3>
          <p style="color: var(--text-muted);">Hãy thử điều chỉnh bộ lọc giá hoặc chọn danh mục khác nhé nàng!</p>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    updateWishlistBadges();
  }

  // Read URL params
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
    categoryPills.forEach(pill => {
      if (pill.dataset.category === catParam) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderCatalog();
    });
  });

  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });

  priceSlider?.addEventListener('input', (e) => {
    currentMaxPrice = Number(e.target.value);
    if (priceDisplay) priceDisplay.textContent = formatMoney(currentMaxPrice);
    renderCatalog();
  });

  renderCatalog();
}

// --------------------------------------------------------------------------
// 15. PRODUCT DETAIL & REVIEW ENGINE (PRODUCT-DETAIL.HTML)
// --------------------------------------------------------------------------
function initProductDetailPage() {
  const detailContainer = document.querySelector('#productDetailSection');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = Number(urlParams.get('id')) || 1;
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];

  document.title = `${product.name} - ROSELLE COSMETICS`;

  const breadcrumbEl = document.querySelector('#productDetailBreadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="index.html">Trang chủ</a> <span>/</span>
      <a href="products.html?category=${product.category}">${product.categoryName}</a> <span>/</span>
      <span>${product.name}</span>
    `;
  }

  const mainImg = document.querySelector('#detailMainImg');
  const thumbsContainer = document.querySelector('#detailThumbnails');
  const titleEl = document.querySelector('#detailProductTitle');
  const brandEl = document.querySelector('#detailProductBrand');
  const priceEl = document.querySelector('#detailProductPrice');
  const oldPriceEl = document.querySelector('#detailProductOldPrice');
  const ratingStarsEl = document.querySelector('#detailRatingStars');
  const ratingCountEl = document.querySelector('#detailRatingCount');
  const descEl = document.querySelector('#detailDescription');
  const stockEl = document.querySelector('#detailStockStatus');
  const tabDescEl = document.querySelector('#tabDescriptionContent');
  const tabIngredEl = document.querySelector('#tabIngredientsContent');
  const tabUsageEl = document.querySelector('#tabUsageContent');

  if (mainImg) mainImg.src = product.images[0] || product.image;
  if (thumbsContainer) {
    thumbsContainer.innerHTML = (product.images || [product.image]).map((img, i) => `
      <div class="detail-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
        <img src="${img}" alt="${product.name}">
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.detail-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = thumb.dataset.src;
      });
    });
  }

  if (titleEl) titleEl.textContent = product.name;
  if (brandEl) brandEl.textContent = product.brand;
  if (priceEl) priceEl.textContent = formatMoney(product.price);
  if (oldPriceEl) {
    oldPriceEl.textContent = product.oldPrice ? formatMoney(product.oldPrice) : '';
  }
  if (ratingStarsEl) ratingStarsEl.innerHTML = renderRatingStars(product.rating);
  if (ratingCountEl) ratingCountEl.textContent = `(${product.reviewsCount} đánh giá từ khách hàng)`;
  if (descEl) descEl.textContent = product.description;
  if (stockEl) {
    stockEl.innerHTML = product.stock > 0 
      ? `<span style="color: #10B981; font-weight: 700;"><i class="fas fa-check-circle"></i> Còn hàng (${product.stock} sản phẩm sẵn sàng)</span>` 
      : `<span style="color: #E11D48; font-weight: 700;"><i class="fas fa-times-circle"></i> Tạm hết hàng đợt này</span>`;
  }

  if (tabDescEl) tabDescEl.innerHTML = `<p>${product.description}</p><p>Sản phẩm được tuyển chọn theo tiêu chuẩn hoàng gia Roselle, bảo đảm 100% chính hãng và an toàn dịu nhẹ cho mọi làn da.</p>`;
  if (tabIngredEl) tabIngredEl.innerHTML = `<p><strong>Bảng thành phần quý phái:</strong></p><p>${product.ingredients || 'Thành phần tinh chất thiên nhiên, ngọc trai, hoa hồng hữu cơ an toàn lành tính.'}</p>`;
  if (tabUsageEl) tabUsageEl.innerHTML = `<p><strong>Hướng dẫn chăm sóc chuẩn công chúa:</strong></p><p>${product.usage || 'Sử dụng đều đặn mỗi ngày để duy trì vẻ đẹp rạng ngời.'}</p>`;

  // Variant selector
  let selectedVariant = 'Fullsize 50ml';
  document.querySelectorAll('.variant-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.variant-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedVariant = chip.dataset.variant || chip.textContent.trim();
    });
  });

  // Quantity picker
  const qtyInput = document.querySelector('#detailQtyInput');
  const qtyMinus = document.querySelector('#qtyMinusBtn');
  const qtyPlus = document.querySelector('#qtyPlusBtn');

  qtyMinus?.addEventListener('click', () => {
    if (qtyInput && Number(qtyInput.value) > 1) {
      qtyInput.value = Number(qtyInput.value) - 1;
    }
  });

  qtyPlus?.addEventListener('click', () => {
    if (qtyInput) {
      qtyInput.value = Number(qtyInput.value) + 1;
    }
  });

  // Add to Cart
  const addCartBtn = document.querySelector('#detailAddCartBtn');
  addCartBtn?.addEventListener('click', () => {
    const qty = qtyInput ? Number(qtyInput.value) : 1;
    addToCart(product.id, qty, true, selectedVariant);
  });

  // Buy Now
  const buyNowBtn = document.querySelector('#detailBuyNowBtn');
  buyNowBtn?.addEventListener('click', () => {
    const qty = qtyInput ? Number(qtyInput.value) : 1;
    addToCart(product.id, qty, false, selectedVariant);
    window.location.href = 'checkout.html';
  });

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`#${tabTarget}`)?.classList.add('active');
    });
  });

  // Interactive Customer Review Submission
  const reviewForm = document.querySelector('#productReviewForm');
  const reviewsList = document.querySelector('#reviewsListContainer');
  let selectedRating = 5;

  document.querySelectorAll('.star-rating-select i').forEach((star, idx) => {
    star.addEventListener('click', () => {
      selectedRating = idx + 1;
      document.querySelectorAll('.star-rating-select i').forEach((s, i) => {
        if (i < selectedRating) s.classList.add('active');
        else s.classList.remove('active');
      });
    });
  });

  reviewForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#reviewAuthorName')?.value || 'Khách hàng ẩn danh';
    const comment = document.querySelector('#reviewCommentText')?.value;

    const newRev = document.createElement('div');
    newRev.className = 'review-item-card';
    newRev.innerHTML = `
      <div class="review-user-info">
        <div>
          <span class="review-author">${name} <span class="badge badge-success" style="font-size: 0.65rem; margin-left: 6px;"><i class="fas fa-check-circle"></i> Đã mua hàng</span></span>
          <div class="stars" style="font-size: 0.8rem; margin-top: 4px;">${renderRatingStars(selectedRating)}</div>
        </div>
        <span class="review-date">Vừa xong</span>
      </div>
      <p style="color: var(--text-main); font-size: 0.9rem; line-height: 1.6;">${comment}</p>
    `;

    reviewsList?.prepend(newRev);
    showToast('Đã đăng đánh giá', 'Cảm ơn nàng đã chia sẻ trải nghiệm cùng Roselle! ❤️', 'rose');
    reviewForm.reset();
  });

  // Related products
  const relatedGrid = document.querySelector('#relatedProductsGrid');
  if (relatedGrid) {
    const related = PRODUCTS_DATA.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    const fallback = PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 4);
    const finalRelated = related.length >= 2 ? related : fallback;
    relatedGrid.innerHTML = finalRelated.map(p => createProductCardHTML(p)).join('');
  }
}

// --------------------------------------------------------------------------
// 16. EXCLUSIVE ROYAL PAGE (EXCLUSIVE.HTML)
// --------------------------------------------------------------------------
function initExclusivePage() {
  const exclusiveGrid = document.querySelector('#exclusiveProductsGrid');
  if (!exclusiveGrid) return;

  const exclusiveProducts = PRODUCTS_DATA.filter(p => p.isExclusive);
  exclusiveGrid.innerHTML = exclusiveProducts.map(p => `
    <div class="exclusive-product-featured" style="background: #FFFFFF; border-radius: var(--radius-lg); border: 1.5px solid var(--border-gold); padding: 24px; box-shadow: var(--shadow-md); margin-bottom: 30px; display: grid; grid-template-columns: 320px 1fr; gap: 30px; align-items: center;">
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; height: 320px;">
        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="badge badge-exclusive" style="position: absolute; top: 16px; left: 16px;">👑 LIMITED DROP</span>
      </div>
      <div>
        <span class="badge badge-gold" style="margin-bottom: 12px;">✨ ONLY AT ROSELLE ATELIER</span>
        <h3 style="font-size: 1.5rem; margin-bottom: 10px; color: var(--primary-noir);">${p.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.7; margin-bottom: 18px;">${p.description}</p>
        <div style="display: flex; gap: 20px; align-items: baseline; margin-bottom: 24px;">
          <span style="font-size: 2rem; font-weight: 800; color: var(--rose-primary); font-family: var(--font-heading);">${formatMoney(p.price)}</span>
          <span style="font-size: 1.1rem; color: var(--text-light); text-decoration: line-through;">${formatMoney(p.oldPrice)}</span>
        </div>
        <div style="display: flex; gap: 14px;">
          <button class="btn btn-primary btn-add-cart-quick" data-product-id="${p.id}"><i class="fas fa-crown"></i> ĐẶT MUA VIP</button>
          <a href="product-detail.html?id=${p.id}" class="btn btn-outline"><i class="fas fa-eye"></i> XEM CHI TIẾT</a>
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 17. HOME PAGE (INDEX.HTML)
// --------------------------------------------------------------------------
function initHomePage() {
  const bestSellersGrid = document.querySelector('#bestSellersGrid');
  if (bestSellersGrid) {
    const bestItems = PRODUCTS_DATA.filter(p => p.badge === 'best' || p.rating >= 4.9).slice(0, 8);
    bestSellersGrid.innerHTML = bestItems.map(p => createProductCardHTML(p)).join('');
  }

  const homeTotal = document.querySelector('#homeProductTotal');
  if (homeTotal) homeTotal.textContent = PRODUCTS_DATA.length;
  const homeCatalogCtaCount = document.querySelector('#homeCatalogCtaCount');
  if (homeCatalogCtaCount) homeCatalogCtaCount.textContent = PRODUCTS_DATA.length;
  document.querySelectorAll('[data-home-category-count]').forEach(countEl => {
    const category = countEl.dataset.homeCategoryCount;
    countEl.textContent = `${PRODUCTS_DATA.filter(product => product.category === category).length} Sản phẩm`;
  });
}

// --------------------------------------------------------------------------
// 18. ROSELLE BEAUTY ASSISTANT CHATBOT
// --------------------------------------------------------------------------
function initFloatingChat() {
  const chatToggle = document.querySelector('.chat-toggle-btn');
  const chatModal = document.querySelector('.chat-box-modal');
  const chatClose = document.querySelector('.chat-close-btn');
  const chatBody = document.querySelector('#chatBody');
  const chatInput = document.querySelector('#chatInput');
  const chatSendBtn = document.querySelector('#chatSendBtn');
  const chatChips = document.querySelectorAll('.chat-chip');

  if (!chatToggle || !chatModal) return;

  chatToggle.addEventListener('click', () => {
    chatModal.classList.toggle('active');
  });

  chatClose?.addEventListener('click', () => {
    chatModal.classList.remove('active');
  });

  function appendMessage(text, isUser = false) {
    if (!chatBody) return;
    const msg = document.createElement('div');
    msg.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleSend(userText) {
    if (!userText.trim()) return;
    appendMessage(userText, true);
    if (chatInput) chatInput.value = '';

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botReply = "Xin chào nàng! Chuyên viên tư vấn sắc đẹp của <strong>Roselle Cosmetics</strong> sẽ hỗ trợ bạn ngay trong giây lát nhé 👑✨";

      if (lower.includes('skincare') || lower.includes('da')) {
        botReply = "Chào nàng! Để có làn da căng bóng mịn màng quý phái, nàng có thể tham khảo dòng <strong>Serum Bio-Cellular</strong> kết hợp <strong>Kem Trứng Cá Tầm Caviar Royal</strong> đang được yêu thích nhất nhé! 🌸";
      } else if (lower.includes('son') || lower.includes('môi')) {
        botReply = "Dạ với dòng son môi, thỏi <strong>Velvet Rose Tint #08</strong> và <strong>Son Thỏi Vương Miện Royal Jewel #01</strong> đang là best-seller cực kỳ tôn da nàng nha! 💄";
      } else if (lower.includes('độc quyền') || lower.includes('exclusive')) {
        botReply = "Bộ sưu tập <strong>Exclusive Royal Collection</strong> gồm các siêu phẩm giới hạn: Tinh chất vàng 24K, nước hoa Niche Éclat D'Or được phân phối duy nhất tại Roselle. Nàng hãy ghé trang 'Độc quyền' để khám phá ngay nhé! 👑💎";
      } else if (lower.includes('đơn hàng') || lower.includes('kiểm tra') || lower.includes('tra cứu')) {
        botReply = "Nàng có thể vào mục <strong>Tài khoản &gt; Tra cứu vận đơn</strong> để tra cứu lộ trình giao hàng hỏa tốc, hoặc gửi mã đơn tại đây để chúng mình kiểm tra liền ạ! 📦";
      } else if (lower.includes('khuyến mãi') || lower.includes('sale') || lower.includes('mã')) {
        botReply = "Hôm nay Roselle Cosmetics đang có mã giảm giá hoàng gia <strong>ROSELLE10</strong> (giảm 10%), <strong>ROSELLE20</strong> (giảm 20% cho VIP) và mã <strong>FREESHIP</strong> tặng nàng nhé! ✨";
      }

      appendMessage(botReply, false);
    }, 500);
  }

  chatSendBtn?.addEventListener('click', () => {
    if (chatInput) handleSend(chatInput.value);
  });

  chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSend(chatInput.value);
    }
  });

  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      handleSend(chip.textContent.trim());
    });
  });
}

// --------------------------------------------------------------------------
// 19. COUNTDOWN TIMERS
// --------------------------------------------------------------------------
function initCountdowns() {
  const countdownElements = document.querySelectorAll('.countdown-timer');
  if (countdownElements.length === 0) return;

  const targetDate = new Date();
  targetDate.setHours(23, 59, 59, 999);
  targetDate.setDate(targetDate.getDate() + 2);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) return;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    document.querySelectorAll('.timer-days').forEach(el => el.textContent = pad(days));
    document.querySelectorAll('.timer-hours').forEach(el => el.textContent = pad(hours));
    document.querySelectorAll('.timer-minutes').forEach(el => el.textContent = pad(minutes));
    document.querySelectorAll('.timer-seconds').forEach(el => el.textContent = pad(seconds));
  }

  update();
  setInterval(update, 1000);
}

// --------------------------------------------------------------------------
// 20. MASTER DOM READY DISPATCHER
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndSearch();
  initCountdowns();
  initFloatingChat();

  const pathname = window.location.pathname;

  if (pathname.includes('products.html')) {
    initProductsPage();
  } else if (pathname.includes('product-detail.html')) {
    initProductDetailPage();
  } else if (pathname.includes('exclusive.html')) {
    initExclusivePage();
  } else if (pathname.includes('cart.html')) {
    initCartPage();
  } else if (pathname.includes('checkout.html')) {
    initCheckoutPage();
  } else if (pathname.includes('login.html')) {
    initLoginPage();
  } else if (pathname.includes('account.html')) {
    initAccountPage();
  } else {
    initHomePage();
  }
});
