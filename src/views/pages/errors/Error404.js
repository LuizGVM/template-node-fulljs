let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}
let error = `
<div class="error-default">
    <h1>Erro 404!</h1>
    <h2>Caro padawan, esse conteúdo não existe. Volte a página anterior</h2>
</div>
`

export default Error404;