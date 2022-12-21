const net= new brain.NeuralNetwork()

// net.train([
//     {
//         input:[0,0],
//         output:[0]
//     },
//     {
//         input:[1,0],
//         output:[1]
//     },
//     {
//         input:[0,1],
//         output:[1]
//     },
//     {
//         input:[1,1],
//         output:[1]
//     },
// ])

const data=
   [
{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.6458603406693135,"g":0.15469398962673475,"b":0.8549759798095935},"output":[1]},{"input":{"r":0.36887498347524494,"g":0.3814496868723043,"b":0.8068272998864114},"output":[1]},{"input":{"r":0.4155763114285236,"g":0.06367977924319779,"b":0.24039772508863755},"output":[1]},{"input":{"r":0.7314648137084143,"g":0.020309152069415193,"b":0.17148251346523735},"output":[1]},{"input":{"r":0.6212482088571118,"g":0.43592594352382474,"b":0.9585825232627097},"output":[0]},{"input":{"r":0.04757244457236576,"g":0.9147249550497465,"b":0.18808374839305197},"output":[0]},{"input":{"r":0.6009527760712388,"g":0.39898703240416755,"b":0.47305447184487504},"output":[1]},{"input":{"r":0.6846752988512068,"g":0.6267823531095296,"b":0.6941618614487144},"output":[0]},{"input":{"r":0.03804339118760969,"g":0.019005863382376642,"b":0.3116325450383177},"output":[1]},{"input":{"r":0.7980922227626959,"g":0.4126390416262762,"b":0.6562937562994138},"output":[0]},{"input":{"r":0.6547998664918742,"g":0.6885373293804684,"b":0.2888646563807158},"output":[0]},{"input":{"r":0.5499491046538898,"g":0.3543624428810106,"b":0.8101906893258131},"output":[0]},{"input":{"r":0.33899054075215185,"g":0.049002478444182485,"b":0.5930375818026765},"output":[0]},{"input":{"r":0.9338006322939365,"g":0.13245384078711853,"b":0.6003715206541467},"output":[0]},{"input":{"r":0.3609398474206802,"g":0.7036411100831363,"b":0.6520544656853084},"output":[0]},{"input":{"r":0.43004339787060375,"g":0.5666039408948271,"b":0.5305321779072547},"output":[0]},{"input":{"r":0.7488624646384234,"g":0.7202500701093066,"b":0.6548385175196985},"output":[0]},{"input":{"r":0.16377868790796324,"g":0.3038584904424333,"b":0.32690599168725143},"output":[1]},{"input":{"r":0.7324999151690401,"g":0.6363690248042637,"b":0.9063866070445572},"output":[0]},{"input":{"r":0.2959635263060123,"g":0.15239876732719249,"b":0.7567363593235557},"output":[1]},{"input":{"r":0.7181070230131865,"g":0.4276352054823662,"b":0.6553786384953719},"output":[0]},{"input":{"r":0.948752906345318,"g":0.08302667755659332,"b":0.6779200184030123},"output":[1]}
]

   

net.train(data)

const colorEl= document.getElementById('color')
const guessEl= document.getElementById('guess')
const whiteButton= document.getElementById('white-button')
const blackButton= document.getElementById('black-button')
const guessButton= document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', ()=>{
    chooseColor(1)
})
blackButton.addEventListener('click', ()=>{
    chooseColor(0)
})
guessButton.addEventListener('click', print)

function chooseColor(value){
   data.push({
       input: color,
       output: [value]
   })
    setRandomColor()
}

function print(){
    console.log(JSON.stringify(data))
}

function setRandomColor(){
    color={
        r:Math.random(),
        g:Math.random(),
        b:Math.random(),
    }
    const guess= net.run(color)[0]
    guessEl.style.color= guess > .5 ? '#FFF' : '#000'
    colorEl.style.backgroundColor=
    `rgba(${color.r*255}, ${color.g * 255},
        ${color.b*255})`
}