const userDefinedAuthorizedTags = {
	"group:review": {
	  "description": "survey or review paper framing the field"
	},
	"group:direct-mri": {
	  "description": "papers that directly enhance or generate MRI for diagnosis"
	},
	"group:missing-modality": {
	  "description": "papers that reconstruct missing modalities such as PET from MRI"
	},
  
	"task:classification": {
	  "description": "Alzheimer's disease diagnostic classification"
	},
	"task:enhancement": {
	  "description": "image enhancement for downstream diagnosis"
	},
	"task:superresolution": {
	  "description": "MRI super-resolution"
	},
	"task:pretraining": {
	  "description": "synthetic-data-driven pretraining before downstream diagnosis"
	},
	"task:synthetic-data": {
	  "description": "explicit generation of synthetic imaging data"
	},
	"task:imputation": {
	  "description": "generation of missing imaging inputs"
	},
	"task:cross-modal": {
	  "description": "mapping between MRI and PET or other modalities"
	},
	"task:prognosis": {
	  "description": "prediction of future clinical progression"
	},
  
	"model:gan": {
	  "description": "generative adversarial network"
	},
	"model:diffusion": {
	  "description": "diffusion-based generative model"
	},
	"model:transformer": {
	  "description": "transformer-based multimodal modeling"
	},
  
	"modality:mri": {
	  "description": "magnetic resonance imaging"
	},
	"modality:pet": {
	  "description": "positron emission tomography"
	},
  
	"disease:ad": {
	  "description": "Alzheimer's disease"
	},
	"disease:mci": {
	  "description": "mild cognitive impairment"
	}
  };