

/*_______src________req*/

const d_pack_1 = './resources/data/pack_1.json';
const d_pack_2 = './resources/data/pack_2.json';
const d_pack_3 = './resources/data/pack_3.json';
const d_roadmap = './resources/data/roadmap.json';
const d_train_roadmap = './resources/data/train_roadmap.json';
const d_team = './resources/data/team.json';
const d_lore = './resources/data/lore.json';


/*______data_vars__________*/
var data_pack_1 = null;
var data_pack_2 = null;
var data_pack_3 = null;
var data_roadmap = null;
var data_train_roadmap = null;
var data_team = null;
var data_lore = null;
/*_______main_vars_______*/
var m_pack_1 = undefined;
var m_pack_2 = undefined;
var m_pack_3 = undefined;
var m_roadmap = undefined;
var m_train_roadmap = undefined;
var m_team = undefined;
/*lore*/
var m_lore = undefined;
/*bestiary*/
var m_bestiary_pack_1 = undefined;
var m_bestiary_pack_2 = undefined;
var m_bestiary_pack_3 = undefined;


sendRequest('GET', d_pack_1)
  .then(data => {
    data_pack_1 = data;
  addCard(slider_1,'#slider-cards_1', 'pack_1', data.pack_1);
  addBestiary_pack(data.pack_1, 'pack_1', '#bestiary-pack_1');
  })
  .then(e=>{
    let sec = document.querySelector('#slider-cards_1');
    m_pack_1 = sec.querySelectorAll('li');
    /*bestiary*/
    let bestiary_list  = document.querySelector('#bestiary-pack_1');
    m_bestiary_pack_1 = bestiary_list;
  })
  .catch(err => console.log(err))



sendRequest('GET', d_pack_2)
  .then(data => {
    data_pack_2 = data;
   addCard(slider_2,'#slider-cards_2', 'pack_2', data.pack_2);
   addBestiary_pack(data.pack_2,  'pack_2', '#bestiary-pack_2');
  })
  .then(e=>{
    let sec = document.querySelector('#slider-cards_2');
    m_pack_2 = sec.querySelectorAll('li');
    /*bestiary*/
    let bestiary_list  = document.querySelector('#bestiary-pack_2');
    m_bestiary_pack_2 = bestiary_list;
  })
  .catch(err => console.log(err))

sendRequest('GET', d_pack_3)
  .then(data => {
    data_pack_3 = data;
   addBestiary_pack(data.pack_3,  'pack_3', '#bestiary-pack_3');
  })
  .then(e=>{
    // let sec = document.querySelector('#slider-cards_2');
    // m_pack_2 = sec.querySelectorAll('li');    
    /*bestiary*/
    let bestiary_list  = document.querySelector('#bestiary-pack_3');
    m_bestiary_pack_3 = bestiary_list;
  })
  .catch(err => console.log(err))



// sendRequest('GET', d_roadmap)
//   .then(data => {
//     data_roadmap = data;
//     add_roadmap();
//   })
//   .then(e=>{
//     let sec = document.querySelector('#s_roadmap');
//     m_roadmap = sec.querySelectorAll('.road');
//   })
//   .catch(err => console.log(err))


sendRequest('GET', d_train_roadmap)
  .then(data => {
    data_train_roadmap = data;
    add_train_roadmap();
  })
  .then(e=>{
    let sec = document.querySelector('#train_roadmap');
    m_train_roadmap = sec.querySelectorAll('.road');
  })
  .catch(err => console.log(err))



sendRequest('GET', d_team)
  .then(data => {
    data_team = data;
    team_add(data.team);
  })
  .then(e=>{
    let sec = document.querySelector('#s_team');
    m_team = sec.querySelectorAll('.splide__slide');
  })
  .catch(err => console.log(err))


sendRequest('GET', d_lore)
  .then(data => {
    data_lore = data;
    add_lore_zone();
  })
  .then(e=>{
    let sec = document.querySelector('.lore-history');
    m_lore = sec.querySelectorAll('li');
  })
  .catch(err => console.log(err))
