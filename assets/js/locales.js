(function() {
  jQuery(function() {
    var lng;
    if ($.cookie('lang') === void 0) {
      lng = navigator.language || navigator.userLanguage;
      if (_.str.include('cs')) {
        $.cookie('lang', 'cs');
      } else {
        $.cookie('lang', 'en');
      }
    }
    i18n.init({
      cookieName: 'lang',
      preload: ['en', 'cs'],
      fallbackLng: 'en',
      debug: true,
      resStore: {
        en: {
          translation: {
            'title': 'SPRÁVA ÚKOLŮ A KONTAKTŮ PRO ŽIVNOSTNÍKY A MALÉ FIRMY',
            'subtitle': 'Konec poznámek na papírcích nebo ve složitých systémech',
            'language': 'Language',
            'login': '<i class="icon-unlock-alt"></i>&nbsp;&nbsp;&nbsp;Login',
            'try-demo': 'Try demo',
            'demo-without-registration': 'DEMO without registration',
            'create-begin': 'Create an account and begin',
            'pitch-title': 'Úkolník pro drobné podnikatele',
            'pitch1': 'Hledáte nástroj, ve kterém můžete jednoduše spravovat obchodní kontakty? Děsí vás představa, že zapomenete, kdy (komu) volat nebo napsat e-mail? Podobný nástroj jsme hledali také. Bez úspěchu.',
            'pitch2': 'Setkali jsme se jen s hromadou superobřích a drahých systémů plných funkcí, které jako živnostník nikdy nevyužijeme. Zůstali jsme věrní osvědčené „papírkové“ metodě, dokud nám nepřerostla přes hlavu.Než bychom se dále trápili, vytvořili jsme Laostu.',
            'img-desc-1': 'Zapomeňte na starý způsob evidence',
            'img-desc-2': 'Vyzkoušejte jednodušší a elegantnější řešení',
            'benefit1-title': 'Databáze firem',
            'benefit1': 'Poznamenejte si kontaktní údaje<br /> vašich obchodních partnerů<br /> a kdykoliv je změňte.',
            'benefit2-title': 'Úkoly k firmám',
            'benefit2': 'Nastavte si kdy, kdo a jak bude dále<br /> firmu kontaktovat. Jednoduše můžete<br /> delegovat úkol na kolegu.',
            'benefit3-title': 'Filtrování úkolů',
            'benefit3': 'Zobrazte si např. všechny vaše dnešní<br /> a zítřejší úkoly nebo nesplněné úkoly<br /> na celý měsíc dopředu.',
            'benefit4-title': 'Bez instalace',
            'benefit4': 'Přihlašujte se jako ke svému emailu.',
            'benefit5-title': 'Bez omezení',
            'benefit5': 'Libovolný počet firem, úkolů a kontaktů.',
            'benefit6-title': 'Data v bezpečí',
            'benefit6': 'Spolehlivé servery, pravidelné zálohy.',
            'money-title': 'Jen 990 Kč vč. DPH ročně',
            'money-describe': "Po vytvoření účtu můžete 14 dnů využívat zcela zdarma všechny funkce, které vám LAOSTA nabízí. Po 14 dnech vám zašleme zálohovou fakturu a pokud dojde k její úhradě ve lhůtě splatnosti, prodloužíme váš účet o 1 rok. V opačném případě přístup k vašemu zrušíme.",
            'ask-question': 'Nebojte se zeptat na cokoliv',
            'address': 'LANGEO s.r.o., Kubelíkova 42, Praha 3, 140 00,  IČ: 88314588, DIČ: CZ6052041501',
            'dont-want-account': 'Nechcete účet dříve, než aplikaci vyzkoušíte? Žádný problém....',
            'footer-rights': '&copy; 2013 Langeo - všechna práva vyhrazena'
          }
        },
        cs: {
          translation: {
            'title': 'SPRÁVA ÚKOLŮ A KONTAKTŮ PRO ŽIVNOSTNÍKY A MALÉ FIRMY',
            'subtitle': 'Konec poznámek na papírcích nebo ve složitých systémech',
            'language': 'Jazyk',
            'login': '<i class="icon-unlock-alt"></i>&nbsp;&nbsp;&nbsp;Přihlásit',
            'try-demo': 'Vyzkoušet demo',
            'demo-without-registration': 'DEMO bez registrace',
            'create-begin': 'Vytvořit účet a ZAČÍT',
            'pitch-title': 'Úkolník pro drobné podnikatele',
            'pitch1': 'Hledáte nástroj, ve kterém můžete jednoduše spravovat obchodní kontakty? Děsí vás představa, že zapomenete, kdy (komu) volat nebo napsat e-mail? Podobný nástroj jsme hledali také. Bez úspěchu.',
            'pitch2': 'Setkali jsme se jen s hromadou superobřích a drahých systémů plných funkcí, které jako živnostník nikdy nevyužijeme. Zůstali jsme věrní osvědčené „papírkové“ metodě, dokud nám nepřerostla přes hlavu. Než bychom se dále trápili, vytvořili jsme Laostu.',
            'img-desc-1': 'Zapomeňte na starý způsob evidence',
            'img-desc-2': 'Vyzkoušejte jednodušší a elegantnější řešení',
            'benefit1-title': 'Databáze firem',
            'benefit1': 'Poznamenejte si kontaktní údaje vašich obchodních partnerů a kdykoliv je změňte.',
            'benefit2-title': 'Úkoly k firmám',
            'benefit2': 'Nastavte si kdy, kdo a jak bude dále firmu kontaktovat. Jednoduše můžete delegovat úkol na kolegu.',
            'benefit3-title': 'Filtrování úkolů',
            'benefit3': 'Zobrazte si např. všechny vaše dnešní a zítřejší úkoly nebo nesplněné úkoly na celý měsíc dopředu.',
            'benefit4-title': 'Bez instalace',
            'benefit4': 'Přihlašujte se jako ke svému emailu.',
            'benefit5-title': 'Bez omezení',
            'benefit5': 'Libovolný počet firem, úkolů a kontaktů.',
            'benefit6-title': 'Data v bezpečí',
            'benefit6': 'Spolehlivé servery, pravidelné zálohy.',
            'money-title': 'Jen 990 Kč vč. DPH ročně',
            'money-describe': "Po vytvoření účtu můžete 14 dnů využívat zcela zdarma všechny funkce, které vám LAOSTA nabízí. Po 14 dnech vám zašleme zálohovou fakturu a pokud dojde k její úhradě ve lhůtě splatnosti, prodloužíme váš účet o 1 rok. V opačném případě přístup k vašemu zrušíme.",
            'ask-question': 'Nebojte se zeptat na cokoliv',
            'address': 'LANGEO s.r.o., Kubelíkova 42, Praha 3, 140 00,  IČ: 88314588, DIČ: CZ6052041501',
            'dont-want-account': 'Nechcete účet dříve, než aplikaci vyzkoušíte? Žádný problém....',
            'footer-rights': '&copy; 2013 Langeo - všechna práva vyhrazena'
          }
        }
      }
    });
    return $('body').i18n();
  });

}).call(this);
