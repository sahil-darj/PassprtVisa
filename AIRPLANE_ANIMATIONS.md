/* Airplane Animation Examples */

/* 
  These are the airplane animations used across different pages.
  Each uses Framer Motion for smooth, performant animations.
*/

// ============================================
// PASSPORT PAGE - Single Airplane (Right to Left with Wave)
// ============================================
<motion.div
  className="fixed top-32 right-0 w-24 h-24 opacity-20 pointer-events-none z-10"
  animate={{
    x: [1200, -200],      // Move from right (1200px) to left (-200px)
    y: [0, -50, 0]        // Wave motion: start, up 50px, back down
  }}
  transition={{
    duration: 15,         // 15 seconds for full journey
    repeat: Infinity,     // Loop forever
    ease: "linear"        // Constant speed
  }}
>
  <Plane className="w-full h-full text-sky transform rotate-45" />
</motion.div>

// ============================================
// VISA PAGE - Two Airplanes (Crossing Paths)
// ============================================

// Airplane 1: Left to Right
<motion.div
  className="fixed top-40 left-0 w-20 h-20 opacity-15 pointer-events-none z-10"
  animate={{
    x: [-200, 1200],      // Left to right
    y: [0, 30, 0]         // Gentle wave
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Plane className="w-full h-full text-sky transform -rotate-45" />
</motion.div>

// Airplane 2: Right to Left (delayed start)
<motion.div
  className="fixed top-60 right-0 w-16 h-16 opacity-10 pointer-events-none z-10"
  animate={{
    x: [1200, -200],
    y: [0, -40, 0]
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
    delay: 5              // Start 5 seconds later
  }}
>
  <Plane className="w-full h-full text-midnight transform rotate-45" />
</motion.div>

// ============================================
// COUNTRIES PAGE - Complex Flight Path
// ============================================
<motion.div
  className="fixed top-36 left-0 w-24 h-24 opacity-10 pointer-events-none z-10"
  animate={{
    x: [-200, 1400],      // Longer journey
    y: [0, 50, 0, -30, 0] // Complex wave: up, down, up, down
  }}
  transition={{
    duration: 30,         // Slower, 30 seconds
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Plane className="w-full h-full text-sky" />
</motion.div>

// ============================================
// ABOUT PAGE - Diagonal Flight
// ============================================
<motion.div
  className="fixed top-32 right-0 w-20 h-20 opacity-15 pointer-events-none z-10"
  animate={{
    x: [1200, -200],
    y: [0, -40, 0]        // Upward arc
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Plane className="w-full h-full text-sky transform rotate-45" />
</motion.div>

// ============================================
// CONTACT PAGE - Smooth Horizontal with Gentle Wave
// ============================================
<motion.div
  className="fixed top-40 left-0 w-24 h-24 opacity-10 pointer-events-none z-10"
  animate={{
    x: [-200, 1400],
    y: [0, 60, 0]         // Larger wave
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Plane className="w-full h-full text-sky transform -rotate-45" />
</motion.div>

// ============================================
// KEY PROPERTIES EXPLAINED
// ============================================

/*
  className breakdown:
  - fixed: Stays in viewport while scrolling
  - top-XX: Vertical starting position
  - left-0 / right-0: Horizontal starting position
  - w-XX h-XX: Size of the airplane
  - opacity-XX: Transparency (10-20% for subtle effect)
  - pointer-events-none: Can't be clicked
  - z-10: Layer above content but below navbar

  animate object:
  - x: Horizontal movement [start, end] in pixels
  - y: Vertical movement [keyframes] in pixels

  transition object:
  - duration: Animation length in seconds
  - repeat: Infinity for continuous loop
  - ease: "linear" for constant speed
  - delay: Optional start delay

  transform classes:
  - rotate-45: Airplane points up-right
  - -rotate-45: Airplane points down-right
*/

// ============================================
// CUSTOMIZATION TIPS
// ============================================

/*
  To make airplane faster:
  - Decrease duration (e.g., 10 instead of 20)

  To make airplane higher/lower:
  - Change top-XX value (e.g., top-20, top-60)

  To make more visible:
  - Increase opacity (e.g., opacity-30)

  To change direction:
  - Swap x values: [1200, -200] becomes [-200, 1200]
  - Adjust rotation: rotate-45 or -rotate-45

  To add more wave motion:
  - Add more y keyframes: [0, 30, -20, 40, 0]

  To change color:
  - Change text-sky to text-blue-500, text-purple-500, etc.
*/
