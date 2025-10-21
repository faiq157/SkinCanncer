import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <!-- Hero Section -->
    <div class="relative h-[80vh] bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden">
      <video 
        class="absolute inset-0 w-full h-full object-cover opacity-40"
        autoplay 
        loop 
        muted 
        playsinline
      >
        <source src="https://cdn.pixabay.com/video/2020/05/04/38079-416330694_small.mp4" type="video/mp4">
      </video>
      <div class="relative z-10 h-full flex items-center justify-center">
        <div class="text-center px-4 max-w-4xl">
          <h1 class="text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">AI-Powered Skin Cancer Detection</h1>
          <p class="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Early detection is your best defense. Our advanced AI technology analyzes skin lesions with medical-grade precision, providing instant feedback about potential skin conditions.
          </p>
          <div class="flex flex-wrap gap-4 justify-center items-center text-sm text-gray-300 animate-fade-in-delay-2">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              91% Accuracy Rate
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Instant Results
            </div>
         
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f8fafc] to-transparent"></div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Easy to Use</h3>
          <p class="text-gray-600">Simply upload a clear photo of your skin concern and receive instant AI-powered analysis.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Instant Analysis</h3>
          <p class="text-gray-600">Get immediate results powered by our advanced AI model trained on thousands of clinical cases.</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">Private & Secure</h3>
          <p class="text-gray-600">Your privacy matters. All uploads are encrypted and automatically deleted after analysis.</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Upload Section -->
        <div class="bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg bg-white/80">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Upload Image for Analysis</h2>
          <div id="uploadArea" class="upload-area rounded-lg p-8 text-center cursor-pointer">
            <div class="mb-4 flex justify-center">
            <dotlottie-player
            src="https://lottie.host/03ec10ae-36e4-4201-b0d9-0962233d5c64/J9KJr0xpVJ.lottie"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></dotlottie-player>
            </div>
            <p class="text-gray-600">Drag and drop your image here or click to browse</p>
            <p class="text-sm text-gray-500 mt-2">Supported formats: JPG, PNG</p>
            <input type="file" id="fileInput" class="hidden" accept="image/*">
          </div>

          <!-- Preview Section -->
          <div id="previewSection" class="hidden mt-8">
            <div class="flex justify-center mb-6">
              <img id="imagePreview" class="preview-image rounded-lg shadow-md transition-transform hover:scale-105" src="" alt="Preview">
            </div>
            <div class="flex justify-center">
              <button id="analyzeBtn" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 flex items-center">
                <svg class="w-5 h-5 mr-2 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Analyze Image
              </button>
            </div>
          </div>
        </div>

        <!-- Results Section -->
        <div id="resultsSection" class="hidden">
          <div class="bg-white rounded-xl shadow-lg p-8 h-full backdrop-blur-lg bg-white/80">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Analysis Results</h2>
            <!-- Loading Animation -->
            <div id="loadingAnimation" class="hidden flex justify-center flex-col items-center">
            <dotlottie-player
            src="https://lottie.host/d4aa1bd5-b3ba-4382-b424-27f45735a205/vsG8NlSwwI.lottie"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></dotlottie-player>
              <p class="text-center text-gray-600 animate-pulse">Analyzing your image with our AI model...</p>
            </div>
            <div id="resultsContent" class="space-y-4">
              <!-- Results will be populated here -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="text-center text-gray-600 text-sm">
          <p class="mb-2">This tool is for educational purposes only and should not replace professional medical advice.</p>
          <p>Always consult with a qualified healthcare provider for proper diagnosis and treatment.</p>
        </div>
      </div>
    </footer>
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
  const loadingAnimation = document.getElementById('loadingAnimation');

  // Load Lottie Player
  const script = document.createElement('script');
  script.src =
    'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
  script.type = 'module';
  document.head.appendChild(script);

  // Format confidence value
  function formatConfidence(confidence) {
    return confidence.toFixed(4);
  }

  // Get class name and definition mapping
