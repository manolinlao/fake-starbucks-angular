import { Category } from "../main/interfaces/coffeedata.interface";

export const coffeeData: Category[]= [
  {
    category: 'drinks',
    categoryId: 'id001',
    subCategories:[
      {
        subCategoryName: 'hot coffees',
        subCategoryId: 'id001001',
        subCategoryProducts:[
          {
            groupName: 'americanos',
            products: [
              {
                name: 'caffe americano',
                id:'id001001001'
              }
            ]
          },
          {
            groupName: 'brewed coffees',
            products: [
              {
                name: 'veranda blend',
                id:'id001001002'
              },
              {
                name: 'caffe misto',
                id:'id001001003'
              },
              {
                name: 'featured starbucks dark roast coffee',
                id:'id001001004'
              },
              {
                name: 'pick place roast',
                id:'id001001005'
              },
              {
                name: 'decaf pike',
                id:'id001001006'
              }
            ]
          },
          {
            groupName: 'capuccinos',
            products: [
              {
                name: 'capuccino',
                id:'id001001007'
              }
            ]
          },
          {
            groupName: 'expresso shots',
            products: [
              {
                name: 'espresso',
                id:'id001001008'
              },
              {
                name: 'espresso con panna',
                id:'id001001009'
              }
            ]
          },
          {
            groupName: 'flat whites',
            products: [
              {
                name: 'flat white',
                id:'id001001010'
              },
              {
                name: 'honey almondmilk flat white',
                id:'id001001011'
              }
            ]
          },
          {
            groupName: 'lattes',
            products: [
              {
              name: 'pistachio latte',
              id:'id001001012'
            },
            {
              name: 'sugar cookie almondmilk latte',
              id:'id001001013'
            },
            {
              name: 'chestnut praline latte',
              id:'id001001014'
            },
            {
              name: 'caramel brulee latte',
              id:'id001001015'
            }
            ,{
              name: 'cafe latte',
              id:'id001001016'
            }
            ,{
              name: 'cinnamon latte',
              id:'id001001017'
            }
            ,{
              name: 'reserve latte',
              id:'id001001018'
            }
            ,{
              name: 'hazelnut latte',
              id:'id001001019'
            }
            ,{
              name: 'blonde vanilla latte',
              id:'id001001020'
            }
          ]
          },
          {
            groupName: 'macchiatos',
            products: [
              {
                name: 'caramel macchiato',
                id:'id001001021'
              },
              {
                name: 'espresso macchiato',
                id:'id001001022'
              }
            ]
          },
          {
            groupName: 'mochas',
            products: [
              {
                name: 'toasted white chocolate mocha',
                id:'id001001023'
              },
              {
                name: 'peppermint white cholate mocha',
                id:'id001001024'
              },
              {
                name: 'peppermint mocha',
                id:'id001001025'
              },
              {
                name: 'cafe mocha',
                id:'id001001026'
              },
              {
                name: 'reserve dark roast mocha',
                id:'id001001027'
              },
              {
                name: 'white chocolate mocha',
                id:'id001001028'
              }
            ]
          },
          {
            groupName: 'clover brewed coffees',
            products: [
              {
                name: 'jamaica blue mountain clover starbucks reserve',
                id:'id001001029'
              },
              {
                name: 'sun-dried ethipia gera fram clover starbucks reserve',
                id:'id001001030'
              },
              {
                name: 'clover starbucks reserve guatemala santa clara estate',
                id:'id001001031'
              },
              {
                name: 'vietam da lat clover',
                id:'id001001032'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'hot teas',
        subCategoryId: 'id001002',
        subCategoryProducts:[
          {
            groupName: 'chai teas',
            products: [
              {
                name: 'chai tea latte',
                id: 'id001002001'
              },
              {
                name: 'chai tea',
                id: 'id001002002'
              }
            ]
          },
          {
            groupName: 'black teas',
            products: [
              {
                name: 'earl grey',
                id: 'id001002003'
              },
              {
                name: 'london fog tea latte',
                id: 'id001002004'
              },
              {
                name: 'royal english breakfast tea',
                id: 'id001002005'
              },
              {
                name: 'superblack dark tea',
                id: 'id001002006'
              }
            ]
          },
          {
            groupName: 'green teas',
            products: [
              {
                name: 'green emperor tea',
                id: 'id001002007'
              },
              {
                name: 'matcha latte',
                id: 'id0010020018'
              },
              {
                name: 'honey cirrus mint tea',
                id: 'id0010020019'
              },
              {
                name: 'jade citrus mint brewed tea',
                id: 'id001002010'
              }
            ]
          },
          {
            groupName: 'herbal teas',
            products: [
              {
                name: 'mint majesty',
                id: 'id001002011'
              },
              {
                name: 'peach tranquility',
                id: 'id001002012'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'hot drinks',
        subCategoryId: 'id001003',
        subCategoryProducts:[
          {
            groupName: 'hot chocolates',
            products: [
              {
                name: 'toasted white hot chocolate',
                id: 'id001003001'
              },
              {
                name: 'chocolate sexy for you',
                id: 'id001003002'
              },
              {
                name: 'peppermint hot chocolate',
                id: 'id001003003'
              },
              {
                name: 'hot chocolate',
                id: 'id001003004'
              },
              {
                name: 'hot hellish chocolate',
                id: 'id001003005'
              }         
            ]
          },
          {
            groupName: 'juice',
            products: [
              {
                name: 'caramel apple splice',
                id: 'id001003006'
              },
              {
                name: 'steamed apple juice',
                id: 'id001003007'
              }
            ]
          },
          {
            groupName: 'steamers',
            products: [
              {
                name: 'pistachio creme',
                id: 'id001003008'
              },
              {
                name: 'chestnut praline creme',
                id: 'id001003009'
              },
              {
                name: 'caramel brulee creme',
                id: 'id001003010'
              },
              {
                name: 'cinnamon dolce creme',
                id: 'id001003011'
              },
              {
                name: 'sweet creme',
                id: 'id001003012'
              }
              ,{
                name: 'chachi creme brulee starwars',
                id: 'id001003013'
              }
            ]
          },
        ]
      },
      {
        subCategoryName: 'frapuccino blended beverages',
        subCategoryId: 'id001004',
        subCategoryProducts:[
          {
            groupName: 'coffee frapuccino',
            products: [
              {
                name: 'coffee frapuchino 1',
                id: 'id001004001'
              },
              {
                name: 'coffee frapuchino 2',
                id: 'id001004002'
              },
              {
                name: 'coffee frapuchino 3',
                id: 'id001004003'
              },
              {
                name: 'coffee frapuchino 4',
                id: 'id001004004'
              },
              {
                name: 'coffee frapuchino 5',
                id: 'id001004005'
              }
              ,{
                name: 'coffee frapuchino 6',
                id: 'id001004006'
              }
              ,{
                name: 'coffee frapuchino 7',
                id: 'id001004007'
              }
              ,{
                name: 'coffee frapuchino 8',
                id: 'id001004008'
              }
              ,{
                name: 'coffee frapuchino 9',
                id: 'id001004009'
              }
              ,{
                name: 'coffee frapuchino 10',
                id: 'id001004010'
              }
            ]
          },
          {
            groupName: 'creme frapuccino',
            products: [
              {
                name: 'coffee frapuchino 1',
                id: 'id001004011'
              },
              {
                name: 'coffee frapuchino 2',
                id: 'id001004012'
              },
              {
                name: 'coffee frapuchino 3',
                id: 'id001004013'
              }
              ,{
                name: 'coffee frapuchino 4',
                id: 'id001004014'
              }
              ,{
                name: 'coffee frapuchino 5',
                id: 'id001004015'
              }
              ,{
                name: 'coffee frapuchino 6',
                id: 'id001004016'
              }
              ,{
                name: 'coffee frapuchino 7',
                id: 'id001004017'
              }
              ,{
                name: 'coffee frapuchino 8',
                id: 'id001004018'
              }
              ,{
                name: 'coffee frapuchino 9',
                id: 'id001004019'
              }
              ,{
                name: 'coffee frapuchino 10',
                id: 'id001004020'
              }
              ,{
                name: 'coffee frapuchino 11',
                id: 'id001004021'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'cold coffees',
        subCategoryId: 'id001005',
        subCategoryProducts:[
          {
            groupName: 'cold brews',
            products:[
              {
                name: 'irish cream,',
                id: 'id001005001'
              },
              {
                name: 'salted caramel cream cold',
                id: 'id001005002'
              },
              {
                name: 'reserve cold brew',
                id: 'id001005003'
              },
              {
                name: 'cold brew',
                id: 'id001005004'
              },
              {
                name: 'super cold',
                id: 'id001005005'
              }
            ]
          },
          {
            groupName: 'nitro cold brews',
            products:[
              {
                name: 'reserve nitro cold brew',
                id: 'id001005006'
              },
              {
                name: 'nitro cold brew',
                id: 'id001005007'
              }
              , {
                name: 'vanilla sweet nitro cold brew',
                id: 'id001005008'
              }
            ]
          },
          {
            groupName: 'iced americano',
            products:[
              {
                name: 'iced caffe americano',
                id: 'id001005009'
              }
            ]
          },
          {
            groupName: 'iced coffees',
            products:[
              {
                name: 'iced coffee',
                id: 'id001005010'
              },
              {
                name: 'iced coffee mmit milk',
                id: 'id001005011'
              },
              {
                name: 'iced espresso',
                id: 'id001005012'
              }
            ]
          },
          {
            groupName: 'iced shaken expresso',
            products:[
              {
                name: 'iced brown sugar shaken coffee',
                id: 'id001005013'
              },
              {
                name: 'iced chocolate almondmilk',
                id: 'id001005014'
              },
              {
                name: 'iced shaken espresso',
                id: 'id001005015'
              }
            ]
          },
          {
            groupName: 'iced flat whites',
            products:[
              {
                name: 'iced flat white',
                id: 'id001005016'
              },
              {
                name: 'iced honey almondmilk',
                id: 'id001005016'
              }
            ]
          },
          {
            groupName: 'iced lattes',
            products:[
              {
                name: 'iced latte chocolatte',
                id: 'id001005017'
              },
              {
                name: 'star night latte',
                id: 'id001005018'
              },
              {
                name: 'flowers in the garden super latte',
                id: 'id001005019'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'iced teas',
        subCategoryId: 'id001006',
        subCategoryProducts:[
          {
            groupName: 'bottled teas',
            products:[
              {
                name: 'sparkling unsweetened peach nectarine from the garden',
                id: 'id001006001'
              },
              {
                name: 'teavana mango blak tea',
                id: 'id001006002'
              }
            ]
          },
          {
            groupName: 'iced black teas',
            products:[
              {
                name: 'london callin tea',
                id: 'id001006003'
              },
              {
                name: 'the powerslave tea',
                id: 'id001006004'
              },
              {
                name: 'shut your mouth tea',
                id: 'id001006005'
              },
              {
                name: 'countdown to extinction tea',
                id: 'id001006006'
              }
            ]
          },
          {
            groupName: 'iced chai teas',
            products:[
              {
                name: 'iced chai tea latte for your tongue',
                id: 'id001006007'
              }
            ]
          },
          {
            groupName: 'iced green teas',
            products:[
              {
                name: 'theres a road out there',
                id: 'id001006008'
              },
              {
                name: 'ich hasse dich green tea',
                id: 'id001006009'
              },
              {
                name: 'boneflower greenish tea',
                id: 'id001006010'
              },
              {
                name: 'the green beret tea',
                id: 'id001006011'
              }
            ]
          },
          {
            groupName: 'iced herbal teas',
            products:[
              {
                name: 'iced passion tango tea',
                id: 'id001006012'
              },
              {
                name: 'tea lemonade super cool',
                id: 'id001006013'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'cold drinks',
        subCategoryId: 'id001007',
        subCategoryProducts:[
          {
            groupName: 'starbucks refreshers',
            products:[
              {
                name:'star drink',
                id: 'id001007001'
              },
              {
                name:'kiwi starfruit beverage',
                id: 'id001007002'
              },
              {
                name:'starfruit lemonade starbucks',
                id: 'id001007003'
              },
              {
                name:'dragon drink',
                id: 'id001007004'
              },
              {
                name:'pink drink',
                id: 'id001007005'
              },
              {
                name:'mango dragonfruit refreshers beverage',
                id: 'id001007006'
              },
              {
                name:'mangotango lemonade',
                id: 'id001007007'
              },
              {
                name:'acai refresher',
                id: 'id001007008'
              },
              {
                name:'blueberry acai',
                id: 'id001007009'
              },
              {
                name:'strawberry acai starbucks refreshers beverage',
                id: 'id001007010'
              }
            ]
          },
          {
            groupName: 'juice',
            products:[
              {
                name:'organic fresh evolution',
                id: 'id001007011'
              },
              {
                name:'evolutin fresh organic defense up',
                id: 'id001007012'
              },
              {
                name:'banana melone yeah',
                id: 'id001007013'
              },
              {
                name:'evolution fresh organic super fruit',
                id: 'id001007014'
              },
              {
                name:'garbanzal fruit mix',
                id: 'id001007015'
              },
              {
                name:'cherry lips merry blue',
                id: 'id001007016'
              },
              {
                name:'lemonade',
                id: 'id001007017'
              },
              {
                name:'apple juice box',
                id: 'id001007018'
              }
            ]
          },
          {
            groupName: 'milk',
            products:[
              {
                name: 'chocolate milk',
                id: 'id001007019'
              },
              {
                name: 'organic lowfat milk box',
                id: 'id001007020'
              },
              {
                name: 'milk',
                id: 'id001007021'
              },
              {
                name: 'organic vanilla milk box',
                id: 'id001007022'
              }
            ]
          },
          {
            groupName: 'sparkling water',
            products:[
              {
                name: 'galvanina sparkling',
                id: 'id001007023'
              },
              {
                name: 'spindrift grapefruit sparkling water',
                id: 'id001007024'
              },
              {
                name: 'raspberry sparkling lime water',
                id: 'id001007025'
              },
              {
                name: 'galvanina lime water',
                id: 'id001007026'
              }
            ]
          },
          {
            groupName: 'water',
            products:[
              {
                name: 'dasani bottled water',
                id: 'id001007027'
              },
              {
                name: 'ethos bottled water',
                id: 'id001007028'
              },
              {
                name: 'hawai volcanic water',
                id: 'id001007029'
              },
              {
                name: 'water',
                id: 'id001007030'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'food',
    categoryId: 'id002',
    subCategories:[
      {
        subCategoryName: 'hot breakfast',
        subCategoryId: 'id002001',
        subCategoryProducts:[
          {
            groupName: 'breakfast sandwiches & wraps',
            products:[
              {
                name: 'impossible breakfast sandwich',
                id: 'id002001001'
              },
              {
                name: 'bacon gouda & egg sandwich',
                id: 'id002001002'
              },
              {
                name: 'double smoked bacon, cheddar & egg sandwich',
                id: 'id002001003'
              },
              {
                name: 'turkey bacon, cheddar & egg white sandwich',
                id: 'id002001004'
              },
              {
                name: 'sausage cheddar & egg sandwich',
                id: 'id002001005'
              },
              {
                name: 'roasted ham, swiss & egg sandwich',
                id: 'id002001006'
              },
              {
                name: 'spinach, feta & egg white wrap',
                id: 'id002001007'
              },
              {
                name: 'avocado spread',
                id: 'id002001008'
              }
            ]
          },
          {
            groupName: 'sous vide egg bites',
            products:[
              {
                name: 'kale & mushroom egg bites',
                id: 'id002001009'
              },
              {
                name: 'bacon & gruyere egg bites',
                id: 'id002001010'
              },
              {
                name: 'egg white & roasted red pepper egg bites',
                id: 'id002001011'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'bakery',
        subCategoryId: 'id002002',
        subCategoryProducts:[
          {
            groupName:'bagels',
            products:[
              {
                name: 'big fatty grassy bagel 1',
                id: 'id002002001'
              },
              {
                name: 'big fatty grassy bagel 2',
                id: 'id002002002'
              },
              {
                name: 'big fatty grassy bagel 3',
                id: 'id002002003'
              },
              {
                name: 'big fatty grassy bagel 4',
                id: 'id002002004'
              },
              {
                name: 'big fatty grassy bagel 5',
                id: 'id002002005'
              },
              {
                name: 'big fatty grassy bagel 6',
                id: 'id002002006'
              },
              {
                name: 'big fatty grassy bagel 7',
                id: 'id002002007'
              }
            ]
          },
          {
            groupName: 'cake pops',
            products:[
              {
                name: 'gorgeous cake pop 1',
                id: 'id002002008'
              },
              {
                name: 'gorgeous cake popant 2',
                id: 'id002002009'
              },
              {
                name: 'gorgeous cake pop 3',
                id: 'id002002010'
              },
              {
                name: 'gorgeous cake pop 4',
                id: 'id002002011'
              },
              {
                name: 'gorgeous cake pop 5',
                id: 'id002002012'
              }
            ]
          },
          {
            groupName: 'brownies',
            products:[
              {
                name: 'delicious big bronwie 1',
                id: 'id002002013'
              },
              {
                name: 'delicious big bronwie 2',
                id: 'id002002014'
              },
              {
                name: 'delicious big bronwie 3',
                id: 'id002002015'
              },
              {
                name: 'delicious big bronwie 4',
                id: 'id002002016'
              },
              {
                name: 'delicious big bronwie 5',
                id: 'id002002017'
              },
              {
                name: 'delicious big bronwie 6',
                id: 'id002002018'
              },
              {
                name: 'delicious big bronwie 7',
                id: 'id002002019'
              }
            ]
          },
          {
            groupName: 'croissants',
            products:[
              {
                name: 'croissant 1',
                id: 'id002002020'
              },
              {
                name: 'croissant 2',
                id: 'id002002021'
              },
              {
                name: 'croissant 3',
                id: 'id002002022'
              },
              {
                name: 'croissant 4',
                id: 'id002002023'
              },
              {
                name: 'croissant 5',
                id: 'id002002024'
              }
            ]
          },
          {
            groupName: 'muffins',
            products:[
              {
                name: 'muffin 1',
                id: 'id002002025'
              },
              {
                name: 'muffin 2',
                id: 'id002002026'
              },
              {
                name: 'muffin 3',
                id: 'id002002027'
              },
              {
                name: 'muffin 4',
                id: 'id002002028'
              },
              {
                name: 'muffin 5',
                id: 'id002002029'
              },
              {
                name: 'muffin 6',
                id: 'id002002030'
              },
              {
                name: 'muffin 7',
                id: 'id002002031'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'lunch',
        subCategoryId: 'id002003',
        subCategoryProducts:[
          {
            groupName: 'warm sandwiches',
            products:[
              {
                name: 'crispy grilled cheese',
                id: 'id002003001'
              },
              {
                name: 'grassy baguette',
                id: 'id002003002'
              },
              {
                name: 'sweet provolone',
                id: 'id002003003'
              },
              {
                name: 'chicken with rice',
                id: 'id002003004'
              },
              {
                name: 'turkey breast',
                id: 'id002003005'
              },
              {
                name: 'tomato and mozzarella',
                id: 'id002003006'
              },{
                name: 'avocado spread',
                id: 'id002003007'
              }
              ,{
                name: 'bacon ham brioche',
                id: 'id002003008'
              }
            ]
          },
          {
            groupName: 'protein boxes',
            products:[
              {
                name: 'eggs & gouda',
                id: 'id002003009'
              },
              {
                name: 'salmon fresh',
                id: 'id002003010'
              },
              {
                name: 'red tuna with garbanzos',
                id: 'id002003011'
              },
              {
                name: 'avocado chickpea yeah',
                id: 'id002003012'
              },
              {
                name: 'chorizo velvet',
                id: 'id002003013'
              },
              {
                name: 'mascarppone boxie mix',
                id: 'id002003014'
              },
              {
                name: 'cheddar fruity box',
                id: 'id002003015'
              },
              {
                name: 'hummus and pita protein',
                id: 'id002003016'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'snacks & sweets',
        subCategoryId: 'id002004',
        subCategoryProducts:[
          {
            groupName:'biscotti & cookies',
            products:[
              {
                name:'gingerbread biscotti',
                id: 'id002004001'
              },
              {
                name:'dipped biscotti',
                id: 'id002004002'
              },
              {
                name:'madalenas of allthe life',
                id: 'id002004003'
              },
              {
                name:'vanilla cookies',
                id: 'id002004004'
              },
              {
                name:'ripped waffels',
                id: 'id002004005'
              },
              {
                name:'dark chocolate but white',
                id: 'id002004006'
              }
            ]
          },
          {
            groupName:'chocolates',
            products:[
              {
                name:'salted mint peperoni',
                id: 'id002004007'
              },
              {
                name:'dark chocolate blue',
                id: 'id002004008'
              },
              {
                name:'salted almond',
                id: 'id002004009'
              },
              {
                name:'covered beans',
                id: 'id002004010'
              },
              {
                name:'white chocolate',
                id: 'id002004011'
              }
            ]
          },
          {
            groupName:'fruits & nuts',
            products:[
              {
                name:'banana',
                id: 'id002004012'
              },
              {
                name:'melones',
                id: 'id002004013'
              },
              {
                name:'tutti frutti',
                id: 'id002004014'
              },
              {
                name:'the warriors cream',
                id: 'id002004015'
              },
              {
                name:'potato oranged',
                id: 'id002004016'
              }
            ]
          },
          {
            groupName:'gum & mints',
            products:[
              {
                name:'spearmint gum',
                id: 'id002004017'
              }
            ]
          },
          {
            groupName:'porcorn',
            products:[
              {
                name:'potato chips',
                id: 'id002004018'
              },
              {
                name:'gourmet popcorn',
                id: 'id002004019'
              },
              {
                name:'white cheddar',
                id: 'id002004020'
              },
              {
                name:'ketle corn',
                id: 'id002004021'
              },
              {
                name:'sunflower oil',
                id: 'id002004022'
              },
              {
                name:'vinegar ketle potato',
                id: 'id002004023'
              },
              {
                name:'mr potato',
                id: 'id002004024'
              },
              {
                name:'simple potato chips',
                id: 'id002004025'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'oatmeal & yogurt',
        subCategoryId: 'id002005',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'rolled steel cut oatmeal with blueberries',
                id: 'id002005001'
              },
              {
                name: 'rolled steel cut oatmeal',
                id: 'id002005002'
              },
              {
                name: 'berry trio parfait',
                id: 'id002005003'
              },
              {
                name: 'strawberry overnight grains',
                id: 'id002005004'
              },
              {
                name: 'yogurt 0% full of fat',
                id: 'id002005005'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'at home coffee',
    categoryId: 'id003',
    subCategories:[
      {
        subCategoryName: 'whole bean',
        subCategoryId: 'id003001',
        subCategoryProducts:[
          {
            groupName: 'starbucks reserve',
            products:[
              {
                name: 'sun-dried ethipia farm reserve',
                id: 'id003001001'
              },
              {
                name: 'jamaica blue montain',
                id: 'id003001002'
              },
              {
                name: 'vietnam da lat starbucks reserve',
                id: 'id003001003'
              },
              {
                name: 'costa rica naranjo reserve',
                id: 'id003001004'
              },
              {
                name: 'hawai reserve',
                id: 'id003001005'
              }
            ]
          },
          {
            groupName: 'blonde roast',
            products:[
              {
                name: 'veranda blend',
                id: 'id003001006'
              },
              {
                name: 'blonde expresso roast',
                id: 'id003001007'
              }
            ]
          },
          {
            groupName: 'medium roast',
            products:[
              {
                name: 'starbucks tribute blend',
                id: 'id003001008'
              },
              {
                name: 'holiday blend',
                id: 'id003001009'
              },
              {
                name: 'siren blend',
                id: 'id003001010'
              },
              {
                name: 'guatemala antigua',
                id: 'id003001011'
              },
              {
                name: 'pike place roast',
                id: 'id003001012'
              },
              {
                name: 'organic yukon blend',
                id: 'id003001013'
              }

            ]
          },
          {
            groupName: 'dark roast',
            products:[
              {
                name: 'transilvanian roast dark',
                id: 'id003001014'
              },
              {
                name: 'sta claus is devil roast',
                id: 'id003001015'
              },
              {
                name: 'lobo is here roast',
                id: 'id003001016'
              },
              {
                name: 'white pink blue dark roast',
                id: 'id003001017'
              },
              {
                name: 'jellybelly sugar blend',
                id: 'id003001018'
              },
              {
                name: 'smiley single mixt coffee',
                id: 'id003001019'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'VIA instant',
        subCategoryId: 'id003002',
        subCategoryProducts:[
          {
            groupName: 'seasonal',
            products: [
              {
                name: 'via instant christmas blend',
                id: 'id003002001'
              },
              {
                name: 'via instant peppermint',
                id: 'id003002002'
              },
              {
                name: 'via refresheres cool lime',
                id: 'id003002003'
              },
              {
                name: 'via very berry hibiscus',
                id: 'id003002004'
              }
            ]
          },
          {
            groupName: 'flavored',
            products: [
              {
                name: 'via sweetened iced coffee',
                id: 'id003002005'
              }
            ]
          },
          {
            groupName: 'bloonde roast',
            products: [
              {
                name: 'via beranda blend',
                id: 'id003002006'
              }
            ]
          },
          {
            groupName: 'medium roast',
            products: [
              {
                name: 'via colombia instant roast',
                id: 'id003002007'
              },
              {
                name: 'via instant pike place roast',
                id: 'id003002008'
              }
            ]
          },
          {
            groupName: 'dark roast',
            products: [
              {
                name: 'via french roast',
                id: 'id003002009'
              },
              {
                name: 'via italian roast',
                id: 'id003002010'
              },
              {
                name: 'via decaf roast',
                id: 'id003002011'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'merchandise',
    categoryId: 'id004',
    subCategories:[
      {
        subCategoryName: 'cold cups',
        subCategoryId: 'id004001',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'siren logo plastic cold cup',
                id: 'id004001001'
              },
              {
                name: 'reusable plastic cold cup straw pack',
                id: 'id004001002'
              },
              {
                name: 'cold to go cup',
                id: 'id004001003'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'tumblers',
        subCategoryId: 'id004002',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'siren logo ceramic tumbler',
                id: 'id004002001'
              },
              {
                name: 'ice stainless steel tumbler',
                id: 'id004002002'
              },
              {
                name: 'cartón piedra tumbler',
                id: 'id004002003'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'other',
        subCategoryId: 'id004003',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'starbucks bag',
                id: 'id004003001'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: 'gift cards',
    categoryId: 'id005',
    subCategories:[
      {
        subCategoryName: 'happy birthday',
        subCategoryId: 'id005001',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'starbucks card-birthday',
                id: 'id005001001'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'thank you',
        subCategoryId: 'id005002',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'starbucks card-thank you',
                id: 'id005002001'
              }
            ]
          }
        ]
      },
      {
        subCategoryName: 'traditional',
        subCategoryId: 'id005003',
        subCategoryProducts:[
          {
            groupName: '',
            products:[
              {
                name: 'starbucks card-traditional',
                id: 'id005003001'
              }
            ]
          }
        ]
      }   
    ]
    
  }
 
];

