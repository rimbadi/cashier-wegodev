export const state = () => ({
    categoryId:0,
    categories: [
        { id: false, title: 'all' },
        { id: 1, title: 'smartphone' },
        { id: 2, title: 'camera' },
        { id: 3, title: 'tv' },
      ],
    products: [
        {
          id: 1,
          title: 'Asus Zenfone',
          thumbnail: 'asus-zenfone.png',
          price: 20000000,
          categoryId: 1,
        },
        {
          id: 2,
          title: 'Canon EOS 700d',
          thumbnail: 'canon-eos-700d.png',
          price: 21000000,
          categoryId: 2,
        },
        {
          id: 3,
          title: 'Canon EOS 750d',
          thumbnail: 'canon-eos-750d.png',
          price: 22000000,
          categoryId: 2,
        },
        {
          id: 4,
          title: 'iphone 6',
          thumbnail: 'iphone-6-silver.png',
          price: 23000000,
          categoryId: 1,
        },
        {
          id: 5,
          title: 'lenovo a7000',
          thumbnail: 'Lenovo-A7000.png',
          price: 24000000,
          categoryId: 1,
        },
        {
          id: 6,
          title: 'lg 32 led tv',
          thumbnail: 'lg-32-led-tv-32LF550A.png',
          price: 25000000,
          categoryId: 3,
        },
        {
          id: 7,
          title: 'lg led tv 32',
          thumbnail: 'lg-led-tv32-32LF520A.png',
          price: 26000000,
          categoryId: 3,
        },
        {
          id: 8,
          title: 'mi 4i',
          thumbnail: 'mi-4i.png',
          price: 27000000,
          categoryId: 1,
        },
        {
          id: 9,
          title: 'nikon d3200',
          thumbnail: 'nikon-d3200.png',
          price: 28000000,
          categoryId: 2,
        },
        {
          id: 10,
          title: 'nikon d5200',
          thumbnail: 'nikon-d5200.png',
          price: 29000000,
          categoryId: 2,
        },
        {
          id: 11,
          title: 'samsung galaxy a3',
          thumbnail: 'samsung-galaxy-A3.png',
          price: 20100000,
          categoryId: 1,
        },
        {
          id: 12,
          title: 'samsung galaxy a8',
          thumbnail: 'samsung-galaxy-A8.png',
          price: 20110000,
          categoryId: 1,
        },
        {
          id: 13,
          title: 'samsung galaxy grand prime',
          thumbnail: 'samsung-galaxy-grand-prime.png',
          price: 20120000,
          categoryId: 1,
        },
        {
          id: 14,
          title: 'samsung galaxy note 3',
          thumbnail: 'samsung-galaxy-note-3.png',
          price: 20130000,
          categoryId: 1,
        },
        {
          id: 15,
          title: 'sharp 32 led tv',
          thumbnail: 'sharp-32-led-32LE265i.png',
          price: 20140000,
          categoryId: 3,
        },
      ],
})

export const mutations = {
    updateCategoryId(state, categoryId){
        state.categoryId = categoryId
    }
}
export const actions = {
    updateCategoryId({commit}, categoryId){
        commit('updateCategoryId', categoryId)
    }
}