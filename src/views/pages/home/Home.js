let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Início</div>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;