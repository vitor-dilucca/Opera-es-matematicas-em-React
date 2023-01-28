import './App.css'

function Math() {
  const name = 'Matheus'
  const newName = name.toUpperCase()

  function sum(a,b){
    return a+b
  }
  function resta(a,b){
    return a-b
  }
  function mult(a,b){
    return a*b
  }
  function div(a,b){
    return a/b
  }

  function areaQua(b,h){
    return b*h
  }
  function areaTri(b,h){
    return (b*h)/2
  }
  function areaCir(r){
    return 3.14*r*r
  }
  function areaTrap(B,b,h){
    return (B+b)*h/2
  }
  function areaLos(D,d){
    return D*d/2
  }
  function peri(a,b,c,d){
    
    if(b==3.14){
      return 2*b*a
    }
    
    if((b && c && d) == undefined){
      return a*4
    }
    else if((c && d) == undefined){
      return a*2+b*2
    }
    else if( d == undefined){
      return a+b+c
    }
    else if(typeof d=='number'){
      return a+b+c+d
    }
    else{
      return 'ERRO '
    }
  }

  return (
    <div className="App">
      <h1>Oi {name}</h1>
      <p>Alterando o jsx com o {newName}</p>
      <p>Soma: {2+2}</p>
      <p>Soma: {sum(6,3)}</p>
      
      <p>Resta: 5 - 3 = {5-3}</p>
      <p>Resta com função: {resta(6,3)}</p>

      <p>Multiplica: 5 x 3 = {5*3}</p>
      <p>Multiplica com funçao: {mult(6,3)}</p>

      <p>Divisão: 5/3 = {5/3}</p>
      <p>Divisão com função: 5/3 = {div(6,3)}</p>

      <p>
        funçao que calcule a área de um quadrado de base 5 e altura 8:
        {areaQua(5,8)}
      </p>
      
      <h2>
        1. Calcule as áreas das figuras abaixo:
      </h2>

      <p>a) Triângulo de base 5 cm e altura de 12 cm.</p>
      <p>Area = b*h/2</p>
      <p>R= {areaTri(5,12)}cm^2</p>
      
      <p>b) Retângulo de base 15 cm e altura de 10 cm</p>
      <p>Area = b*h </p>
      <p>R= {areaQua(15,10)}cm^2</p>
      
      <p>d) Círculo com diâmetro de 14 cm.</p>
      <p>Area = pi*r^2</p>
      <p>R= {areaCir(7)}cm^2</p>
      
      <p>e) Trapézio com base menor de 5 cm, base maior de 20 cm e altura de 12 cm.</p>
      <p>Area = (B+b)*h/2</p>
      <p>R= {areaTrap(20,5,12)}cm^2</p>
      
      <p>f) Losango com diagonal menor de 9 cm e diagonal maior de 16 cm.</p>
      <p>Area = D*d/2</p>
      <p>R= {areaLos(16,9)}cm^2</p>

      <h2>
        2. Calcule os perímetros das figuras abaixo:
      </h2>

      <p>a) Triângulo isósceles com dois lados de 5 cm e outro de 3 cm.</p>
      <p>R= {peri(5,5,3,0)}cm^2</p>
      
      <p>b) Retângulo de base 30 cm e altura de 18 cm.</p>
      <p>R= {peri(30,30,18,18)}cm^2</p>
      
      <p>c) Quadrado de lado 50 cm.</p>
      <p>R= {peri(50)}cm^2</p>
      
      <p>d) Círculo com raio de 14 cm</p>
      <p>R= {peri(14,0,0,'cir')}cm^2</p>
      
      <p>e) Trapézio de base maior 27 cm, base menor de 13 cm e lados de 19 cm.</p>
      <p>R= {peri(27,13,19,19)}cm^2</p>
      
      <p>f) Losango com lados de 11 cm.</p>
      <p>R= {peri(11,11,11,11)}cm^2</p>

      <h3>
      Questão 1 Calcule o PERIMETRO das figuras planas a seguir de acordo com as medidas dadas em cada alternativa.
      </h3>

      <p>a) Quadrado com lado de 20 cm.</p>
      <p>R= {peri(20)}cm^2</p>
      
      <p>b) Triângulo com dois lados de 6 cm e um lado com 12 cm.</p>
      <p>R= {peri(6,6,12)}cm^2</p>
      
      <p>c) Retângulo com 20 cm de base e 10 cm de altura</p>
      <p>R= {peri(20,10,20,10)}cm^2</p>
      
      <p>d) Losango com 8 cm de lado</p>
      <p>R= {peri(8)}cm^2</p>
      
      <p>e) Trapézio com base maior de 8 cm, base menor de 4 cm e lados de 6 cm.</p>
      <p>R= {peri(8,4,6,6)}cm^2</p>
      
      <p>f) Círculo com raio de 5 cm</p>
      <p>R= {peri(5,3.14).toFixed(2)}cm^2</p>

      
      
    </div>
  )
}

function Aula3() {
  const name = 'Matheus'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'
  
  return(
    <div className='App'>
      <h2>Alterando o JSX com {name}</h2>
      <img src={url} alt='Minha iamgem'></img>
    </div>
  )
}

function Aula4() {
  const name = 'Matheus'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'
  
  return(
    <div className='App'>
      <h2>Alterando Aula 4 componentes com {name}</h2>
      <img src={url} alt='Minha iamgem'></img>
    </div>
  )

}

export default Aula4
