export const publisher = {
  "@type": "Organization",
  "name": "KeyboardOS",
  "logo": {
    "@type": "ImageObject",
    "url": "https://keyboardos.com/logo.png"
  }
}

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const keyboardslist = [{t:"Arabic",n:"لوحة المفاتيح العربية"},{t:"Akan",n:"Akan Keyboard"},{t:"Amharic",n:"የአማርኛ ኪቦርድ"},{t:"Albanian",n:"Keyboard Shqiptare"},{t:"Armenian",n:"հայերեն ստեղնաշար"},{t:"Assamese",n:"অসমীয়া Keyboard"},{t:"Azerbaijani",n:""},{t:"Bambara",n:"ߓߡߊߣߊ߲ߞߊ߲ Keyboard"},{t:"Bangla",n:"বাংলা কিবোর্ড"},{t:"Bashkir",n:"Башҡортса‎ Keyboard"},{t:"Belarusian",n:"Беларуская клавіятура"},{t:"Bhutanese",n:"རྫོང་ཁ་ Keyboard"},{t:"Bosnian",n:""},{t:"Buginese",n:"ᨅᨔ ᨕᨘᨁᨗ Keyboard"},{t:"Bulgarian",n:"Българска клавиатура"},{t:"Cantonese",n:"粵語鍵盤"},{t:"Cherokee",n:"ᏣᎳᎩ"},{t:"Coptic",n:"ⲘⲉⲧⲢⲉⲙ̀ⲛⲭⲏⲙⲓ"},{t:"Croatian",n:"Hrvatske Tipkovnice"},{t:"Czech",n:"Česk\xe1 Kl\xe1vesnice"},{t:"Danish",n:"Dansk Keyboard"},{t:"Dhivehi",n:"ދިވެހި"},{t:"Dutch",n:"Nederlands Toetsenbord"},{t:"English",n:""},{t:"Esperanto",n:"Esperanta Klavaro"},{t:"Estonian",n:"Eesti Klaviatuur",dir:"ltr"},{t:"Farsi",n:"فارسی صفحه کلید"},{t:"Finnish",n:"Suomen N\xe4pp\xe4imist\xf6"},{t:"French",n:""},{t:"Fula",n:""},{t:"Georgian",n:"ქართული კლავიატურა"},{t:"German",n:"Deutsch Keyboard"},{t:"Greek",n:"ελληνικό πληκτρολόγιο"},{t:"Gujarati",n:"ગુજરાતી કીબોર્ડ"},{t:"Hausa",n:""},{t:"Hebrew",n:"מקלדת בעברית"},{t:"Hindi",n:"हिंदी कीबोर्ड"},{t:"Hungarian",n:"Magyar Billentyűzet"},{t:"Icelandic",n:"\xcdslenskt lyklabor\xf0"},{t:"Igbo",n:""},{t:"Irish",n:"M\xe9archl\xe1r h\xc9ireann",dir:"ltr"},{t:"Italian",n:"Tastiera Italiana"},{t:"Javanese",n:"ꦧꦱꦗꦮ Keyboard"},{t:"Kannada",n:"ಕನ್ನಡ ಕೀಲಿಮಣೆ"},{t:"Kazakh",n:"Қазақ тілі"},{t:"Khmer",n:"ភាសាខ្មែរ"},{t:"Khowar",n:"کھوار"},{t:"Korean",n:"한국어 키보드"},{t:"Kurdish",n:"تەختەکلیل کوردی"},{t:"Kyrgyz",n:"Кыргыз Keyboard"},{t:"Lao",n:"ແປ້ນພິມລາວ"},{t:"Latvian",n:"Latviešu Klaviatūras"},{t:"Lisu",n:"ꓡꓲ-ꓢꓴ Keyboard"},{t:"Lithuanian",n:"Lietuvos klaviatūros"},{t:"Macedonian",n:"Македонска тастатура"},{t:"Malayalam",n:"മലയാളം കീബോര്‍ഡ്‌"},{t:"Maltese",n:"Tastiera Maltija"},{t:"Marathi",n:"मराठी कळफलक"},{t:"Mongolian",n:""},{t:"Mossi",n:""},{t:"Myanmar",n:"မြန်မာအက္ခရာ"},{t:"Nepali",n:"नेपाली किबोर्ड"},{t:"Oriya",n:"ଉତ୍କଳ ଲିପି"},{t:"Pashto",n:"ليکمن پښتو"},{t:"Polish",n:"Klawiatury Polska"},{t:"Portuguese",n:"Portugu\xeas do Teclado"},{t:"Punjabi",n:"ਪੰਜਾਬੀ ਦੇ ਬੋਰਡ"},{t:"Romanian",n:"Rom\xe2nă Tastatură"},{t:"Russian",n:"русская клавиатура"},{t:"Santali",n:""},{t:"Sindhi",n:"سنڌي ڪي بورڊ"},{t:"Sinhala",n:"සිංහල"},{t:"Slovak",n:"Slovensk\xe1 Kl\xe1vesnica",dir:"ltr"},{t:"Slovenian",n:"Slovenščina Tipkovnica"},{t:"Sora",n:"\uD804\uDCD0\uD804\uDCDA\uD804\uDCDD Keyboard"},{t:"Spanish",n:"Teclado en Espa\xf1ol"},{t:"Swedish",n:"Svenskt Tangentbord"},{t:"Syriac",n:"ܠܫܢܐ ܣܘܪܝܝܐ"},{t:"Tajik",n:"Клавиатураи тоҷикӣ"},{t:"Tamazight",n:"ⵜⴰⵎⴰⵣⵉⵖⵜ Keyboard"},{t:"Tamil",n:"தமிழ் விசைப்பலகை"},{t:"Tatar",n:"татар теле Keyboard"},{t:"Telugu",n:"తెలుగు కీబోర్డ్"},{t:"Thai",n:"แป้นพิมพ์ไทย"},{t:"Tibetan",n:""},{t:"Turkish",n:"T\xfcrk\xe7e Klavye"},{t:"Ukrainian",n:"Українська клавіатура"},{t:"Urdu",n:"اردو کی بورڈ"},{t:"Uyghur",n:"ئۇيغۇر Keyboard"},{t:"Uzbek",n:"Ўзбек Клавиатура"},{t:"Vietnamese",n:"Việt Keyboard"},{t:"Wolof",n:""},{t:"Yoruba",n:"Yor\xf9b\xe1 Keyboard"},];