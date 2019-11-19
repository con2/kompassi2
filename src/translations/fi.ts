import { Translations } from '.';

const translations: Translations = {
  AccommodationOnboardingView: {
    title: 'Majoituksen sisäänkirjaus',
  },
  Common: {
    ok: 'OK',
    cancel: 'Peruuta',
    submit: 'Lähetä',
    search: 'Haku',
  },
  DataTable: {
    create: 'Luo uusi',
  },
  Event: {
    title: 'Tapahtumat',
    headline: 'Aika ja paikka',
    name: 'Nimi',
    workInProgress: 'Kompassi v2 on työn alla. Tämä ei ole vielä valmis etusivu, vaan taulukkokomponentin demo.',
  },
  Navigation: {
    forms: 'Lomakkeet',
    logIn: 'Kirjaudu sisään',
    logOut: 'Kirjaudu ulos',
  },
  NotFound: {
    notFoundHeader: 'Sivua ei löydy',
    notFoundMessage: 'Annettu osoite ei noudata mitään tunnistettua muotoa. Ole hyvä ja tarkista osoite.',
  },
  SchemaForm: {
    submit: 'Lähetä',
  },
  Forms: {
    heading: 'Lomakkeet',
    title: 'Otsikko',
    slug: 'Tekninen nimi',
    create: 'Uusi lomake',
  },
  FormEditor: {
    editField: 'Muokkaa kenttää',
    moveUp: 'Siirrä ylös',
    moveDown: 'Siirrä alas',
    removeField: 'Poista kenttä',
    addFieldAbove: 'Lisää kenttä ylle',
    addField: 'Lisää kenttä',
    save: 'Tallenna lomake',
    cancel: 'Palaa tallentamatta',
    saveFailedErrorMessage: 'Jokin meni pieleen lomaketta tallennettaessa. JavaScript-konsolissa voi olla lisätietoja.',

    Tabs: {
      design: 'Muokkaa',
      preview: 'Esikatsele',
      properties: 'Asetukset',
    },

    FormPropertiesForm: {
      title: {
        title: 'Lomakkeen otsikko',
        helpText: 'Ihmisen luettava lomakkeen otsikko. Ei välttämättä näytetä lomakkeiden kaikkien käyttötarkoitusten yhteydessä.',
      },
      slug: {
        title: 'Tekninen nimi',
        helpText:
          'Lomakkeen tekninen nimi. Tulee osaksi lomakkeen osoitetta. Sallitut merkit: kirjaimet A-Za-z, numerot 0-9 ja alaviiva _. Ei saa alkaa numerolla.',
      },
      layout: {
        title: 'Asettelu',
        helpText:
          'Tässä valittu asettelu ei välttämättä ole käytössä kaikkien käyttötarkoitusten yhteydessä (esim. ahtaassa tilassa asettelu voi olla pakotettu vaakasuuntaiseksi).',
        choices: {
          horizontal: 'Vaakasuuntainen',
          vertical: 'Pystysuuntainen',
        },
      },
    },

    EditFieldForm: {
      name: {
        title: 'Tekninen nimi',
        helpText:
          'Kentän tekninen nimi. Ei näytetä loppukäyttäjälle. Sallitut merkit: kirjaimet A-Za-z, numerot 0-9 ja alaviiva _. Ei saa alkaa numerolla.',
      },
      title: {
        title: 'Otsikko',
        helpText:
          'Ihmisluettava otsikko. Näytetään loppukäyttäjälle. Mikäli otsikkoa ei ole asetettu, sen tilalla näytetään kentän tekninen nimi.',
      },
      helpText: {
        title: 'Ohjeteksti',
        helpText: 'Näytetään kentän alla.',
      },
    },

    FieldTypes: {
      SingleLineText: 'Yksirivinen tekstikenttä',
      MultiLineText: 'Monirivinen tekstikenttä',
      Divider: 'Erotinviiva',
      StaticText: 'Kiinteä teksti',
      Spacer: 'Tyhjä tila',
      SingleCheckbox: 'Yksittäinen rasti ruutuun -kenttä',
    },

    RemoveFieldModal: {
      title: 'Vahvista kentän poisto',
      message: 'Poistetaanko kenttä?',
      yes: 'Kyllä, poista',
      no: 'Ei, peruuta',
    },
  },
};

export default translations;
