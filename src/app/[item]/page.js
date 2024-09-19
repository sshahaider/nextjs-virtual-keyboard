import Script from "next/script";
import Faq from "@/components/Faq";
import KeyBoard from "./KeyBoard";

import { notFound } from "next/navigation";
import InfoCard from "@/components/InfoCard";
import { publisher } from "@/app/utails";
import KeyBoards from "../../components/KeyBoards";
import Feedback from "@/components/Feedback";
import GoToTop from "@/components/GoToTop";

const KBist = [
    {
        t: 'Arabic',
        n: 'لوحة المفاتيح العربية',
        d: "rtl",
        f: 'font-amiri',
        kv: "> 1 2 3 4 5 6 7 8 9 0 - = ض ص ث ق ف غ ع ه خ ح ج د ذ ش س ي ب ل ا ت ن م ك ط ئ ء ؤ ر  ى ة و ز ظ",
        ks: '< ! @ # $ % ^ & * ) ( _ + َ ً ُ ٌ  إ ‘ ÷ × ؛ } { ّ \\  ] [  أ ـ ، / : " ~ ْ ِ ٍ  آ ’ , . ؟'
    },
    {
        t: 'Akan',
        n: 'Akan Keyboard',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ɛ w e r t y u i o p q c \\ a s d f g h j k l ; ' z x ɔ v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Ɛ W E R T Y U I O P Q C | A S D F G H J K L : " Z X Ɔ V B N M < > ?'
    },
    {
        t: 'Amharic',
        n: 'የአማርኛ ኪቦርድ',
        d: "ltr",
        f: 'font-ethiopic',
        kv: "፞ 1 2 3 4 5 6 7 8 9 0 - = ቅ ው እ ር ት ይ ኡ ኢ ኦ ፕ ፡ ፦ ፨ አ ስ ድ ፍ ግ ህ ጅ ክ ል ሽ ' ዝ ፅ ች ቭ ብ ን ም ፣ ። ፤",
        ks: '¡ ! @ , $ % . / ? ( ) ፟ + ቕ ኧ ኤ ፘ ጥ ቍ ቝ ኵ ኍ ጵ ኅ ፧  ኣ ሥ ዽ ፚ ጝ ሕ ዅ ኽ ጕ ዕ " ዥ ጽ ጭ   ኝ ፙ « » ፥'
    },
    {
        t: 'Albanian',
        n: 'Keyboard Shqiptare',
        d: "ltr",
        f: '',
        kv: "\\ 1 2 3 4 5 6 7 8 9 0 - = q w e r t z u i o p ç @ ] a s d f g h j k l ë [ y x c v b n m , . /",
        ks: "| ! \" # $ % ^ & * ( ) _ + Q W E R T Z U I O P Ç ' } A S D F G H J K L Ë { Y X C V B N M ; : ?"
    },
    {
        t: 'Armenian',
        n: 'հայերեն ստեղնաշար',
        d: "ltr",
        f: 'font-armenian',
        kv: "՝ է թ փ ձ ջ ւ և ր չ ճ - ժ ք ո ե ռ տ ը ւ ի օ պ խ ծ շ ա ս դ ֆ գ հ յ կ լ ; ՛ զ ղ ց վ բ ն մ , : /",
        ks: '~ Է Թ Փ Ձ Ջ Ւ ԵՎ Ր Չ Ճ — Ժ Ք Ո Ե Ռ Տ Ը Ւ Ի Օ Պ Խ Ծ Շ Ա Ս Դ Ֆ Գ Հ Յ Կ Լ . " Զ Ղ Ց Վ Բ Ն Մ < > ՞'
    },
    {
        t: 'Assamese',
        n: 'অসমীয়া Keyboard',
        d: "ltr",
        f: '',
        kv: "॥ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০ - ৃ ৌ ৈ া ী ূ ব হ গ দ জ ড ়  ো ে ্ ি ু প ৰ ক ত চ ট  ং ম ন ৱ ল স , . য়",
        ks: ' ! @       ( ) ঃ ঋ ঔ ঐ আ ঈ ঊ ভ ঙ ঘ ধ ঝ ঢ ঞ  ও এ অ ই উ ফ  খ থ ছ ঠ  ঁ ণ    শ ষ । য'
    },
    {
        t: 'Azerbaijani',
        n: '',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = q ü e r t y u i o p ö ğ \\ a s d f g h j k l ı ə z x c v b n m ç ş .",
        ks: '~ ! " Ⅶ ; % : ? * ( ) _ + Q Ü E R T Y U İ O P Ö Ğ / A S D F G H J K L I Ə Z X C V B N M Ç Ş ,'
    },
    {
        t: 'Bambara',
        n: 'ߓߡߊߣߊ߲ߞߊ߲ Keyboard',
        d: "rtl",
        f: '',
        kv: "߷ ߁ ߂ ߃ ߄ ߅ ߆ ߇ ߈ ߉ ߀ - = ߔ ߧ ߠ ߥ ߦ ߙ ߗ ߜ ߢ ߡ ߤ ߒ \\ ߏ ߎ ߍ ߌ ߋ ߊ ߖ ߝ ߣ ߕ ߓ ߐ ߲ ߵ ߴ ߬ ߫ ߟ ߛ ߘ ߞ",
        ks: ' ߹    %   * ( ) _ + ߩ ߨ    ߚ  ÷ × ߪ ‹ › | ߶ ° [ ] ﴾ ﴿ ߺ ، / : " ߳ ߱ ߭ ߮ ߰ ߯ ߸ ߑ . ؟'
    },
    {
        t: 'Bangla',
        n: 'বাংলা কিবোর্ড',
        d: "ltr",
        f: '',
        kv: "‍‍‍ 1 2 3 4 5 6 7 8 9 0 - ৃ ৌ ৈ া ী ূ ব হ গ দ জ ড ় \\ ো ে ্ ি ু প র ক ত চ ট ‌‌‌‌ ং ম ন ব ল স , . য",
        ks: '~ !        ( ) ঃ ঋ ঔ ঐ আ ঈ ঊ ভ ঙ ঘ ধ ঝ ঢ ঞ | ও এ অ ই উ ফ  খ থ ছ ঠ  ঁ ণ    শ ষ { য়'

    },
    {
        t: 'Bashkir',
        n: 'Башҡортса‎ Keyboard',
        d: "ltr",
        f: '',
        kv: "ә ! ө ҡ ғ ҫ : ҙ һ ? № - ү й ц у к е н г ш щ з х ъ ң ф ы в а п р о л д ж э я ч с м и т ь б ю .",
        ks: 'Ә " Ө Ҡ Ғ Ҫ ; Ҙ Һ ( ) % Ү Й Ц У К Е Н Г Ш Щ З Х Ъ Ң Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю ,'

    },
    {
        t: 'Belarusian',
        n: 'Беларуская клавіятура',
        d: "ltr",
        f: '',
        kv: "ё 1 2 3 4 5 6 7 8 9 0 - = й ц у к е н г ш ў з х ' \\ ф ы в а п р о л д ж э я ч с м і т ь б ю .",
        ks: "Ё ! \" № ; % : ? * ( ) _ + Й Ц У К Е Н Г Ш Ў З Х ' / Ф Ы В А П Р О Л Д Ж Э Я Ч С М І Т Ь Б Ю ,",
    },
    {
        t: 'Bhutanese',
        n: 'རྫོང་ཁ་ Keyboard',
        d: "ltr",
        f: '',
        kv: '༉ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ ༠ ༔ ། ཀ ཁ ག ང ི ུ ེ ོ ཅ ཆ ཇ ཉ ཝ ཏ ཐ ད ན པ ཕ བ མ ཙ ཚ ཛ ཞ ཟ འ ཡ ར ལ ཤ ས ཧ ཨ',
        ks: '༊ ༄ ༅ ༆  ༎ ༈ ༸ ༴ ༼ ༽ ཿ ༑ ྐ ྑ ྒ ྔ ྀ ྄ ཻ ཽ ྕ ྖ ྗ ྙ ྭ ྟ ྠ ྡ ྣ ྤ ྥ ྦ ྨ ྩ ྪ ྫ ྮ ྯ ཱ ྱ ྲ ླ ྴ ྶ ྷ ྸ',

    },
    {
        t: 'Bosnian',
        n: '',
        d: "ltr",
        f: '',
        kv: "¸ 1 2 3 4 5 6 7 8 9 0 ' + q w e r t z u i o p š đ ž a s d f g h j k l č ć y x c v b n m , . -",
        ks: '¨ ! " # $ % & / ( ) = ? * Q W E R T Z U I O P Š Đ Ž A S D F G H J K L Č Ć Y X C V B N M ; : _'
    },
    {
        t: 'Buginese',
        n: 'ᨅᨔ ᨕᨘᨁᨗ Keyboard',
        d: "ltr",
        f: '',
        kv: "ꧏ 1 2 3 4 5 6 7 8 9 0 - = ᨛ ᨏ ᨙ ᨑ ᨈ ᨐ ᨘ ᨗ ᨚ ᨄ [ ] \\ ᨕ ᨔ ᨉ ᨃ ᨁ ᨖ ᨍ ᨀ ᨒ ; ' ᨎ ᨂ ᨌ ᨓ ᨅ ᨊ ᨆ ᨞ ᨟ /",
        ks: '~ ! @ # $ % ^ & * ( ) _ +           { } |          : "      ᨋ ᨇ , . ?'
    },
    {
        t: 'Bulgarian',
        n: 'Българска клавиатура',
        d: "ltr",
        f: '',
        kv: "ю 1 2 3 4 5 6 7 8 9 0 - = ч ш е р т ъ у и о п я щ ь а с д ф г х й к л ; ' з ж ц в б н м , . /",
        ks: 'Ю ! @ № $ % € § * ( ) — + Ч Ш Е Р Т Ъ У И О П Я Щ Ь А С Д Ф Г Х Й К Л : " З Ж Ц В Б Н М „ “ ?'
    },
    {
        t: 'Cantonese',
        n: '粵語鍵盤',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 ◂ ▸ q w e r t y u i o p ［ ］ 、 a s d f g h j k l ； ' z x c v b n m ， 。 /",
        ks: '～ ！ · 〈 ￥ 〉 『 』 … （ ） 「 」 Q W E R T Y U I O P 【 】 — A S D F G H J K L ： " Z X C V B N M 《 》 ？'
    },
    {
        t: 'Cherokee',
        n: 'ᏣᎳᎩ',
        d: "ltr",
        f: '',
        kv: "` ᏣᎳᎩ ᎣᏏᏲ ᏩᏙ Ꮩ Ꮶ Ꮬ Ꮛ Ꮦ Ꮢ Ꮔ Ꮏ Ᏻ Ꭺ Ꮃ Ꭱ Ꮫ Ꮤ Ꮿ Ꭴ Ꭲ Ꭳ Ꮑ Ꮥ Ꮆ Ꮹ Ꭰ Ꮝ Ꮧ Ꭹ Ꭶ Ꭿ Ꮪ Ꮈ Ꮅ Ꮸ ' Ꭼ Ᏼ Ꮣ Ꭵ Ꭸ Ꮎ Ꮕ , . Ꮒ",
        ks: 'Ꮚ Ꮁ Ꮗ Ꮷ Ꮀ Ꮉ Ꮭ Ꮱ Ꮊ ( ) Ꮌ Ꮍ Ꮖ Ꮻ Ꮳ Ꮟ Ꮨ Ᏺ Ꭽ Ᏹ Ꮼ Ꮺ Ꮡ Ꮴ Ꮾ Ꮜ Ꮞ Ꮠ Ꮘ Ꮵ Ꮂ Ꭻ Ꭷ Ꭾ Ꮰ " Ꮓ Ꮽ Ꮯ Ꮮ Ᏸ Ꮋ Ꮇ Ꮲ Ꮄ Ꮙ'
    },
    {
        t: 'Coptic',
        n: 'ⲘⲉⲧⲢⲉⲙ̀ⲛⲭⲏⲙⲓ',
        d: "ltr",
        f: '',
        kv: "̈ 1 2 3 4 5 6 7 8 9 0 · ⸗ ⲑ ⲱ ⲉ ⲣ ⲧ ⲯ ⲩ ⲓ ⲟ ⲡ [ ] ̀ ⲁ ⲥ ⲇ ⲫ ⲅ ⲏ ϫ ⲕ ⲗ ; ʼ ⲍ ⲝ ⲭ ϣ ⲃ ⲛ ⲙ , . ́",
        ks: '̑ ̄ ̆ ʹ ͵ ̇ ̣ ⳤ * ( ) - ̅ Ⲑ Ⲱ Ⲉ Ⲣ Ⲧ Ⲯ Ⲩ Ⲓ Ⲟ Ⲡ { } | Ⲁ Ⲥ Ⲇ Ⲫ Ⲅ Ⲏ Ϫ Ⲕ Ⲗ : ⳿ Ⲍ Ⲝ Ⲭ Ϣ Ⲃ Ⲛ Ⲙ < > ⳾'
    },
    {
        t: 'Croatian',
        n: 'Hrvatske Tipkovnice',
        d: "ltr",
        f: '',
        kv: "¸ 1 2 3 4 5 6 7 8 9 0 ' + q w e r t z u i o p š đ ž a s d f g h j k l č ć y x c v b n m , . -",
        ks: '¨ ! " # $ % & / ( ) = ? * Q W E R T Z U I O P Š Đ Ž A S D F G H J K L Č Ć Y X C V B N M ; : _'
    },
    {
        t: 'Czech',
        n: 'Česká Klávesnice',
        d: "ltr",
        f: '',
        kv: "; + ě š č ř ž ý á í é = ´ q w e r t z u i o p ú ) ¨ a s d f g h j k l ů § y x c v b n m , . -",
        ks: "° 1 2 3 4 5 6 7 8 9 0 % ˇ Q W E R T Z U I O P / ( ' A S D F G H J K L \" ! Y X C V B N M ? : _"
    },
    {
        t: 'Danish',
        n: 'Dansk Keyboard',
        d: "ltr",
        f: '',
        kv: "½ 1 2 3 4 5 6 7 8 9 0 + ´ q w e r t y u i o p å ¨ ' a s d f g h j k l æ ø z x c v b n m , . -",
        ks: '§ ! " # ¤ % & / ( ) = ? ` Q W E R T Y U I O P Å ^ * A S D F G H J K L Æ Ø Z X C V B N M ; : _'
    },
    {
        t: 'Dhivehi',
        n: 'ދިވެހި',
        d: "rtl",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ް އ ެ ރ ތ ޔ ު ި ޮ ޕ ] [ \\ ަ ސ ދ ފ ގ ހ ޖ ކ ލ ؛ ' ޒ × ޗ ވ ބ ނ މ ، . /",
        ks: '~ ! @ # $ % ^ & * ) ( _ + ޤ ޢ ޭ ޜ ޓ ޠ ޫ ީ ޯ ÷ } { | ާ ށ ޑ ﷲ ޣ ޙ ޛ ޚ ޅ : " ޡ ޘ ޝ ޥ ޞ ޏ ޟ > < ؟'
    },
    {
        t: 'Dutch',
        n: 'Nederlands Toetsenbord',
        d: "ltr",
        f: '',
        kv: "@ 1 2 3 4 5 6 7 8 9 0 / ° q w e r t y u i o p ¨ * < a s d f g h j k l + ´ z x c v b n m , . -",
        ks: '§ ! " # $ % & _ ( ) \' ? ~ Q W E R T Y U I O P ^ | > A S D F G H J K L ± ` Z X C V B N M ; : ='
    },
    {
        t: 'English',
        n: '',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p [ ] \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Q W E R T Y U I O P { } | A S D F G H J K L : " Z X  V B N M < > ?'
    },
    {
        t: 'Esperanto',
        n: 'Esperanta Klavaro',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ĵ ŝ e r t ĥ u i o p [ ] \\ a s d f g h j k l ; ' z ŭ c v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ +  ĝ E R T  U I O P { } | A S D F G H J K L : " Z ĉ C V B N M < > ?'
    },
    {
        t: 'Estonian',
        n: 'Eesti Klaviatuur',
        d: "ltr",
        f: '',
        kv: "ˇ 1 2 3 4 5 6 7 8 9 0 ` ´ q w e r t y u i o p ü õ ' a s d f g h j k l ö ä z x c v b n m , . -",
        ks: '~ ! " # ¤ % & / ( ) = ? ` Q W E R T Y U I O P Ü Õ * A S D F G H J K L Ö Ä Z X C V B N M ; : _'
    },
    {
        t: 'Farsi',
        n: 'فارسی صفحه کلید',
        d: "rtl",
        f: 'font-amiri',
        kv: "‍‍ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ - = ض ص ث ق ف غ ع ه خ ح ج چ \\ ش س ی ب ل ا ت ن م ک گ ظ ط ز ر ذ د پ و . /",
        ks: '~ ! ، ؍ ﷼ ٪ × ٬ ٭ ( ) _ + ْ ٌ ٍ ً ُ ِ َ ّ [ ] { } | ؤ ُ ي إ أ آ ة « » : ؛ ك ٓ ژ ٰ ‌ ٔ ء < > ؟'
    },
    {
        t: 'Finnish',
        n: 'Suomen Näppäimistö',
        d: "ltr",
        f: '',
        kv: "§ 1 2 3 4 5 6 7 8 9 0 + ´ q w e r t y u i o p å ¨ ' a s d f g h j k l ö ä z x c v b n m , . -",
        ks: '½ ! " # ¤ % & / ( ) = ? ` Q W E R T Y U I O P Å ^ * A S D F G H J K L Ö Ä Z X C V B N M ; : _'
    },
    {
        t: 'French',
        n: '',
        d: "ltr",
        f: '',
        kv: "² & é \" ' ( - è _ ç à ) = a z e r t y u i o p ^ $ * q s d f g h j k l m ù w x c v b n , ; : !",
        ks: ' 1 2 3 4 5 6 7 8 9 0 ° + A Z E R T Y U I O P ¨ £ µ Q S D F G H J K L M % W X C V B N ? . / §'
    },
    {
        t: 'Fula',
        n: '',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p ñ ʼ \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Q W E R T Y U I O P Ñ } | A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Georgian',
        n: 'ქართული კლავიატურა',
        d: "ltr",
        f: '',
        kv: "ჩ 1 2 3 4 5 6 7 8 9 0 - ჭ ქ ვ ე რ ტ თ უ ი ო პ შ წ ძ ა ს დ ფ გ ჰ ჯ კ ლ ღ ყ ზ ხ ც ჟ ბ ნ მ , . /",
        ks: 'ჩ ! № " $ % [ ] * ( ) — ჭ ქ ვ ე რ ტ თ უ ი ო პ შ წ ძ ა ს დ ფ გ ჰ ჯ კ ლ ღ ყ ზ ხ ც ჟ ბ ნ მ ; : ?'
    },
    {
        t: 'German',
        n: 'Deutsch Keyboard',
        d: "ltr",
        f: '',
        kv: "^ 1 2 3 4 5 6 7 8 9 0 ß ` q w e r t z u i o p ü + # a s d f g h j k l ö ä y x c v b n m , . -",
        ks: '° ! " § $ % & / ( ) = ? ` Q W E R T Z U I O P Ü * \' A S D F G H J K L Ö Ä Y X C V B N M ; : _'
    },
    {
        t: 'Greek',
        n: 'ελληνικό πληκτρολόγιο',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ; ς ε ρ τ υ θ ι ο π [ ] \\ α σ δ φ γ η ξ κ λ ` ' ζ χ ψ ω β ν μ , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + : ΅ Ε Ρ Τ Υ Θ Ι Ο Π { } | Α Σ Δ Φ Γ Η Ξ Κ Λ ¨ " Ζ Χ Ψ Ω Β Ν Μ < > ?'
    },
    {
        t: 'Gujarati',
        n: 'ગુજરાતી કીબોર્ડ',
        d: "ltr",
        f: '',
        kv: "ૐ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯ ૦ - = ઌ ઔ એ ર ત ય ઉ ઇ ઓ પ ડ ણ \\ અ સ દ ્ ગ હ જ ક લ ; ' ટ શ ચ વ બ ન મ , . /",
        ks: '~ ! @ # ૱ % ^ & * ( ) _ + ૡ ઃ ઐ ઋ થ ઍ ઊ ઈ ઑ ફ ઢ ઞ | આ ષ ધ ઼ ઘ ં ઝ ખ ળ : " ઠ ઁ છ ૰ ભ ણ ઽ < > ?'
    },
    {
        t: 'Hausa',
        n: '',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p á ʼ \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ ! @ # $ % Â & * ( ) _ + Q W E R T Y U I O P { } | A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Hebrew',
        n: 'מקלדת בעברית',
        d: "rtl",
        f: '',
        kv: "; 1 2 3 4 5 6 7 8 9 0 - = / ' ק ר א ט ו ן ם פ ] [ \\ ש ד ג כ ע י ח ל ך ף , ז ס ב ה נ מ צ ת ץ .",
        ks: '~ ! @ # $ % ^ & * ) ( _ + < > קּ רּ אּ טּ וּ ןּ ּ פּ } { | שּ דּ גּ כּ ׳ יּ ״ לּ ךּ : " זּ סּ בּ הּ נּ מּ צּ תּ ׆ ?'
    },
    {
        t: 'Hindi',
        n: 'हिंदी कीबोर्ड',
        d: "ltr",
        f: '',
        kv: "ॊ 1 2 3 4 5 6 7 8 9 0 - ृ ट ौ े र त य ु ि ो प इ ए ॉ ा स द उ ग ह ज क ल ॆ ् ष ड च व ब न म , . ",
        ks: 'ऒ ऍ ॅ ऄ ₹ ऽ ‌ ऀ  ( ) ः ऎ ठ औ ै ृ थ ञ ू ी ओ फ ई ऐ ऑ आ श ध ऊ घ अ झ ख ॥  ़ ऋ ढ छ ँ भ ण ं ष । य़'
    },
    {
        t: 'Hungarian',
        n: 'Magyar Billentyűzet',
        d: "ltr",
        f: '',
        kv: "0 1 2 3 4 5 6 7 8 9 ö ü ó q w e r t z u i o p ő ú ű a s d f g h j k l é á y x c v b n m , . -",
        ks: '§ \' " + ! % / = ( ) Ö Ü Ó Q W E R T Z U I O P Ő Ú Ű A S D F G H J K L É Á Y X C V B N M ? : _'
    },
    {
        t: 'Icelandic',
        n: 'Íslenskt lyklaborð',
        d: "ltr",
        f: '',
        kv: "° 1 2 3 4 5 6 7 8 9 0 ö - q w e r t y u i o p ð ' + a s d f g h j k l æ ´ z x c v b n m , . þ",
        ks: '¨ ! " # $ % & / ( ) = Ö _ Q W E R T Y U I O P Ð ? * A S D F G H J K L Æ \' Z X C V B N M ; : Þ'
    },
    {
        t: 'Igbo',
        n: '',
        d: "ltr",
        f: '',
        kv: "ị 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p ñ ʼ \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Q W E R T Y U I O P Ñ } | A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Irish',
        n: 'Méarchlár hÉireann',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p [ ] # a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '¬ ! " £ $ % ^ & * ( ) _ + Q W E R T Y U I O P { } ~ A S D F G H J K L : @ Z X C V B N M < > ?'
    },
    {
        t: 'Italian',
        n: 'Tastiera Italiana',
        d: "ltr",
        f: '',
        kv: "\\ 1 2 3 4 5 6 7 8 9 0 ' ì q w e r t y u i o p è + ù a s d f g h j k l ò à z x c v b n m , . -",
        ks: '| ! " £ $ % & / ( ) = ? í Q W E R T Y U I O P é * ú A S D F G H J K L ç ó Z X C V B N M ; : _'
    },
    {
        t: 'Javanese',
        n: 'ꦧꦱꦗꦮ Keyboard',
        d: "ltr",
        f: '',
        kv: " 1 2 3 4 5 6 7 8 9 0 - = ꦣ ꦮ ꦼ ꦫ ꦠ ꦪ ꦸ ꦶ ꦺꦴ ꦥ ꧌ ꧍ ꧊ ꦄ ꦱ ꦢ ‌‌‌‌‌‌‌‌‌‌ ꦒ ꦲ ꦗ ꦏ ꦭ ꧇ ꧏ ꦚ ꦛ ꦕ ꦔ ꦧ ꦤ ꦩ ꧈ ꧉ /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + ꦞ ꦀ ꦌ ꦁ ꦡ ꦂ ꦈ ꦆ ꦎ ꦦ { } ꧋ ꦺ ꦯ ꦝ ꦃ ꦓ ꦽ ꦙ ꦑ ꦾ ; " ꦘ ꦜ ꦖ ꦿ ꦨ ꦟ ꧀ < > ?'
    },
    {
        t: 'Kannada',
        n: 'ಕನ್ನಡ ಕೀಲಿಮಣೆ',
        d: "ltr",
        f: '',
        kv: "ೊ 1 2 3 4 5 6 7 8 9 0 - ೃ ೌ ೈ ಾ ೀ ೂ ಬ ಹ ಗ ದ ಜ ಡ  \\ ೋ ೇ ್ ಿ ು ಪ ರ ಕ ತ ಚ ಟ ೆ ಂ ಮ ನ ವ ಲ ಸ , . ಯ",
        ks: 'ಒ         ( ) ಃ ಋ ಔ ಐ ಆ ಈ ಊ ಭ ಙ ಘ ಧ ಝ ಢ ಞ | ಓ ಏ ಅ ಇ ಉ ಫ ಱ ಖ ಥ ಛ ಠ ಎ  ಣ ‌‌  ಳ ಶ ಷ |  '
    },
    {
        t: 'Kazakh',
        n: 'Қазақ тілі',
        d: "ltr",
        f: '',
        kv: "( \" ә і ң ғ , . ү ұ қ ө һ й ц у к е н г ш щ з х ъ \\ ф ы в а п р о л д ж э я ч с м и т ь б ю №",
        ks: ') ! Ә І Ң Ғ ; : Ү Ұ Қ Ө Һ Й Ц У К Е Н Г Ш Щ З Х Ъ / Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю ?'
    },
    {
        t: 'Khmer',
        n: 'ភាសាខ្មែរ',
        d: "ltr",
        f: '',
        kv: "« ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩ ០ គ ធ ឆ ឹ េ រ ត យ ុ ិ ោ ផ ៀ ឨ ឮ ា ស ដ ថ ង ហ ្ ក ល ើ ់ ឋ ខ ច វ ប ន ម ំុ ។ ៊",
        ks: '» ! ៗ " ៛ % ៌ ័ ៏ ( ) ៝ ឪ ឈ ឺ ែ ឬ ទ ួ ូ ី ៅ ភ ឿ ឧ ឭ ាំ ៃ ឌ ធ ឣ ះ ញ គ ឡ ោៈ ៉ ឍ ឃ ជ េះ ព ណ ំ ុះ ៕ ?'
    },
    {
        t: 'Khowar',
        n: 'کھوار',
        d: "rtl",
        f: '',
        kv: "ݰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ - = ق و ع ر ت ے ء ی ہ پ ݮ ݯ ݱ ا س د ف گ ح ج ک ل ؛ ' ز ش چ ط ب ن م ، ۔ /",
        ks: 'څ ! @ ؔ ؒ ٪ ؓ ؑ ؐ ) ( _ + ځ ٔ ٰ ڑ ٹ َ ئ ِ ۃ ُ ڵ ﺃ ڄ آ ص ڈ ݲ غ ھ ض خ ڙ : " ذ ژ ث ظ ً ں ٘ ٗ . ؟',
    },
    {
        t: 'Korean',
        n: '한국어 키보드',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ [ ] \\ ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ ; ' ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + ㅃ ㅉ ㄸ ㄲ ㅆ    ㅒ ㅖ { } |          : "        < > ?'
    },
    {
        t: 'Kurdish',
        n: 'تەختەکلیل کوردی',
        d: "rtl",
        f: '',
        kv: "` ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٠ - = ق و ە ر ت ی ئ ع ۆ پ ] [ \\ ا س د ف گ ه ژ ک ل ؛ ' ز خ ج ڤ ب ن م ، . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + ‌ وو ي ڕ ط ێ ء ح ٶ ث { } | آ ش ذ إ غ ‌ أ ك ڵ : " ض ص چ ظ ى ة ـ < > ؟'
    },
    {
        t: 'Kyrgyz',
        n: 'Кыргыз Keyboard',
        d: "ltr",
        f: '',
        kv: "ё 1 2 3 4 5 6 7 8 9 0 - = й ц у к е н г ш щ з х ъ \\ ф ы в а п р о л д ж э я ч с м и т ь б ю .",
        ks: 'Ё ! " № ; % : ? * ( ) _ + Й Ц У К Е Н Г Ш Щ З Х Ъ / Ф Ы В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю ,'
    },
    {
        t: 'Lao',
        n: 'ແປ້ນພິມລາວ',
        d: "ltr",
        f: '',
        kv: '" ຢ ຟ ໂ ຖ ຸ ູ ຄ ຕ ຈ ຂ ຊ ໍ ົ ໄ ຳ ພ ະ ິ ີ ຮ ນ ຍ ບ ລ \\ ັ ຫ ກ ດ ເ ້ ່ າ ສ ວ ງ ຜ ປ ແ ອ ຶ ື ທ ມ ໃ ຝ',
        ks: "' 1 2 3 4 ໌ ຼ 5 6 7 8 9  / 0 * _ + “ ” ຣ ໜ ຽ -  |  ; . , : ໊ ໋ ! ? % = ₭ ( ຯ x   ໆ ໝ $ )"
    },
    {
        t: 'Latvian',
        n: 'Latviešu Klaviatūras',
        d: "ltr",
        f: '',
        kv: "­ 1 2 3 4 5 6 7 8 9 0 - f ū g j r m v n z ē č ž h ķ š u s i l d a t e c ´ ņ b ī k p o ā , . ļ",
        ks: '? ! « » $ % / & × ( ) _ F Ū G J R M V N Z Ē Č Ž H Ķ Š U S I L D A T E C ° Ņ B Ī K P O Ā ; : Ļ'
    },
    {
        t: 'Lisu',
        n: 'ꓡꓲ-ꓢꓴ Keyboard',
        d: "ltr",
        f: '',
        kv: "` ꓭ ꓷ ꓶ ꓛ ꓒ ꓨ ꓘ ꓕ ꓞ ꓩ ꓵ = ꓱ ꓪ ꓰ ꓣ ꓔ ꓬ ꓴ ꓲ ꓳ ꓑ [ ] \\ ꓮ ꓢ ꓓ ꓝ ꓖ ꓧ ꓙ ꓗ ꓡ ꓯ ʼ ꓜ ꓫ ꓚ ꓦ ꓐ ꓠ ꓟ ꓥ ꓤ ?",
        ks: '~ 1 2 3 4 5 6 7 8 9 0 _ + Q    #  ꓻ ꓾ ˍ ^ { } | @  ( )  ꓿ ꓽ ꓼ ‐ ꓺ " < > & % $ * ! , . /'
    },
    {
        t: 'Lithuanian',
        n: 'Lietuvos klaviatūros',
        d: "ltr",
        f: '',
        kv: "` ą č ę ė į š ų ū 9 0 - ž q w e r t y u i o p [ ] \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ Ą Č Ę Ė Į Š Ų Ū ( ) _ Ž Q W E R T Y U I O P { } | A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Macedonian',
        n: 'Македонска тастатура',
        d: "ltr",
        f: '',
        kv: "ѝ 1 2 3 4 5 6 7 8 9 0 - = љ њ е р т ѕ у и о п ш ѓ ж а с д ф г х ј к л ч ќ з џ ц в б н м , . /",
        ks: "Ѝ ! „ “ ' % ‚ ‘ * ( ) - + Љ Њ Е Р Т Ѕ У И О П Ш Ѓ Ж А С Д Ф Г Х Ј К Л Ч Ќ З Џ Ц В Б Н М ; : ?"
    },
    {
        t: 'Malayalam',
        n: 'മലയാളം കീബോര്‍ഡ്‌',
        d: "ltr",
        f: '',
        kv: "ൊ 1 2 3 4 5 6 7 8 9 0 - ൃ ൌ ൈ ാ ീ ൂ ബ ഹ ഗ ദ ജ ഡ  \\ ോ േ ് ി ു പ ര ക ത ച ട െ ം മ ന വ ല സ , . യ",
        ks: 'ഒ ർ ൿ ൻ ൽ     ( )‍ ഃ ഋ ഔ ഐ ആ ഈ ഊ ഭ ങ ഘ ധ ഝ ഢ ഞ  ഓ ഏ അ ഇ ഉ ഫ റ ഖ ഥ ഛ ഠ എ ‍ ണ ‌ ഴ ള ശ ഷ ; :'
    },
    {
        t: 'Maltese',
        n: 'Tastiera Maltija',
        d: "ltr",
        f: '',
        kv: "ċ 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p ġ ħ ż a s d f g h j k l ; ' z x c v b n m , . /",
        ks: 'Ċ ! @ € $ % ^ & * ( ) _ + Q W E R T Y U I O P Ġ Ħ Ż A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Marathi',
        n: 'मराठी कळफलक',
        d: "ltr",
        f: '',
        kv: "‍ १ २ ३ ४ ५ ६ ७ ८ ९ ० - ृ ौ ै ा ी ू ब ह ग द ज ड ़ ॉ ो े ् ि ु प र क त च ट ‌ ं म न व ल स , . य",
        ks: ' ऍ ॅ       ( ) ः ऋ औ ऐ आ ई ऊ भ ङ घ ध झ ढ ञ ऑ ओ ए अ इ उ फ ऱ ख थ छ ठ  ँ ण  ‌ ळ श ष । य़'
    },
    {
        t: 'Mongolian',
        n: '',
        d: "ltr",
        f: '',
        kv: "᠍ 1 2 3 4 5 6 7 8 9 0  = ᠴ ᠣ ᠡ ᠷ ᠲ ᠶ ᠦ ᠢ ᠥ ᠫ 〔 〕 ᠁ ᠠ ᠰ ᠳ ᠹ ᠭ ᠬ ᠵ ᠺ ᠯ ; ᠋ ᠽ ᠱ ᠼ ᠤ ᠪ ᠨ ᠮ ᠂ ᠃ .",
        ks: '~ ! ⁈ ⁉ — % ‌ ᠊ ‍ ( )  +  ᠸ ᠧ ᠿ       〈 〉 |      ᠾ  ᠻ ᡀ ᠄ ᠌ ᡁ  ᡂ   ᠩ  《 》 ?'
    },
    {
        t: 'Mossi',
        n: '',
        d: "ltr",
        f: '',
        kv: "' 1 2 3 4 5 6 7 8 9 0 - = ɛ w e r t y u i o p q c j a s d f g h ɩ k l ; ʼ z x ʋ v b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Ɛ W E R T Y U I O P Q C J A S D F G H Ɩ K L : " Z X Ʋ V B N M < > ?'
    },
    {
        t: 'Myanmar',
        n: 'မြန်မာအက္ခရာ',
        d: "ltr",
        f: '',
        kv: "ၐ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၀ - = ဆ တ န မ အ ပ က င သ စ ဟ ဩ ၏ ေ ျ ိ ် ါ ့ ြ ု ူ း ' ဖ ထ ခ လ ဘ ည ာ , . /",
        ks: 'ဎ ဍ ၒ ဋ ၓ ၔ ၕ ရ * ( ) _ + ဈ ဝ ဣ ၎ ဤ ၌ ဥ ၍ ဿ ဏ ဧ ဪ ၑ ဗ ှ ီ ္ ွ ံ ဲ ဒ ဓ ဂ " ဇ ဌ ဃ ဠ ယ ဉ ဦ ၊ ။ ?'
    },
    {
        t: 'Nepali',
        n: 'नेपाली किबोर्ड',
        d: "ltr",
        f: '',
        kv: "ॊ 1 2 3 4 5 6 7 8 9 0 - ृ ट ौ े र त य ु ि ो प इ ए ॉ ा स द उ ग ह ज क ल ॆ ् ष ड च व ब न म , . ",
        ks: 'ऒ ऍ ॅ ऄ ₹ ऽ ‌ ऀ ‍ ( ) ः ऎ ठ औ ै ृ थ ञ ू ी ओ फ ई ऐ ऑ आ श ध ऊ घ अ झ ख ॥  ़ ऋ ढ छ ँ भ ण ं ष । य़'
    },
    {
        t: 'Oriya',
        n: 'ଉତ୍କଳ ଲିପି',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - ୃ ୌ ୈ ା ୀ ୂ ବ ହ ଗ ଦ ଜ ଡ ଼ \\ ୋ େ ୍ ି ୁ ପ ର କ ତ ଚ ଟ ୟ ଂ ମ ନ ବ ଲ ସ , . ଯ",
        ks: '~ ! @ ୍ର ର୍ ଜ୍ଞ ତ୍ର କ୍ଷ ଶ୍ର ( ) ଃ ଋ ଔ ଐ ଆ ଈ ଊ ଭ ଙ ଘ ଧ ଝ ଢ ଞ | ଓ ଏ ଅ ଇ ଉ ଫ  ଖ ଥ ଛ ଠ ୱ ଁ ଣ  ‌ ଳ ଶ ଷ > ଯ଼'
    },
    {
        t: 'Pashto',
        n: 'ليکمن پښتو',
        d: "rtl",
        f: '',
        kv: "‍ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ - = ض ص ث ق ف غ ع ه خ ح ج چ \\ ش س ی ب ل ا ت ن م ک ګ ۍ ې ز ر ذ د ړ و ږ /",
        ks: '÷ ! ٬ ٫  ٪ × « » ( ) ـ + ْ ٌ ٍ ً ُ ِ َ ّ څ ځ [ ] ٭ ښ ﺉ ي پ أ آ ټ ڼ ة : ؛ ظ ط ژ ء ‌ ډ ؤ ، . ؟'
    },
    {
        t: 'Polish',
        n: 'Klawiatury Polska',
        d: "ltr",
        f: '',
        kv: "ę 1 2 3 4 5 6 7 8 9 0 + ' q w e r t z u i o p ż ś ó a s d f g h j k l ł ą y x c v b n m , . -",
        ks: 'Ż ! " # ¤ % & / ( ) = ? * Q W E R T Z U I O P ń ć ź A S D F G H J K L Ł ę Y X C V B N M ; : _'
    },
    {
        t: 'Portuguese',
        n: 'Português do Teclado',
        d: "ltr",
        f: '',
        kv: "\\ 1 2 3 4 5 6 7 8 9 0 ' « q w e r t y u i o p + ´ ~ a s d f g h j k l ç º z x c v b n m , . -",
        ks: '| ! " # $ % & / ( ) = ? » Q W E R T Y U I O P * ` ^ A S D F G H J K L Ç ª Z X C V B N M ; : _'
    },
    {
        t: 'Punjabi',
        n: 'ਪੰਜਾਬੀ ਦੇ ਬੋਰਡ',
        d: "ltr",
        f: '',
        kv: "` ੧ ੨ ੩ ੪ ੫ ੬ ੭ ੮ ੯ ੦ - = ੲ ੱ ਐ ਰ ਤ ਯ ਉ ਇ ਓ ਪ ।  \\ ਅ ਸ ਦ ੰ ਗ ਹ ਜ ਕ ਲ ; ' ਡ ਼ ਚ ਵ ਬ ਨ ਮ , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + ੳ ਥ ਏ ੜ ਟ ਁ ਊ ਈ ਔ ਫ ॥  | ਆ ਠ ਧ ਂ ਘ ਃ ਝ ਖ ੍ : " ਢ ਞ ਛ ਙ ਭ ਣ ੴ < > ?'
    },
    {
        t: 'Romanian',
        n: 'Română Tastatură',
        d: "ltr",
        f: '',
        kv: "„ 1 2 3 4 5 6 7 8 9 0 - = q w e r t y u i o p ă î â a s d f g h j k l ș ț z x c v b n m , . /",
        ks: '” ! @ # $ % û & * ( ) _ + Q W E R T Y U I O P Ă Î Â A S D F G H J K L Ș Ț Z X C V B N M ; : ?'
    },
    {
        t: 'Russian',
        n: 'русская клавиатура',
        d: "ltr",
        f: '',
        kv: "щ 1 2 3 4 5 6 7 8 9 0 — = я ш е р т ы у и о п ю ж э а с д ф г ч й к л ь ъ з х ц в б н м ё « .",
        ks: 'Щ ! " № ; % : ? * ( ) / + Я Ш Е Р Т Ы У И О П Ю Ж Э А С Д Ф Г Ч Й К Л Ь Ъ З Х Ц В Б Н М Ё » ,'
    },
    {
        t: 'Santali',
        n: '',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - =   ᱟ   ᱵ ᱦ ᱜ ᱫ ᱡ ᱰ ᱹ \\ ᱳ ᱮ ᱚ ᱤ ᱩ ᱯ ᱨ ᱠ ᱛ ᱪ ᱴ ᱷ ᱸ ᱢ ᱱ ᱣ ᱞ ᱥ ᱿ ᱾ ᱭ",
        ks: '~ ! @ # $ % ^ & * ( ) _ +       ᱝ    ᱲ ᱧ |          : " ᱽ  ᱬ  ᱶ   < > ?'
    },
    {
        t: 'Sindhi',
        n: 'سنڌي ڪي بورڊ',
        d: "rtl",
        f: 'font-amiri',
        kv: "’ ۱ ۲ ۳ ۴ ۵ ٦ ۷ ۸ ۹ ۰ ڏ ڌ ق ص ي ر ت ٿ ع ڳ و پ ڇ چ ڍ ا س د ف گ ه ج ڪ ل ک ڱ ز خ ط ڀ ب ن م ، . ئ",
        ks: '‘ ! ى ؔ ؒ ٪ ؓ ۽ ؤ ) ( _ + َ ض ِ ڙ ٽ ث غ ھ ُ ڦ ڃ ڄ ٺ آ ش ڊ ڦ ً ح ٍ ۡ : ؛ " ذ ّ ظ ء ٻ ڻ ۾ “ ” ؟'
    },
    {
        t: 'Sinhala',
        n: 'සිංහල',
        d: "ltr",
        f: '',
        kv: "්‍ර 1 2 3 4 5 6 7 8 9 0 - = ු අ ැ ර ඒ හ ම ස ද ච ඤ ; ‍\\ ් ි ා ෙ ට ය ව න ක ත . ' ං ජ ඩ ඉ බ ප ල ග /",
        ks: 'ර්‍ ! @ $ $ % ^ & * ( ) _ + ූ උ ෑ ඍ ඔ ශ ඹ ෂ ධ ඡ ඥ :  | ෟ ී ෘ ෆ ඨ ්‍ය ළු ණ ඛ ථ , " ඃ ඣ ඪ ඊ භ ඵ ළ ඝ ?'
    },
    {
        t: 'Slovak',
        n: 'Slovenská Klávesnica',
        d: "ltr",
        f: '',
        kv: "; + ľ š č ť ž ý á í é =   w e r t z u i o p ú ä ň a s d f g h j k l ô § y x c v b n m , . -",
        ks: 'Ů 1 2 3 4 5 6 7 8 9 0 % Š Q W E R T Z U I O P / ( ) A S D F G H J K L " ! Y X C V B N M ? : _'
    },
    {
        t: 'Slovenian',
        n: 'Slovenščina Tipkovnica',
        d: "ltr",
        f: '',
        kv: "ş 1 2 3 4 5 6 7 8 9 0 ' + q w e r t z u i o p š đ ž a s d f g h j k l č ć y x c v b n m , . -",
        ks: 'Ä ! " # $ % & / ( ) = ? * Q W E R T Z U I O P Š Đ Ž A S D F G H J K L Č Ć Y X C V B N M ; : _'
    },
    {
        t: 'Sora',
        n: '𑃐𑃚𑃝 Keyboard',
        d: "ltr",
        f: '',
        kv: "` 𑃱 𑃲 𑃳 𑃴 𑃵 𑃶 𑃷 𑃸 𑃹 𑃰 - =  𑃧 𑃣 𑃝 𑃑 𑃜 𑃥 𑃤 𑃦 𑃛 [ ] \\ 𑃢 𑃐 𑃔 𑃗 𑃕 𑃞 𑃠 𑃟 𑃘 ; ' 𑃨 𑃡 𑃓 𑃚 𑃒 𑃙 𑃖 , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ +           { } |          : "        < > ?'
    },
    {
        t: 'Spanish',
        n: 'Teclado en Español',
        d: "ltr",
        f: '',
        kv: "º 1 2 3 4 5 6 7 8 9 0 ' ¡ q w e r t y u i o p à + ç a s d f g h j k l ñ á z x c v b n m , . -",
        ks: 'ª ! " · $ % & / ( ) = ? ¿ Q W E R T Y U I O P Â * Ç A S D F G H J K L Ñ Ä Z X C V B N M ; : _'
    },
    {
        t: 'Swedish',
        n: 'Svenskt Tangentbord',
        d: "ltr",
        f: '',
        kv: "§ 1 2 3 4 5 6 7 8 9 0 + á q w e r t y u i o p å ä ' a s d f g h j k l ö ä z x c v b n m , . -",
        ks: '½ ! " # ¤ % & / ( ) = ? ´ Q W E R T Y U I O P Å Â * A S D F G H J K L Ö Ä Z X C V B N M ; : _'
    },
    {
        t: 'Syriac',
        n: 'ܠܫܢܐ ܣܘܪܝܝܐ',
        d: "rtl",
        f: '',
        kv: " 1 2 3 4 5 6 7 8 9 0 - = ܩ ܘ ܖ ܪ ܬ ܝ ܜ ܥ ܧ ܦ ] [ ܆ ܐ ܣ ܕ ܔ ܓ ܗ ܛ ܟ ܠ ܚ ܞ ܙ ܨ ܤ ܫ ܒ ܢ ܡ ܀ . ܇",
        ks: '̮ ! ̊ ̥ ݉ ♰ ♱ ܊ » ) ( « + ܰ ܳ ܶ ܺ ܽ ݀ ݁ ̈ ̄ ̇ ̃ ݊ : ܱ ܴ ܷ ܻ ܾ ܑ ـ ̤ ̱ ̣ ̰ ܲ ܵ ܸ ܼ ܿ ܹ ݂ ، ؛ ؟'
    },
    {
        t: 'Tajik',
        n: 'Клавиатураи тоҷикӣ',
        d: "ltr",
        f: '',
        kv: "ё 1 2 3 4 5 6 7 8 9 0 ғ ӯ й қ у к е н г ш ҳ з х ъ \\ ф ҷ в а п р о л д ж э я ч с м и т ӣ б ю .",
        ks: 'Ё ! " № ; % : ? * ( ) Ғ Ӯ Й Қ У К Е Н Г Ш Ҳ З Х Ъ / Ф Ҷ В А П Р О Л Д Ж Э Я Ч С М И Т Ӣ Б Ю ,'
    },
    {
        t: 'Tamazight',
        n: 'ⵜⴰⵎⴰⵣⵉⵖⵜ Keyboard',
        d: "ltr",
        f: '',
        kv: "ⵥ 1 2 3 4 5 6 7 8 9 0 - = ⴰ ⵣ ⴻ ⵔ ⵜ ⵢ ⵓ ⵉ ⵧ ⵒ [ ] \\ ⵇ ⵙ ⴷ ⴼ ⴳ ⵀ ⵊ ⴽ ⵍ ⵎ ' ⵡ ⵅ ⵞ ⵠ ⴱ ⵏ ⵰ , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ +  ⵤ ⵦ ⵕ ⵝ  U İ   { } | ⵈ ⵚ ⴸ  ⴴ ⵃ ⵋ ⴿ ; : " ⵯ ⵆ   ⴲ ⵐ ⵿ < > ?'
    },
    {
        t: 'Tamil',
        n: 'தமிழ் விசைப்பலகை',
        d: "ltr",
        f: '',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = ஆ ஈ ஊ ஐ ஏ ள ற ன ட ண ச ஞ \\ அ இ உ ் எ கக ப ம த ந ய ஔ ஓ ஒ வ ங ல ர , . ழ ",
        ks: "~ ! @ # $ % ^ & * ( ) _ + ஸ ஷ ஜ ஹ க்ஷ ஸ்ரீ ஶ I [ ] { } | ௹ ௺ ௸ ஃ G H J \" : ; ' ௳ ௴ ௵ ௶ ௷ N / < > ?"
    },
    {
        t: 'Tatar',
        n: 'татар теле Keyboard',
        d: "ltr",
        f: '',
        kv: "һ 1 2 3 4 5 6 7 8 9 0 - = й ө у к е н г ш ә з х ү \\ ф ы в а п р о л д ң э я ч с м и т җ б ю .",
        ks: 'Һ ! " № ; % : ? * ( ) _ + Й Ө У К Е Н Г Ш Ә З Х Ү / Ф Ы В А П Р О Л Д Ң Э Я Ч С М И Т Җ Б Ю ,'
    },
    {
        t: 'Telugu',
        n: 'తెలుగు కీబోర్డ్',
        d: "ltr",
        f: '',
        kv: "` ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯ ౦ - = q వ ఎ ర త య ఉ ఇ ఒ ప [ ] \\ అ స ద ఫ గ హ జ క ల ; ' ఠ ఁ చ వ బ న మ । ॥ /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Q W ఏ ఋ ట ఐ ఊ ఈ ఓ ఫ { } | ఆ శ డ F ఘ ః ఝ ఖ ళ : " థ X ఛ V భ ణ ం < > ?'
    },
    {
        t: 'Thai',
        n: 'แป้นพิมพ์ไทย',
        d: "ltr",
        f: '',
        kv: "_ ๅ / - ภ ถ ุ ึ ค ต จ ข ช ๆ ไ ำ พ ะ ั ี ร น ย บ ล ฃ ฟ ห ก ด เ ้ ่ า ส ว ง ผ ป แ อ ิ ื ท ม ใ ฝ",
        ks: '% + ๑ ๒ ๓ ๔ ู ฿ ๕ ๖ ๗ ๘ ๙ ๐ " ฎ ฑ ธ ํ ๊ ณ ฯ ญ ฐ , ฅ ฤ ฆ ฏ โ ฌ ็ ๋ ษ ศ ซ . ( ) ฉ ฮ ฺ ์ ? ฒ ฬ ฦ'
    },
    {
        t: 'Tibetan',
        n: '',
        d: "ltr",
        f: '',
        kv: "ཨ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ ༠ ཧ ཝ ཅ ཆ ེ ར ཏ ཡ ུ ི ོ ཕ ཙ ཚ ཛ འ ས ད བ ང མ ་ ག ལ ཞ ། ཟ ཤ ཀ ཁ པ ན  ྠ ཇ ཉ",
        ks: '༁ ༪ ༫ ༬ ༭ ༮ ༯ ༰ ༱ ༲ ༳ ༼ ༽ ༕ ༖ ༗ ྼ ཊ ྻ ༘ ༙ ༚ ༛ ༜ ༝ ༞ ཱ ༟ ཌ ༾ ༿ ࿏ ༂ ༃ ༆ ༇ ༸ ༴ ཥ ཀྵ ྇ ྆ ཎ   ༺ ༻'
    },
    {
        t: 'Turkish',
        n: 'Türkçe Klavye',
        d: "ltr",
        f: '',
        kv: '" 1 2 3 4 5 6 7 8 9 0 * - q w e r t y u ı o p ğ ü , a s d f g h j k l ş i z x c v b n m ö ç .',
        ks: "é ! '   % & / ( ) = ? _ Q W E R T Y U I O P Ğ Ü ; A S D F G H J K L Ş İ Z X C V B N M Ö Ç :"
    },
    {
        t: 'Ukrainian',
        n: 'Українська клавіатура',
        d: "ltr",
        f: '',
        kv: "' 1 2 3 4 5 6 7 8 9 0 - = й ц у к е н г ш щ з х ї \\ ф і в а п р о л д ж є я ч с м и т ь б ю .",
        ks: '₴ ! " № ; % : ? * ( ) _ + Й Ц У К Е Н Г Ш Щ З Х Ї / Ф І В А П Р О Л Д Ж Є Я Ч С М И Т Ь Б Ю ,'
    },
    {
        t: 'Urdu',
        n: 'اردو کی بورڈ',
        d: "rtl",
        f: 'font-amiri',
        kv: "؏ ۱ ۲ ۳ ۴ ۵ ٦ ۷ ۸ ۹ ۰ - = ق و ع ر ت ے ء ی ہ پ ﷽ ﷲ ÷ ا س د ف گ ح ج ک ل ؛  ز ش چ ط ب ن م ، ۔ /",
        ks: '؎ ! @ ؔ ؒ ٪ ؓ ؑ ؐ ) (  + ْ ٔ ٰ ڑ ٹ َ ئ ِ ۃ ُ ﷺ ﷻ x آ ص ڈ أ غ ھ ض خ ٖ :  ذ ژ ث ظ ً ں ّ ٗ . ؟'
    },
    {
        t: 'Uyghur',
        n: 'ئۇيغۇر Keyboard',
        d: "rtl",
        f: 'font-amiri',
        kv: "` 1 2 3 4 5 6 7 8 9 0 - = چ ۋ ې ر ت ي ۇ ڭ و پ ] [ \\ ھ س د ا ە ى ق ك ل ؛ ' ز ش غ ۈ ب ن م ، . ئ",
        ks: '~ ! @ # $ % ^ & * ) ( _ +           » « |   ژ ف گ خ ج ۆ  : "        > < ؟'
    },
    {
        t: 'Uzbek',
        n: 'Ўзбек Клавиатура',
        d: "ltr",
        f: '',
        kv: "ё 1 2 3 4 5 6 7 8 9 0 ғ ҳ й ц у к е н г ш ў з х ъ \\ ф қ в а п р о л д ж э я ч с м и т ь б ю .",
        ks: 'Ё ! " № ; % : ? * ( ) Ғ Ҳ Й Ц У К Е Н Г Ш Ў З Х Ъ / Ф Қ В А П Р О Л Д Ж Э Я Ч С М И Т Ь Б Ю ,'
    },
    {
        t: 'Vietnamese',
        n: 'Việt Keyboard',
        d: "ltr",
        f: '',
        kv: "` ă â ê ô ̀ ̉ ̃ ́ ̣ đ - ₫ q w e r t y u i o p ư ơ \\ a s d f g h j k l ; ' z x c v b n m , . /",
        ks: '~ Ă Â Ê Ô ̀ ̉ ̃ ́ ̣ Đ _ + Q W E R T Y U I O P Ư Ơ | A S D F G H J K L : " Z X C V B N M < > ?'
    },
    {
        t: 'Wolof',
        n: '',
        d: "ltr",
        f: '',
        kv: "ã & é \" ' ( - ñ _ ŋ à ) = a z e r t y u i o p ^ ó * q s d f g h j k l m ù w x c v b n , ; : !",
        ks: 'Ã 1 2 3 4 5 6 7 8 9 0 É + A Z E R T Y U I O P ¨ Ó Ñ Q S D F G H J K L M À W X C V B N ? . / Ŋ'
    },
    {
        t: 'Yoruba',
        n: 'Yorùbá Keyboard',
        d: "ltr",
        f: '',
        kv: "; 1 2 3 4 5 6 7 8 9 0 - = ɛ w e r t y u i o p ẹ ʼ \\ a s d f g h j k l à ' ẹ́ ẹ̀ ɔ á b n m , . /",
        ks: '~ ! @ # $ % ^ & * ( ) _ + Ɛ W E R T Y U I O P { } | A S D F G H J K L : " ẹ̄ ā Ɔ  B N M < > ?'
    },
]

