
import React, { Component } from 'react';
import { toast } from "react-toastify";
import * as moment from 'jalali-moment';

import ExperienceBox from "./experienceBox";
import SpecialItemBox from "./specialItemBox";
class Experience extends Component {
  state = { ExperienceBox: {}, SpecialItemBox: {} }
  handleFormChangeData = ({ SpecialItemBox, ExperienceBox }) => {
    if (SpecialItemBox) this.setState({ SpecialItemBox })
    if (ExperienceBox) this.setState({ ExperienceBox })
  }
  handleSaveForm = () => {

    debugger
    const { SpecialItemBox, ExperienceBox } = this.state
    let todayJalali = moment().locale('fa').format('YYYY/MM/DD hh:mm:ss  ');

    let formdata = JSON.parse(localStorage.getItem("formdata"));
    formdata =formdata ? formdata : []
    const data = {
      SpecialItemBox,
      ExperienceBox,
      dateTime:todayJalali
    }
    formdata.push(data)
    const dataText = JSON.stringify(formdata)
    localStorage.setItem("formdata", dataText);

    toast.success("ثبت موفق بود")
  }
  render() {
    return (<div>
      <ExperienceBox name="ExperienceBox" handleFormChangeData={this.handleFormChangeData} />
      <SpecialItemBox name="SpecialItemBox" handleFormChangeData={this.handleFormChangeData} handleSaveForm={this.handleSaveForm} />
    </div>);
  }
}

export default Experience;

