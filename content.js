'use strict';

let products = {
  carne: {
    name: 'Empanada de Carne',
    description: 'A tradicional empanada de carne moída, típico argentina. Carne moída, cebola, bacon, orégano, azeitonas, uva passas e sal.',
    tpl: 'empanada-de-carne',
    price: '4,00',
    url: '/empanada-de-carne.html'
  },
  carnePimenta: {
    name: 'Empanada de Carne com Pimenta',
    description: 'Todo o sabor da tradicional empanada típico argentina com pimenta do reino, páprica doce, cumim, salsinha e sal.',
    tpl: 'empanada-de-carne-com-pimenta',
    price: '4,00',
    url: '/empanada-de-carne-com-pimenta.html'
  },
  frangoComCatupiry: {
    name: 'Empanada de Frango com Catupiry',
    description: 'Todo o sabor da tradicional empanada típico argentina no recheio com frango desfiado e requeijão da marca Catupiry.',
    tpl: 'empanada-de-frango-com-catupiry',
    price: '4,00',
    url: '/empanada-de-frango-com-catupiry.html'
  },
  calabresa: {
    name: 'Empanada de Calabresa',
    description: 'Empanada de Calabresa, azeitonas, cebola, páprica doce, pimenta calabresa e erva doce.',
    tpl: 'empanada-de-calabresa',
    price: '4,00',
    url: '/empanada-de-calabresa.html'
  },
  palmito: {
    name: 'Empanada de Palmito',
    description: 'Empanada de palmito selecionado e molho bechamel.',
    tpl: 'empanada-de-palmito',
    price: '4,00',
    url: '/empanada-de-palmito.html'
  },
  bacalhau: {
    name: 'Empanada de Bacalhau',
    description: 'Empanada de bacalhau desfiado e purê de batatas.',
    tpl: 'empanada-de-bacalhau',
    price: '6,00',
    url: '/empanada-de-bacalhau.html'
  }
};

exports.products = products;

let pages = {
  historia: {
    name: 'História das Empanadas Argentinas',
    description: 'Saiba a história',
    tpl: 'historia',
    url: '/historia.html'
  },
  cardapio: {
    name: 'Cardápio dos sabores',
    description: 'Veja o nosso cardápio de empanadas argentinas. Encomende o sabor de empanada que você mais gosta.',
    tpl: 'cardapio',
    url: '/cardapio.html'
  }
};

exports.pages = pages;
