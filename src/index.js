
exports.mapcore_pre_packaged_results_module = function()  {


  this.get_results = () => {
    let results = [
    /*
      {
        "BlackfynnID": "",
        "Description": "",
        "Example Image": "",
        "Dataset Title": "",
      },
    */
      {
        "BlackfynnID": "",
        "Dataset Title": "Human Flatmap",
        "Description": "This dataset holds a description of a flatmap representation of the major human organs.",
        "Example Image": "", "Species": "NCBITaxon:9606"
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Rat Flatmap",
        "Description": "This dataset holds a description of a flatmap representation of the major rat organs.",
        "Example Image": "", "Species": "NCBITaxon:XXXX"
      },
    ]

    return results
  }

  const initialise = () => {
    console.log("Initialise pre-packaged results.");
  }

  initialise();
}