function getClassInfo(classCode) {
  const classDefinitions = {
    akiec: {
      name: 'Diagnosis: Actinic Keratoses (AKIEC)',
      description:
        'A sun-induced, precancerous skin lesion. While early-stage, it can progress to squamous cell carcinoma. Please consult a dermatologist for evaluation and possible treatment.',
    },
    bcc: {
      name: 'Diagnosis: Basal Cell Carcinoma (BCC)',
      description:
        'A common, slow-growing skin cancer with low metastatic risk. Early removal improves outcomes—seek prompt assessment by a skin cancer specialist.',
    },
    bkl: {
      name: 'Diagnosis: Benign Keratosis (BKL)',
      description:
        'A non-cancerous growth (e.g., seborrheic keratosis). Generally harmless, but consult your healthcare provider if you notice any change in size, shape, or color.',
    },
    df: {
      name: 'Diagnosis: Dermatofibroma (DF)',
      description:
        'A benign, fibrous skin nodule. No treatment is usually required—seek medical advice if it becomes painful or shows rapid changes.',
    },
    nv: {
      name: 'Diagnosis: Melanocytic Nevi (NV)',
      description:
        'A common, benign mole. Watch for the ABCDE signs (Asymmetry, Border irregularity, Color variation, Diameter >6 mm, Evolving). Consult a dermatologist if you observe any.',
    },
    mel: {
      name: 'Diagnosis: Melanoma (MEL)',
      description:
        'A serious, malignant tumor with high metastasis potential. Urgent medical evaluation is recommended—please see a dermatologist immediately.',
    },
    vasc: {
      name: 'Diagnosis: Vascular Skin Lesions (VASC)',
      description:
        'A benign blood-vessel growth (e.g., hemangioma). Typically harmless; seek care if it bleeds, enlarges rapidly, or causes discomfort.',
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
    resultsSection.classList.add('hidden');
    uploadArea.classList.add('hidden');

    if (!document.getElementById('clearImageBtn')) {
      const clearBtn = document.createElement('button');
      clearBtn.id = 'clearImageBtn';
      clearBtn.innerHTML = '✕';
      clearBtn.className =
        'absolute top-2 right-2 bg-white rounded-full shadow p-1 text-gray-700 hover:bg-red-100 hover:text-red-600 transition-all z-20';
      clearBtn.style.position = 'absolute';
      clearBtn.style.top = '10px';
      clearBtn.style.right = '10px';
      clearBtn.title = 'Remove image';
      const previewContainer = imagePreview.parentElement;
      previewContainer.style.position = 'relative';
      previewContainer.appendChild(clearBtn);

      clearBtn.addEventListener('click', () => {
        fileInput.value = '';
        previewSection.classList.add('hidden');
        uploadArea.classList.remove('hidden');
        clearBtn.remove();
      });
    }
  };
  reader.readAsDataURL(file);
}

  // Handle analysis
  analyzeBtn.addEventListener('click', async () => {
    try {
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = `
        <svg class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        Processing...
      `;
      resultsSection.classList.remove('hidden');
      resultsContent.classList.add('hidden');
      loadingAnimation.classList.remove('hidden');

      const formData = new FormData();
      formData.append('image', fileInput.files[0]);
      formData.append('model', 'Efficient Net V7');

      const response = await fetch(
        'https://libert999-ham10000-backend.hf.space/api/classify',
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

      // Create the results HTML with animation
      const resultsHTML = `
        <div class="p-6 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 animate-fade-in">
          <div class="flex items-center justify-between mb-4">
            <div class="flex-1">
              <h4 class="font-semibold text-green-800 text-xl">${
                classInfo.name
              }</h4>
              <p class="text-sm text-green-600">${highestResult.class.toUpperCase()}</p>
            </div>
            <div class="text-right">
              <span class="text-lg font-bold text-green-800">${formatConfidence(
                highestResult.confidence
              )}</span>
              <p class="text-sm text-green-600">Confidence Score</p>
            </div>
          </div>
          <p class="text-sm text-green-700 leading-relaxed">${
            classInfo.description
          }</p>
        </div>
      `;

      // Display results with animation
      loadingAnimation.classList.add('hidden');
      resultsContent.classList.remove('hidden');
      resultsContent.innerHTML = resultsHTML;
    } catch (error) {
      loadingAnimation.classList.add('hidden');
      resultsContent.classList.remove('hidden');
      resultsContent.innerHTML = `
        <div class="p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 animate-fade-in">
          <div class="flex items-center mb-4">
            <svg class="w-6 h-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <h3 class="text-lg font-semibold text-yellow-800">Invalid Image Detected</h3>
          </div>
          <p class="text-yellow-700">⚠️ Invalid Image Detected: Non-medical images are not supported. Please upload a clear skin image for analysis.</p>
        </div>
      `;
    } finally {
      analyzeBtn.disabled = false;
      analyzeBtn.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        Analyze Image
      `;
    }
  });
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

