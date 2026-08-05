require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected for Seeding...'))
  .catch(err => console.log(err));

const phoneModels = ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "Galaxy S26 Ultra", "Galaxy S26+", "Galaxy S26"];

// פלייסהולדר מובנה - אפור עם כיתוב לבן, נטען מיידית ללא תלות באינטרנט
const placeholderImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0iIzQyNDI0MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iSGVib2MsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNjAiIGZvbnQtd2VpZ2h0PSI5MDAiIGZpbGw9IiNGRkZGRkYiIHRleHQtYWNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlgtTU9CSUxFPC90ZXh0Pjwvc3ZnPg==";

// פונקציה שמחוללת מלאי של 10 לכל שילוב של נפח וצבע
function genVariants(storages, colors) {
    const v = [];
    colors.forEach(c => {
        if (c.name === "מגוון צבעים") return;
        storages.forEach(s => {
            v.push({ storageGb: s.gb, colorName: c.name, stock: 10 });
        });
    });
    return v;
}

const products = [
    { 
        name: "iPhone 17 Pro Max", brand: "Apple", category: "Smartphones",
        basePrice: 4350, vatPrice: 5089, rating: 5, 
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:800}, {gb:"1TB", mod:1600}, {gb:"2TB", mod:3200}],
        colors: [
            { name: "מגוון צבעים", hex: "conic-gradient(#F0F0E8, #FF8C00, #1E3A5F, #F0F0E8)", images: ["https://i.imgur.com/p7JtWem.jpg"] },
            { name: "לבן", hex: "#F0F0E8", images: ["https://i.imgur.com/et049h7.jpg"] },
            { name: "כתום", hex: "#FF8C00", images: ["https://i.imgur.com/nPIxKt5.jpg"] },
            { name: "כחול טיטניום", hex: "#1E3A5F", images: ["https://i.imgur.com/v1MK6if.jpg"] }
        ],
        specs: { "מסך": "6.9 אינץ' OLED 120Hz", "מעבד": "A19 Pro", "מצלמה": "48MP", "סוללה": "4400 mAh", "מערכת": "iOS 18" },
        reviews: [
            { author: "דניאל כהן", text: "המכשיר פשוט מדהים והמצלמה משביחה את הכל. X-MOBILE נתנו שירות מעולה ומחיר מטורף.", rating: 5 },
            { author: "רותי לוי", text: "מה שכייף שקניתי פה בלי מע\"מ. חסכתי המון כסף וקיבלתי את האייפון הכי טוב בשוק.", rating: 5 },
            { author: "אבי שמש", text: "מכשיר ענק ומהיר, אבל קצת כבד. בכל מקרה, היחס בחנות היה מעולה והאיסוף העצמי היה זריז.", rating: 4 }
        ]
    },
    { 
        name: "iPhone 17 Pro", brand: "Apple", category: "Smartphones",
        basePrice: 3750, vatPrice: 4387, rating: 5, 
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:700}, {gb:"1TB", mod:1400}],
        colors: [
            { name: "מגוון צבעים", hex: "conic-gradient(#F0F0E8, #FF8C00, #1E3A5F, #F0F0E8)", images: ["https://i.imgur.com/p7JtWem.jpg"] },
            { name: "לבן", hex: "#F0F0E8", images: ["https://i.imgur.com/et049h7.jpg"] },
            { name: "כתום", hex: "#FF8C00", images: ["https://i.imgur.com/nPIxKt5.jpg"] },
            { name: "כחול טיטניום", hex: "#1E3A5F", images: ["https://i.imgur.com/v1MK6if.jpg"] }
        ],
        specs: { "מסך": "6.3 אינץ' OLED 120Hz", "מעבד": "A19 Pro", "מצלמה": "48MP", "סוללה": "4000 mAh", "מערכת": "iOS 18" },
        reviews: [
            { author: "מיכל אברהם", text: "הגודל המושלם בשבילי. מצלם כמו מקצוען והסוללה אורכת יום שלם. שווה כל שקל.", rating: 5 },
            { author: "יוסי גרין", text: "רכשתי פה באילת וחסכתי מעל 800 שקל. השירות ב-X-MOBILE היה אדיב ומקצועי במיוחד.", rating: 5 },
            { author: "שירה כהן", text: "טלפון חזק ומהיר, אבל היה לי קצת קשה להתרגל למערכת ההפעלה החדשה. בכל זאת מרוצה.", rating: 4 }
        ]
    },
    { 
        name: "iPhone 17", brand: "Apple", category: "Smartphones",
        basePrice: 2900, vatPrice: 3393, rating: 4, 
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:500}],
        colors: [
            { name: "מגוון צבעים", hex: "conic-gradient(#383838, #F0F0E8, #A4D8E1, #4CAF50, #E6E6FA)", images: ["https://i.imgur.com/HjLCNxy.jpg"] },
            { name: "שחור", hex: "#383838", images: ["https://i.imgur.com/AWcY7nI.jpg"] },
            { name: "לבן", hex: "#F0F0E8", images: ["https://i.imgur.com/5OmUAn7.jpg"] }
        ],
        specs: { "מסך": "6.1 אינץ' OLED 60Hz", "מעבד": "A18", "מצלמה": "48MP", "סוללה": "3300 mAh", "מערכת": "iOS 18" },
        reviews: [
            { author: "נועה פרץ", text: "מחיר מעולה לאייפון חדש! הצבע הירוק פשוט מהמם. תודה ל-X-MOBILE על העסקה המשתלמת.", rating: 5 },
            { author: "אורי מזרחי", text: "מכשיר בסיסי אבל עושה הכל חלק. קניתי בלי מע\"מ וזה היה שווה לחכות לאיסוף העצמי.", rating: 4 },
            { author: "טלי ביטון", text: "שירות אדיב מאוד, עזרו לי להבין איזה דגם לקחת. המכשיר עובד מצוין ומתאים בול לצרכים שלי.", rating: 5 }
        ]
    },
    { 
        name: "Galaxy S26 Ultra", brand: "Samsung", category: "Smartphones",
        basePrice: 3900, vatPrice: 4563, rating: 5,
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:600}, {gb:"1TB", mod:1200}],
        colors: [
            { name: "מגוון צבעים", hex: "conic-gradient(#1A1A1A, #E5E5E5, #A4D8E1, #6A0DAD, #1A1A1A)", images: ["https://i.imgur.com/3HfnJdy.jpg"] },
            { name: "שחור", hex: "#1A1A1A", images: ["https://i.imgur.com/U3sXyC3.jpg"] },
            { name: "כסוף", hex: "#E5E5E5", images: ["https://i.imgur.com/Ho27cNK.jpg"] }
        ],
        specs: { "מסך": "6.8 אינץ' AMOLED 120Hz", "מעבד": "Snapdragon 8 Gen 4", "מצלמה": "200MP", "סוללה": "5000 mAh", "מערכת": "Android 15" },
        reviews: [
            { author: "אלון דוד", text: "מסך מטורף ומצלמה של 200 מגה פיקסל שעושה נפלאות. המחיר בלי מע\"מ ב-X-MOBILE לא ייאמן.", rating: 5 },
            { author: "ענבל רון", text: "הסוללה מחזיקה יומיים! חנות מצוינת עם שירות אנושי וחם, תענוג לקנות שם.", rating: 5 },
            { author: "רון חן", text: "העט של סמסונג מאוד נוח לעבודה. המכשיר קצת יקר אבל קיבלתי פטור ממע\"מ אז יצא משתלם.", rating: 4 }
        ]
    },
    { 
        name: "Galaxy S26+", brand: "Samsung", category: "Smartphones",
        basePrice: 3100, vatPrice: 3627, rating: 4,
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:500}],
        colors: [
            { name: "מגוון צבעים", hex: "conic-gradient(#1A1A1A, #E5E5E5, #A4D8E1, #9370DB, #1A1A1A)", images: ["https://i.imgur.com/W1mHNUb.jpg"] },
            { name: "שחור", hex: "#1A1A1A", images: ["https://i.imgur.com/J042s7q.jpg"] },
            { name: "לבן", hex: "#F0F0F0", images: ["https://i.imgur.com/l5zyd13.jpg"] }
        ],
        specs: { "מסך": "6.7 אינץ' AMOLED 120Hz", "מעבד": "Snapdragon 8 Gen 4", "מצלמה": "50MP", "סוללה": "4500 mAh", "מערכת": "Android 15" },
        reviews: [
            { author: "דנה ברק", text: "מסך ענק וצבעים חזקים. ממליצה בחום על המכשיר ועל החנות, קיבלתי שירות מהיר ואדיב.", rating: 5 },
            { author: "עידן שפירא", text: "מהירות עיבוד מטורפת וטעינה סופר מהירה. המחיר באילת היה פשוט בלתי נתפס.", rating: 5 },
            { author: "נועם גולן", text: "מכשיר כבד מאוד אבל חזק. שמח שקניתי פה, הם עזרו לי להעביר מידע מהטלפון הישן בחינם.", rating: 4 }
        ]
    },
    { 
        name: "Galaxy S26", brand: "Samsung", category: "Smartphones",
        basePrice: 2900, vatPrice: 3393, rating: 4,
        storage: [{gb:"256GB", mod:0}, {gb:"512GB", mod:500}],
        colors: [
            { name: "שחור", hex: "#1A1A1A", images: ["https://i.imgur.com/J042s7q.jpg"] },
            { name: "לבן", hex: "#F0F0F0", images: ["https://i.imgur.com/l5zyd13.jpg"] }
        ],
        specs: { "מסך": "6.2 אינץ' AMOLED 120Hz", "מעבד": "Snapdragon 8 Gen 4", "מצלמה": "50MP", "סוללה": "4000 mAh", "מערכת": "Android 15" },
        reviews: [
            { author: "ליאת אסולין", text: "גודל מושלם לכיס, מצלם נהדר ומהיר. X-MOBILE הם פשוט הכתובת לסלולר באילת.", rating: 5 },
            { author: "אריק זיו", text: "קניתי בלי מע\"מ וחסכתי המון. המכשיר עובד חלק, אין לי מילים רעות. שירות 10.", rating: 5 },
            { author: "ניר כהן", text: "מכשיר נהדר אבל הסוללה קצת נחלשת בסוף היום. בכל מקרה, עסקת השנה מבחינת מחיר.", rating: 4 }
        ]
    },
    { 
        name: "AirPods Pro", brand: "Apple", category: "Accessories", 
        basePrice: 800, vatPrice: 936, rating: 5, 
        storage: [{gb:"Standard", mod:0}],
        colors: [{ name: "לבן", hex: "#F0F0E8", images: ["https://i.imgur.com/u7FID4K.jpg"] }],
        specs: { "סוג": "אוזניות", "חיבור": "Bluetooth 5.3", "סוללה": "6 שעות", "ביטול רעשים": "כן" },
        reviews: [
            { author: "עומר אדרי", text: "ביטול רעשים של אפל פשוט קסם. המחיר בלי מע\"מ עשה את העסקה למשתלמת ביותר.", rating: 5 },
            { author: "שרה פורס", text: "האוזניות נוחות מאוד והסאונד מדויק. תודה ל-X-MOBILE על השירות המקצועי והאדיב.", rating: 5 },
            { author: "יואב חן", text: "סוללה מחזיקה מעולה, אבל הן קצת יקרות. בכל זאת, המחיר שקיבלתי פה היה הכי טוב בארץ.", rating: 4 }
        ]
    },
    { 
        name: "Galaxy Buds 4 Pro", brand: "Samsung", category: "Accessories", 
        basePrice: 426, vatPrice: 498, rating: 5, 
        storage: [{gb:"Standard", mod:0}],
        colors: [
            { name: "שחור", hex: "#1A1A1A", images: ["https://i.imgur.com/0IBU4X2.jpg"] },
            { name: "לבן", hex: "#F0F0F0", images: ["https://i.imgur.com/ldJ6dlh.jpg"] }
        ],
        specs: { "סוג": "אוזניות", "חיבור": "Bluetooth 5.3", "סוללה": "8 שעות", "ביטול רעשים": "כן" },
        reviews: [
            { author: "רוני פז", text: "סאונד מדהים ובס עמוק, מתחברות בשניה. קניתי ב-X-MOBILE וקיבלתי פשוט שירות VIP.", rating: 5 },
            { author: "אלינור לוי", text: "ביטול רעשים עובד מעולה במחיר נהדר. ממליצה בחום על האוזניות ועל החנות.", rating: 5 },
            { author: "ניסים עמרני", text: "נוחות לאורך זמן, אבל הן קצת גדולות. בכל מקרה שווה את ההשקעה, במיוחד בלי מע\"מ.", rating: 4 }
        ]
    },
    {
        name: "מגן מסך זכוכית OtterBox", brand: "OtterBox", category: "ScreenProtectors",
        basePrice: 100, vatPrice: 117, rating: 5,
        storage: [{gb:"Standard", mod:0}],
        colors: phoneModels.map(model => ({ name: model, hex: "#FFFFFF", images: [placeholderImg] })),
        specs: { "חומר": "זכוכית מחוסמת", "הגנה": "Anti-Shatter" },
        reviews: [
            { author: "דניאל שגב", text: "מגן המסך הכי חזק שניסיתי. התקנה קלה ומרגיש כמו המסך המקורי. שירות מעולה.", rating: 5 },
            { author: "ענת גורן", text: "קניתי לאייפון שלי וזה מגן באמת. המחיר פה זול יותר מבכל מקום אחר שבדקתי.", rating: 5 },
            { author: "אבי רון", text: "שקיפות מלאה ולא משאיר סימני אצבעות. ממליץ לכל מי שרוצה לשמור על המכשיר שלו.", rating: 4 }
        ]
    },
    {
        name: "כיסוי אחורי שחור OtterBox", brand: "OtterBox", category: "BackCovers",
        basePrice: 170, vatPrice: 199, rating: 5,
        storage: [{gb:"Standard", mod:0}],
        colors: phoneModels.map(model => ({ name: model, hex: "#FFFFFF", images: [placeholderImg] })),
        specs: { "חומר": "פלסטיק קשיח", "צבע": "שחור" },
        reviews: [
            { author: "שלומי אסולין", text: "מגן את הטלפון באמת! נפל לי כמה פעמים והוא נשאר שלם. תודה על המוצר האיכותי.", rating: 5 },
            { author: "קרן דוד", text: "מרגיש איכותי ולא מחליק ביד. היחס בחנות היה מדהים, עזרו לי לבחור את הכיסוי המתאים.", rating: 5 },
            { author: "ירון כהן", text: "מתאים בול למכשיר. קצת יקר אבל שווה את זה כדי לשמור על המוצר. שירות מעולה.", rating: 4 }
        ]
    },
    {
        name: "כיסוי אחורי שקוף OtterBox", brand: "OtterBox", category: "BackCovers",
        basePrice: 170, vatPrice: 199, rating: 5,
        storage: [{gb:"Standard", mod:0}],
        colors: phoneModels.map(model => ({ name: model, hex: "#FFFFFF", images: [placeholderImg] })),
        specs: { "חומר": "פלסטיק קשיח", "צבע": "שקוף" },
        reviews: [
            { author: "תמר לוי", text: "נשאר צלול לאורך זמן ולא מצהיב כמו אחרים. מציג את היופי של המכשיר. מחיר נהדר.", rating: 5 },
            { author: "אור אבני", text: "הגנה מצוינת בלי להסתיר את הצבע של הסמסונג. X-MOBILE תמיד אדיבים ומקצועיים.", rating: 5 },
            { author: "מיכאל ביטון", text: "מתאים מצוין וקל להסרה לניקוי. שמח שקניתי פה, יש מבחר ענק ומחירים טובים.", rating: 4 }
        ]
    }
];

// הוספת וריאציות לכל מוצר אוטומטית
products.forEach(p => {
    p.variants = genVariants(p.storage, p.colors);
});

const importData = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Products with Variants & Unique Reviews Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};
importData();