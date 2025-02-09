import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';
export default class ChartDemo extends LightningElement {
  pieChartLabels = []; 
  pieChartData = [];
  
  @wire(getOpportunities)
  opportunityHandler({data, error}){
    if(data){
      console.log(data);
      const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}), {})
      console.log(JSON.stringify(result));
      if(Object.keys(result).length){
        this.pieChartLabels = Object.keys(result);
        this.pieChartData = Object.values(result);
      }
      console.log(JSON.stringify(this.pieChartLabels));
      console.log(JSON.stringify(this.pieChartData));
    }
    if(error){
      console.error(error);
    }
  }
}