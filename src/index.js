
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
        "Example Image": "", "Species": "NCBITaxon:10114"
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Mapping Cardiac Electromechanics in the Pig",
        "Description": "Pig heart electromechanical data from the Shivkumar/Ardell group is displayed on a 3D pig heart scaffold. The deforming geometry of the pig heart is fitted through the cardiac cycle with the pig heart scaffold. Electrophysiological measurements from two 64-electrode patches, one on the left ventricle (LV) and one on the right ventricle (RV), are fitted as time-varying fields via scaffold parameters and shown on the LV and RV epicardial surfaces, respectively, of the beating heart model.",
        "Example Image": "",
        "Scaffold": {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/use_case1/fitted_heart_metadata.json', 'species': 'Porcine', 'organ': 'heart', 'annotation': 'UBERON:0000948'}
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Cell Body Segmentation and Electrophysiology Data: Stellate Ganglion",
        "Description": "Mouse stellate ganglion neuronal cell shape data from the Shivkumar/Tompkins group are displayed in a 3D stellate scaffold. 15 neurons, including their cell bodies, axons and dendrites, are displayed on five cross-sections of the stellate with the high resolution image displayed as a texture map. Electrophysiological data from these cells can be visualized by clicking on the cell. Note that the scaffold in this example is a geometrically simple shape designed to register the images in the appropriate anatomical location. The shape of the scaffold will be improved once more data are available to define the stellate boundaries.",
        "Example Image": "",
        "Scaffold": {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/stellate/stellate_metadata.json', 'species': 'Mouse', 'organ': 'stellate', 'annotation': 'UBERON:0002440'}
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Mapping the Mouse Heart Neurites from Image to Scaffold",
        "Description": "Mouse heart immunohistochemical mapping of neural pathways in cleared heart (sham heart 4) stained with PGP9.5 (glycoprotein surface axonal antibody labelling) from the Shivkumar/Pradeep group is displayed in a 3D mouse heart scaffold that has been fitted to the segmented heart surface data from Sham Heart 44, which provides a more extensive geometric dataset.",
        "Example Image": "",
        "Scaffold": {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/use_case3/mouse_heart_metadata.json', 'species': 'Mouse', 'organ': 'heart', 'annotation': 'UBERON:0002440'}
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Mapping Cellular Gene Expression in the Rat Heart from Image to Scaffold",
        "Description": "Rat heart geometric 3Scan (www.3scan.com) data for both ventricles and both atria from the Schwaber/Vadigepalli/Cheng group has been fitted with a 3D rat heart scaffold. The locations of a cluster of 151 ICN cell samples that have been lifted for RNA-Seq analysis (molecular cell body transcript data) from a region of the left atrium, from a different animal, are indicated on the 3D scaffold.",
        'Example Image': 'https://sparc.biolucida.net:443/image?c=MzI2LWNvbC0zMi0wLTAtMS0w',
        'Scaffold': {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/use_case4/rat_heart_metadata.json', 'species': 'rat', 'organ': 'heart', 'annotation': 'UBERON:0000948'},
        'DataViewer': {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/csv-data/use-case-4/RNA_Seq.csv', 'species': 'Rattus norvegicus|NCBITaxon:10116', 'organ': 'heart', 'annotation': 'UBERON:0000948'},
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Mapping Gene Expression in the Mouse Lungs from Images to Scaffold",
        "Description": "A 3D scaffold of the mouse thoracic cavity created using segmentation of longitudinal microCT scans from the SIMBA VIA (Vision and Image Analysis) public database is visualized in the webGL window. The trachea and main bronchi are also shown as rings of segmented points. Confocal stained images from Taylor-Clark group for mouse lungs are embedded into the scaffold. The confocal images were obtained from the right middle lobe (RML).",
        'Scaffold': {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/lungs/lungs_metadata.json', 'species': 'Mouse', 'organ': 'lung', 'annotation': 'UBERON:0002048'},
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "3D Mapping and Visualization of 2D Experimental Data Stomach Afferents and Efferents",
        "Description": "A statistically representative and anatomically-based 3D scaffold of the rat stomach was created to map 230 nerve ending pathways traced from 68 2D rat stomach whole mounts. Micro-CT image data of 11 animals with an average volume of 9.9cm3 were used to construct this 3D scaffold. Imaging and subsequent data segmentation was performed at the Powley laboratory in Purdue University using MBF bioscience software Neurolucida.",
        "Example Image": "https://sparc.biolucida.net/image?c=MTY1LWNvbC0zMi0wLTAtMi0w",
        'Scaffold': {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/stomach/stomach_metadata.json', 'species': 'Rat', 'organ': 'stomach', 'annotation': 'UBERON:0000945'},
      },
      {
        "BlackfynnID": "",
        "Dataset Title": "Mapping Image Data in Mouse Colon",
        "Description": "A 3D scaffold fitted to the structural data of mouse colon is visualized in the webGL window. Apart from its 3D configuration, the scaffold is displayed as a flat preparation which represents the state where a colon is stretched out, cut open and laid flat on a surface for imaging purposes. Segmented image data of enteric neurons and nerve fibers (Tache group) and vasculature (Howard group) of mouse tissue samples are mapped onto the flat scaffold based on the locations where the tissue samples were obtained from.",
        "Example Image": "",
        'Scaffold': {'uri': 'https://mapcore-bucket1.s3-us-west-2.amazonaws.com/ISAN/scaffold/colon/colon_metadata.json', 'species': 'Mouse', 'organ': 'colon', 'annotation': 'UBERON:0001155'},
      },
    ];

    return results
  };

  this.get_flatmap_results = () => {
    let results = get_results()
    return [results[0], results[1]]
  };

  const initialise = () => {
  };

  initialise();
};
