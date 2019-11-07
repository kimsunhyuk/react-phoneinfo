import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 2;
  state = {
    keyword: "",
    information: [
      {
        id: 0,
        name: "Amy",
        phone: "010-1111-1111"
      },
      {
        id: 1,
        name: "Brian",
        phone: "010-2222-2222"
      }
    ]
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info =>
        id === info.id ? { ...info, ...data } : info
      )
    });
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input
            placeholder="search"
            onChange={this.handleChange}
            value={keyword}
          ></input>
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
      </div>
    );
  }
}

export default App;
