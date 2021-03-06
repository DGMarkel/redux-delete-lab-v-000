export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {

    case 'ADD_BAND':
      const band = {
        id: Math.random()*1000000000000000000,
        name: action.name
      }
      console.log(action)
      return { bands: state.bands.concat(band) }

    case 'DELETE_BAND':
      console.log(action)
      return { bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
