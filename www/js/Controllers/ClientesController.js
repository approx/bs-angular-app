app.controller('ClientesController',function($scope,$filter){
  $scope.reachLeft=true;
  $scope.reachRight=false;

  $scope.type='';

  $scope.numberItensPerPage=9;
  $scope.atualPage=1;
  $scope.showingClients=[];
  $scope.fullclientes = [
  {
    'cliente' : 'Queiroz Galvão',
    'imgUrl'  : 'img/queiroz-galvao.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Telemont - engenharia de telecomunicações S.A.',
    'imgUrl'  : 'img/telemont.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Galvão',
    'imgUrl'  : 'img/galvao.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'CONSTRUCAP',
    'imgUrl'  : 'img/contrucap.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Construtora Barbosa Mello',
    'imgUrl'  : 'img/construtora-bm.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'SGS',
    'imgUrl'  : 'img/sgs.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Genpro Engenharia',
    'imgUrl'  : 'img/genpro.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Themag Engenharia',
    'imgUrl'  : 'img/themag.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Queiroz Galvão Óleo e Gás',
    'imgUrl'  : 'img/quiroz-galvao-og.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Vital Engenharia Ambiental',
    'imgUrl'  : 'img/vital.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Eco Urbis',
    'imgUrl'  : 'img/ecourbis.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Queiroz Galvão Exploração e Produção',
    'imgUrl'  : 'img/quiroz-galvao-ep.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'GAS',
    'imgUrl'  : 'img/gas.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Grupo Impacto',
    'imgUrl'  : 'img/grupo-impacto.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Grupo Master Security',
    'imgUrl'  : 'img/grupo-ms.png',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Iron Segurança',
    'imgUrl'  : 'img/iron.jpg',
    'tipo'    : '1'
  },
  {
    'cliente' :  'Goodyear',
    'imgUrl'  : 'img/goodyear.png',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Cemil',
    'imgUrl'  : 'img/cemil.jpg',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Bartofil Distribuidora',
    'imgUrl'  : 'img/bartofil.gif',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Tambasa Atacadista',
    'imgUrl'  : 'img/tambasa.png',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Patrus Transportes Urgentes',
    'imgUrl'  : 'img/patrus.png',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Loja Elétrica Ltda.',
    'imgUrl'  : 'img/lojaEletrica.png',
    'tipo'    : '2'
  },
  {
    'cliente' :  'Ademig',
    'imgUrl'  : 'img/ademig.jpg',
    'tipo'    : '3'
  },
  {
    'cliente' :  'SileMG Sindicato da Indústria de Laticínios do Estado de Minas Gerais',
    'imgUrl'  : 'img/silemg.jpg',
    'tipo'    : '3'
  },
  {
    'cliente' :  'Sinaenco Sindicato da Arquitetura e da Engenharia',
    'imgUrl'  : 'img/sinaenco.jpg',
    'tipo'    : '3'
  },
  {
    'cliente' :  'Sindaçúcar',
    'imgUrl'  : 'img/sindaçucar.jpg',
    'tipo'    : '3'
  },
  {
    'cliente' :  'Sindifer Sindicato da Industria do Ferro do Estado de Minas Gerais',
    'imgUrl'  : 'img/sindifer.jpg',
    'tipo'    : '3'
  }
];



$scope.maxPages=Math.ceil($scope.fullclientes.length/$scope.numberItensPerPage);

$scope.changeType = function(type){
  $scope.type=type;
  $scope.Refresh();
}

$scope.Refresh = function(){
  $scope.fullclientes=$filter('orderBy')($scope.fullclientes,'cliente',false);
  var indexItens=0;
  var clients =[];
  var clientsFiltered=[];

  for (var i = 0; i < $scope.fullclientes.length; i++) {
    if($scope.type==$scope.fullclientes[i].tipo||$scope.type=='')
    {
      clientsFiltered.push($scope.fullclientes[i]);
    }
  }


  for (var i = (($scope.atualPage*$scope.numberItensPerPage)-$scope.numberItensPerPage); i < clientsFiltered.length; i++) {
    if(indexItens<$scope.numberItensPerPage)
    {
      clients.push(clientsFiltered[i]);
      indexItens++;
    }
    else {
      break;
    }
  }
  $scope.showingClients=clients;
  $scope.maxPages=Math.ceil(clientsFiltered.length/$scope.numberItensPerPage);

  if($scope.atualPage>=$scope.maxPages)
  {
    $scope.reachRight=true;
  }
  else {
    $scope.reachRight=false;
  }

  if($scope.atualPage<=1)
  {
    $scope.reachLeft=true;
  }
  else {
    $scope.reachLeft=false;
  }
  console.log(  $scope.showingClients);
}

$scope.nextPage = function(){
  if($scope.atualPage<$scope.maxPages){
    $scope.atualPage++;
    $scope.Refresh();
  }
}

$scope.backPage = function(){
  if($scope.atualPage>1){
    $scope.atualPage--;
    $scope.Refresh();
  }
}

$scope.Refresh();

});
