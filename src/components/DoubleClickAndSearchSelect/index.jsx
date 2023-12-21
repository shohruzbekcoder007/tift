import React, { Component, useState } from "react";
import Select from "react-select";

let apples = [
  "Adams Pearmain",
  "Admiral",
  "Aia Ilu",
  "Airlie Red Flesh (Newell-Kimzey red flesh, Aerlie's Red Flesh)",
  "Akane",
  "Åkerö",
  "Alkmene agm",
  "Allington Pippin",
  "Ambrosia",
  "Anna",
  "Annurca",
  "Antonovka",
  "Apollo",
  "Ariane",
  "Arkansas Black",
  "Arthur Turner agm",
  "Ashmead's Kernel agm",
  "Aurora Golden Gala",
  "Autumn Glory",
  "Bailey",
  "Baldwin",
  "Ballyfatten",
  "Bardsey Island Apple",
  "Beacon",
  "Beauty of Bath",
  "Belle de Boskoop agm",
  "Ben Davis",
  "Beverly Hills",
  "Birgit Bonnier",
  "Bismarck",
  "Blenheim Orange agm",
  "Bloody Ploughman",
  "Bottle Greening",
  "Braeburn",
  "Bramley (Bramley's Seedling) agm",
  "Bravo de Esmolfe",
  "Breedon Pippin",
  "Brina",
  "Byfleet Seedling",
  "Calville Blanc d'hiver",
  "Cameo",
  "Campanino",
  "Carolina Red June",
  "Carroll",
  "Carter's Blue",
  "Champion, Shampion or Sampion",
  "Catshead",
  "Charles Ross",
  "Chelmsford Wonder",
  "Chiver's Delight",
  "Claygate Pearmain agm",
  "Clivia",
  "Cornish Gilliflower",
  "Cortland",
  "Cosmic Crisp",
  "Court Pendu Plat",
  "Cox's Orange Pippin",
  "Cripps Pink ('Pink Lady')",
  "Crispin",
  "Crimson Delight",
  "Crimson Gold",
  "Criterion",
  "D'Arcy Spice",
  "Delblush",
  "Delcorf agm",
  "Delfloga",
  "Delflopion",
  "Delrouval",
  "Deltana",
  "Devonshire Quarreden",
  "Discovery agm",
  "Dorsett Golden",
  "Dougherty/Red Dougherty",
  "Duchess of Oldenburg",
  "Dudley Winter",
  "Dummellor's Seedling agm also known as Dumelow's Seedling",
  "Egle",
  "Early Victoria",
  "Edward VII agm",
  "Egremont Russet agm",
  "Ein Shemer",
  "Ellison's Orange agm",
  "Elstar agm",
  "Emneth Early agm",
  "Empire",
  "Enterprise",
  "Envy",
  "Epicure",
  "Esopus Spitzenburg",
  "Flamenco",
  "Falstaff agm",
  "Fiesta agm",
  "Fireside",
  "Florina",
  "Flower of Kent",
  "Fortune agm (Laxton's Fortune)",
  "Fuji",
  "Gala, Royal Gala agm",
  "Garden Royal",
  "Gascoyne's Scarlet"
];

let cheeses = [
  "Wagasi",
  "Areesh",
  "Baramily",
  "Domiati",
  "Halumi",
  "Istanboly",
  "Mish",
  "Rumi",
  "Ayibe",
  "Caravane cheese",
  "Chhana",
  "Chura kampo",
  "Chura loenpa",
  "Nguri",
  "Rubing",
  "Rushan",
  "Bandel",
  "Paneer",
  "Chhana",
  "Dahi Chhana",
  "Kalari",
  "Kalimpong cheese",
  "Dangke",
  "Sakura cheese",
  "Imsil",
  "Byaslag",
  "Flower of Rajya",
  "Chhurpi",
  "Kesong puti",
  "Paneer",
  "Djathë i bardhë",
  "Kaçkavall",
  "Djathë pice",
  "Gjizë",
  "Chechil",
  "Bachensteiner",
  "Bergkäse",
  "Brimsen",
  "Gelundener Käse",
  "Lüneberg cheese",
  "Montafoner Sauerkäse",
  "Mondseer",
  "Staazer",
  "Steirerkäse",
  "Tyrolean grey (Tiroler Graukäse)",
  "Brussels cheese",
  "Chimay cheeses",
  "Herve cheese",
  "Le Wavreumont",
  "Limburger cheese",
  "Maredsous cheese",
  "Passendale cheese",
  "Remoudou",
  "Rodoric",
  "Livno cheese",
  "Travnički (Vlašić) cheese",
  "Cherni Vit",
  "Kashkaval",
  "Sirene",
  "Paški sir",
  "Škripavac",
  "Tounjski",
  "Prgica",
  "Dimsi",
  "Akkawi",
  "Anari cheese",
  "Halloumi",
  "Kefalotyri",
  "Abertam cheese",
  "Olomoucké syrečky",
  "Danbo",
  "Danish Blue",
  "Esrom",
  "Fynbo",
  "Havarti",
  "Maribo",
  "Molbo",
  "Saga",
  "Samsø cheese",
  "Vesterhavsost",
  "Tybo",
  "Atleet",
  "Eesti Juust",
  "Kadaka juust",
  "Aura",
  "Lappi",
  "Leipäjuusto",
  "Oltermanni",
  "Raejuusto",
  "Sulguni",
  "Anthotyros",
  "Chloro",
  "Feta",
  "Graviera",
  "Kasseri",
  "Kefalograviera",
  "Kefalotyri",
  "Kopanisti",
  "Malaka",
  "Manouri"
];

// let options = [];

// options = options.concat(apples.map(x => "Apple - " + x));
// options = options.concat(cheeses.map(x => "Cheese - " + x));

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function MakeOption(x) {
  return { value: x, label: x };
}

const DoubleClickAndSearchSelect = ({ selectOptions, chageValueFunction, callback_func, label, width }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (newValue, { action }) => {
    if (action === 'input-change') {
      setValue(newValue);
    }
  };

  return (
    <Select
      sx={{
        width: width ?? '100%',
        minWidth: '300px',
        // height: '40px',
        backgroundColor: "#F6F6F6",
        fontSize: '10px',
        fontFamily: 'Inter',
        fontWeight: '500',
        color: '#151515',
        borderRadius: "10px",
        '& .MuiInputBase-root': {
          borderColor: "red",
          outlineColor: "red",
        },
        '& .MuiSelect-select': {
          padding: 0,
          color: "#151515",
          paddingRight: "22px !important",
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: "#F6F6F6",
        },
        '& .MuiOutlinedInput-notchedOutline:hover': {
          borderColor: "#F6F6F6",
        }
      }}

      name="colors"
      isMulti
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      closeMenuOnSelect={false}
      onInputChange={handleInputChange}
      inputValue={value}
    />
  );
};

export default DoubleClickAndSearchSelect;