export function generateMetadata({ params }) {
    const { item } = params;

    const t = item.charAt(0).toUpperCase() + item.slice(1);

    const meta = {
        title: `${t} Keyboard: Type ${t} Online for Free`,
        dec: `type ${t} online from any device without downloads or installations, with this free Online ${t} Keyboard, Try it now. ⚙️`,
        link: `https://keyboardos.com/${item}`
    }

    return {
        title: meta.title,
        description: meta.dec,
        keywords: [`${t} Keyboard`, `Online ${t} Keyboard`, `type ${t} Online`, `free ${t} Keyboard`, `write ${t} online`, `${t} Virtual Keyboard`],
        alternates: {
            canonical: meta.link,
        },
        openGraph: {
            title: meta.title,
            description: meta.dec,
            url: meta.link,
            locale: 'en-US',
            siteName: 'KeyboardOS',
            type: 'website',
        },
    };
}
export default function KeyBoardPage({ params }) {
    const { item } = params;
    const foundObject = KBist.find(keyboard => keyboard.t.toLowerCase() === item);

    if (!foundObject) {
        return notFound();
    }
    const { t, d, f, n, kv, ks, } = foundObject;

    const generateKeys = (values, shifts) => {
        const V = values.split(' ');
        const S = shifts.split(' ');
        const allAlfabets = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

        return allAlfabets.reduce((result, item, index) => {
            result[item] = { v: V[index], s: S[index], n: null };
            return result;
        }, {});
    };

    const keys = generateKeys(kv, ks);

    const genratekeyValue = (item) => {
        return keys[item].v;
    }
    const genrateShiftValue = (item) => {
        return keys[item].s;
    }
    function getKeyCode(key) {
        switch (key) {
            case '`':
                return 'Backquote';
            case '1':
                return 'Digit1';
            case '2':
                return 'Digit2';
            case '3':
                return 'Digit3';
            case '4':
                return 'Digit4';
            case '5':
                return 'Digit5';
            case '6':
                return 'Digit6';
            case '7':
                return 'Digit7';
            case '8':
                return 'Digit8';
            case '9':
                return 'Digit9';
            case '0':
                return 'Digit0';
            case '-':
                return 'Minus';
            case '=':
                return 'Equal';
            case 'q':
                return 'KeyQ';
            case 'w':
                return 'KeyW';
            case 'e':
                return 'KeyE';
            case 'r':
                return 'KeyR';
            case 't':
                return 'KeyT';
            case 'y':
                return 'KeyY';
            case 'u':
                return 'KeyU';
            case 'i':
                return 'KeyI';
            case 'o':
                return 'KeyO';
            case 'p':
                return 'KeyP';
            case '[':
                return 'BracketLeft';
            case ']':
                return 'BracketRight';
            case '\\':
                return 'Backslash';
            case 'a':
                return 'KeyA';
            case 's':
                return 'KeyS';
            case 'd':
                return 'KeyD';
            case 'f':
                return 'KeyF';
            case 'g':
                return 'KeyG';
            case 'h':
                return 'KeyH';
            case 'j':
                return 'KeyJ';
            case 'k':
                return 'KeyK';
            case 'l':
                return 'KeyL';
            case ';':
                return 'Semicolon';
            case "'":
                return 'Quote';
            case 'z':
                return 'KeyZ';
            case 'x':
                return 'KeyX';
            case 'c':
                return 'KeyC';
            case 'v':
                return 'KeyV';
            case 'b':
                return 'KeyB';
            case 'n':
                return 'KeyN';
            case 'm':
                return 'KeyM';
            case ',':
                return 'Comma';
            case '.':
                return 'Period';
            case '/':
                return 'Slash';
            default:
                return ''; // Handle unknown keys
        }
    }
    const generateKeyArray = (Array) => {
        return Array.map(item => ({
            key: item,
            code: getKeyCode(item),
            v: genratekeyValue(item),
            type: 'key',
            s: genrateShiftValue(item)
        }))
    };
    const generateModifir = (key, icon) => {
        return { key: key, v: key, icon: icon || '', code: key, type: 'modifier' }
    }
    const keyboardKeys = [
        [...generateKeyArray(['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']), generateModifir('Backspace', 'fi-br-arrow-alt-left')],
        [generateModifir('Tab'), ...generateKeyArray(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'])],
        [generateModifir('CapsLock'), ...generateKeyArray(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"]), generateModifir('Enter', 'fi-br-arrow-turn-down-left')],
        [generateModifir('Shift', 'fi-bs-arrow-up-to-dotted-line'), ...generateKeyArray(['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']), generateModifir('Shift', 'fi-bs-arrow-up-to-dotted-line')],
        [{ key: "Control", v: "Ctrl", icon: '', code: "ControlLeft", type: 'modifier' }, { key: "Alt", v: "Alt", icon: '', code: "AltLeft", type: 'modifier' }, { key: ' ', code: 'Space', v: ' ', s: ' ', type: 'space' }, { key: "Alt", v: "Alt", icon: '', code: "AltRight", type: 'modifier' }, { key: "Control", v: "Ctrl", icon: '', code: "ControlRight", type: 'modifier' }]
    ];
    const smoullKeyboardKeys = [
        [...generateKeyArray(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '['])],
        [...generateKeyArray(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ']'])],
        [...generateKeyArray(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"])],
        [generateModifir('Shift', 'fi-bs-arrow-up-to-dotted-line'), ...generateKeyArray(['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.']), generateModifir('Backspace', 'fi-rr-delete')],
        [...generateKeyArray(['`', '-', '\\', '=']), { key: ' ', code: 'Space', v: ' ', s: ' ', type: 'space' }, ...generateKeyArray(['/']), generateModifir('Enter', 'fi-br-arrow-turn-down-left')]
    ];


    const faqs = [
        {
            question: `Is It Free?`,
            answer: `Absolutely! Our goal is to make ${t} typing hassle-free for everyone. Enjoy the benefits of the Keyboard without spending a dime.`
        },
        {
            question: `Is ${t} Keyboard Safe to Use?`,
            answer: `Absolutely! Our online Keyboard is secure and user-friendly. No need to worry about privacy concerns – your text is in safe hands.`
        },
        {
            question: `Can I Use It on Mobile Devices?`,
            answer: `Certainly! This Keyboard is designed to be mobile-friendly, ensuring you can write ${t} text on the go.`
        },
        {
            question: `Do I need to download any software to use an Online ${t} Keyboard?`,
            answer: `No, it is accessible directly via your web browser which makes it hassle-free to use.`
        },

    ];
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": `${t} Keyboard`,
        "description": `A Free Tool to Type ${t} Letters Online, Easily`,
        "url": `https://keyboardos.com/${item}`,
        "applicationCategory": "Utility",
        "operatingSystem": "Web",
        "author": publisher,
        "inLanguage": "en",
        "softwareVersion": "1.0",
        "keywords": `${t} Keyboard, Online ${t} Keyboard, type ${t} Online, free ${t} Keyboard, write ${t} online, ${t} Virtual Keyboard`,
        "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "availability": "http://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "KeyboardOS"
            }
        },
        "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <div>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1>Online {t} Keyboard</h1>
            <p className="text-sm">Have you ever found yourself needing to write {t} Letters Online effortlessly? Well, We've got the perfect solution for you – a free online {t} Keyboard that simplifies the process. Let's type in {t} with this free {t} Keyboard {n !== '' && (`(${n})`)}.</p>
            <KeyBoard font={f} dir={d} KeyboardKeys={keyboardKeys} smoullKeyboardKeys={smoullKeyboardKeys} title={t} />
            <div className="mt-8 mb-4 flex flex-col items-center">
                <Feedback title={t} />
            </div>

            <section className="px-2 my-10 md:px-4 h-full w-full text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
                <InfoCard
                    icon={"fi-br-text-size"}
                    title={"Adjustable Font Size"}
                    dec={`Our Online Keyboard allows users to adjust the size of the text on their screen.`}
                />
                <InfoCard
                    icon={"fi-br-info"}
                    title={"Easy to Use"}
                    dec={`It is Easy to Use, you can use it with your normal keyboard as well for write ${t} Online`}
                />
                <InfoCard
                    icon={"fi-rr-duplicate"}
                    title={"Copy to Clipboard"}
                    dec={`this Keyboard, allows you to copy your text to Clipboard easily with just one click.`}
                />
                <InfoCard
                    icon={"fi-rr-document"}
                    title={".txt File"}
                    dec={`With this ${t} keyboard, you can easily download a .txt file of your text with just one click and save it.`}
                />
                <InfoCard
                    icon={"fi-bs-share"}
                    title={"Share Easily"}
                    dec={'This keyboard allows you to type and share text across multiple social media platforms from one location.'}
                />
                <InfoCard
                    icon={"fi-rs-infinity"}
                    title={"Free & Unlimited"}
                    dec={`Our online ${t} keyboard is completely free to use! You can use it unlimited times to type in your native language.`}
                />
                <InfoCard
                    icon={"fi-br-time-fast"}
                    title={"Fast"}
                    dec={`Say goodbye to slow Keyboards, and Experience Fast Typing with our quick and Fast Keyboard.`}
                />
                <InfoCard
                    icon={"fi-rr-users-alt"}
                    title={"User Friendly"}
                    dec={"Our keyboard is designed to be user-friendly, so advanced knowledge is not required to use it."}
                />
                <InfoCard
                    icon={"fi-rr-universal-access"}
                    title={"Accessibility"}
                    dec={`With this Keyboard, you can Type ${t} at any time, anywhere, on any device with just a few clicks.`}
                />
            </section>

            <h2>What is an online {t} Keyboard?</h2>
            <p>An Online {t} Keyboard is a digital input tool that allows users to type in {t} script using standard QWERTY keyboards. It eliminates the need for physical {t} keyboards.
            </p>
            <p>Since! it is an online Keyboard means it is based on the web you can use it on any device that has internet you don't need to download or install it on your device.</p>

            <h2>Other Keyboards</h2>
            <KeyBoards pathname={`/${item}`} />
            <h2>Frequently Asked Questions (FAQs)</h2>
            <Faq faqs={faqs} />

        </div>
    )
}