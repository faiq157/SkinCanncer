import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-indigo-600 mb-4">Smart AI Skin Cancer Screening</h1>
        <p class="text-gray-600">Upload an image for instant AI-powered skin cancer screening</p>
      </div>

      <!-- Upload Section -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div id="uploadArea" class="upload-area rounded-lg p-8 text-center cursor-pointer">
          <div class="mb-4">
            <svg class="w-12 h-12 mx-auto text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
          </div>
          <p class="text-gray-600">Drag and drop your image here or click to browse</p>
          <input type="file" id="fileInput" class="hidden" accept="image/*">
        </div>

        <!-- Preview Section -->
        <div id="previewSection" class="hidden mt-8">
          <div class="flex justify-center mb-6">
            <img id="imagePreview" class="preview-image rounded-lg shadow-md" src="" alt="Preview">
          </div>
          <div class="flex justify-center">
            <button id="analyzeBtn" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Analyze Image
            </button>
          </div>
        </div>
      </div>

      <!-- Results Section -->
      <div id="resultsSection" class="hidden bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Analysis Results</h2>
        <div id="resultsContent" class="space-y-4">
          <!-- Results will be populated here -->
        </div>
      </div>
    </div>
  </div>
`;

// Initialize the application
function initApp() {
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const previewSection = document.getElementById('previewSection');
  const imagePreview = document.getElementById('imagePreview');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultsSection = document.getElementById('resultsSection');
  const resultsContent = document.getElementById('resultsContent');

  // Format confidence value
  function formatConfidence(confidence) {
    return confidence.toFixed(4);
  }

  // Get class name and definition mapping
  function getClassInfo(classCode) {
    const classDefinitions = {
      akiec: {
        name: 'Actinic Keratoses (AKIEC)',
        description:
          "These are precancerous lesions. It's important to see a dermatologist for evaluation and treatment (e.g., cryotherapy or topical therapies) to prevent progression into squamous cell carcinoma.",
      },
      bcc: {
        name: 'Basal Cell Carcinoma (BCC)',
        description:
          'Although BCC rarely metastasizes, it can cause local tissue damage. Consult your dermatologist for assessment and appropriate treatment (such as surgical excision or Mohs surgery) to remove the lesion.',
      },
      bkl: {
        name: 'Benign Keratosis (BKL)',
        description:
          'These are usually noncancerous skin growths (like seborrheic keratoses). However, if you notice any changes in appearance, have them checked by a healthcare provider.',
      },
      df: {
        name: 'Dermatofibroma (DF)',
        description:
          'Typically benign and not worrisome, but if the lesion changes in size or appearance or becomes symptomatic, consult your doctor for further evaluation.',
      },
      nv: {
        name: 'Melanocytic Nevi (NV)',
        description:
          'Common moles that are usually harmless. Monitor them using the ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving) and see a dermatologist if you notice any changes.',
      },
      mel: {
        name: 'Melanoma (MEL)',
        description:
          'This is the most dangerous type of skin cancer. If you notice any suspicious changes (irregular moles, multiple colors, rapid growth), seek immediate medical attention for a biopsy and prompt treatment.',
      },
      vasc: {
        name: 'Vascular Skin Lesions (VASC)',
        description:
          'Generally benign (such as cherry angiomas), but if the lesion changes or you experience any symptoms, get it evaluated by a dermatologist.',
      },
    };
    return (
      classDefinitions[classCode] || {
        name: classCode,
        description: 'No description available.',
      }
    );
  }

  // Handle drag and drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('bg-indigo-50');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('bg-indigo-50');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('bg-indigo-50');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  });

  // Handle click upload
  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  });

  // Handle file preview
  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      previewSection.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }

  // Handle analysis
  analyzeBtn.addEventListener('click', async () => {
    try {
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = '<span class="animate-pulse">Analyzing...</span>';
      resultsSection.classList.add('hidden');

      const formData = new FormData();
      formData.append('image', fileInput.files[0]);
      formData.append('model', 'Efficient Net V7');

      const response = await fetch(
        'https://libert999-ham10000-backend-api.hf.space/api/classify',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      // Find the result with the highest confidence
      const highestResult = data.result.reduce((max, curr) =>
        curr.confidence > max.confidence ? curr : max
      );

      // Get class info for the highest result
      const classInfo = getClassInfo(highestResult.class);

      // Create the results HTML (only for the highest confidence result)
      const resultsHTML = `
        <div class="p-4 rounded-lg bg-green-100 border-2 border-green-500">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <h4 class="font-semibold text-green-800">${classInfo.name}</h4>
              <p class="text-sm text-green-600">${highestResult.class.toUpperCase()}</p>
            </div>
            <div class="text-right">
              <span class="text-lg font-bold text-green-800">${formatConfidence(
                highestResult.confidence
              )}</span>
              <p class="text-sm text-green-600 font-medium">Highest Confidence</p>
            </div>
          </div>
          <p class="text-sm text-green-700">${classInfo.description}</p>
        </div>
      `;

      // Display results
      resultsContent.innerHTML = `
        <div class="space-y-4">
          ${resultsHTML}
        </div>
      `;

      resultsSection.classList.remove('hidden');
    } catch (error) {
      resultsContent.innerHTML = `
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-red-800 mb-4">Error</h3>
          <p class="text-gray-700">An error occurred while analyzing the image please make sure you upload skin related image. Please try again.</p>
        </div>
      `;
      resultsSection.classList.remove('hidden');
    } finally {
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = 'Analyze Image';
    }
  });
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
