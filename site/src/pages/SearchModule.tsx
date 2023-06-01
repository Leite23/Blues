import { Component, ChangeEvent } from 'react';

/*Images of drinks*/

import martinez from '../assets/drinks/martinez.jpg'
import pinacolada from '../assets/drinks/pinacolada.jpg'
import sexBeach from '../assets/drinks/sexBeach.jpg'
import tequilaSunrise from '../assets/drinks/tequilaSunrise.jpg'
import whiskeySour from '../assets/drinks/whiskeySour.jpg'
import { BloodyMaryList, NegroniList, ZombieList } from '../components/ListSeach';
import { BloodyMary } from './drinks/bloodymary/BloodyMary';

interface propsSearchModule {
  keyword: string;
  actuallyDiv: JSX.Element | null;
}

class SearchModule extends Component<{}, propsSearchModule> {
  constructor(props: {}) {
    super(props);
    this.state = {
      keyword: '',
      actuallyDiv: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ keyword: event.target.value });
  };

  viewDiv = (): void => {
    const keyword = this.state.keyword.toLowerCase();
    let searchDiv: JSX.Element;
    if (keyword === 'zombie') {
      searchDiv = 
      <section className="container-fluid mt-0 p-5 mb-0">
        <ZombieList/>
      </section>;
    } else if (keyword === 'bloody mary' || keyword === 'bloodymary') {
      searchDiv = 
      <section className="container-fluid mt-0 p-5 mb-0">
        <BloodyMaryList/>
      </section>;
    } else if (keyword === 'negroni') {
      searchDiv = 
      <section className="container-fluid m-5 mt-0 p-5 mb-0">
        <NegroniList/>
      </section>;
    } 
    else {
      searchDiv = <p className='title text-danger'>drink inexistente</p>;
    }
    this.setState({ actuallyDiv: searchDiv });
  };

  render() {
    return (
      <div>
        <form className="form-floating">
          <input className='form-control' id='drink' type="text" onChange={this.handleChange} />
        </form>
        <button className='btn btn-secondary d-block my-5' onClick={this.viewDiv}>Procurar Drink</button>
        {this.state.actuallyDiv}
      </div>
    );
  }
}

export default SearchModule;