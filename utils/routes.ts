const routes = {
  home: {
    name: 'Início',
    path: '/',
    showMenu: true,
  },
  livros: {
    name: 'Livros',
    path: '/livros',
    showMenu: true,
  },
  autores: {
    name: 'Autores',
    path: '/autores',
    showMenu: true,
  },
  autoresBuscar: {
    name: 'Buscar autores',
    path: '/autores/buscar',
    showMenu: false,
  },
}

export default routes
