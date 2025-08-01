/**
 * GRADED WEB PROJECT - INTERACTIVE ANIMATION SHOWCASE
 * Demonstrates:
 * 1. Scope understanding
 * 2. Parameters and return values
 * 3. Animation triggers
 * 4. Keyframe animations
 */

// =============================================
// SECTION 1: SCOPE DEMONSTRATION
// =============================================

/**
 * Demonstrates variable scope
 * Shows difference between global and local variables
 */
const globalVar = "I'm global"; // Global variable


    const localVar = "I'm local"; // Local variable
    
    // This works - can access global and local
    document.getElementById('scope-output').innerHTML = `
        Global: ${globalVar}<br>
        Local: ${localVar}
    `;
    
    try {
        // This will throw an error - trying to access outerVar outside its scope
        console.log(outerVar);
    } catch (e) {
        console.log("Error accessing outerVar:", e.message);
    }


// This variable is in global scope but declared after the function
const outerVar = "I'm declared later";

// Event listener for scope demonstration
document.getElementById('scope-btn').addEventListener('click', function() {
    testScope();
    
    // Try to access localVar here - will throw error
    try {
        console.log(localVar);
    } catch (e) {
        document.getElementById('scope-output').innerHTML += <br>Error: ${e.message};
    


// =============================================
// SECTION 2: PARAMETERS & RETURN VALUES
// =============================================

/**
 * Function that takes parameters and returns a value
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of base^exponent
 */
function calculatePower(base, exponent) 
    // Validate inputs
    if (typeof base !== 'number' || typeof exponent !== 'number') 
        throw new Error('Both inputs must be numbers');
    
    
    // Calculate and return result
    return Math.pow(base, exponent);


// Event listener for calculation
document.getElementById('calculate-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('function-output');
    
    try {
        const result = calculatePower(num1, num2);
        output.textContent = ${num1}^${num2} = ${result};
     catch (e) {
        output.textContent =  ${e.message};
    

// =============================================
// SECTION 3: ANIMATION TRIGGERS
// =============================================

/**
 * Controls animations on the box element
 * Demonstrates adding/removing animation classes
 */
const animationBox = document.getElementById('animated-box');

// Bounce animation trigger
document.getElementById('bounce-btn').addEventListener('click', function() 
    resetAnimations();
    animationBox.classList.add('bounce');


// Spin animation trigger
document.getElementById('spin-btn').addEventListener('click', function() {
    resetAnimations()
.classList.add('spin'


// Reset animation trigger
document.getElementById('reset-btn').addEventListener('click', resetAnimations);

/**
 * Helper function to remove all animation classes
 */
function resetAnimations() {
    animationBox.classList.remove('bounce', 'spin', 'color-shift')
}

// =============================================
// SECTION 4: KEYFRAME ANIMATION
// =============================================

/**
 * Controls the sun/moon animation
 * Demonstrates controlling keyframe animations with JS
 */
const sun = document.querySelector('.sun');
const keyframeContainer = document.querySelector('.keyframe-container');
let isDay = true;

// Toggle day/night animation
document.getElementById('toggle-sun').addEventListener('click', function() 
    if (isDay) {
        // Switch to night
        keyframeContainer.classList.add('night')
        sun.style.animationName = 'moonMovement'

        // Switch to day
        keyframeContainer.classList.remove('night')
        sun.style.animationName = 'sunMovement';
    
    
    // Toggle animation play state
    if (sun.style.animationPlayState === 'paused') {
        sun.style.animationPlayState = 'running'
    } else {
        sun.style.animationPlayState = 'paused'
    }
    
    