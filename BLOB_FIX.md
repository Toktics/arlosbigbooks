# Lava Blob Fix

## The Problem
The blobs aren't visible because of TWO issues:
1. `overflow-hidden` on the section clips them when they move
2. They're positioned BEHIND the content (z-5 vs z-10)

## The Solution
Remove `overflow-hidden` OR keep the blobs within bounds, and use HIGHER opacity so they're visible.

## Working Code

Replace the Activity Zone section (starting around line 368) with this:

```tsx
      {/* Arlo's Activity Zone */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 relative overflow-visible">
        {/* Lava Lamp Effect - Higher opacity, visible colors, stay within bounds */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-600 opacity-30 blur-3xl pointer-events-none"
          style={{ 
            left: '10%',
            top: '25%',
            zIndex: 1
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-red-800 opacity-35 blur-3xl pointer-events-none"
          style={{ 
            right: '10%',
            top: '30%',
            zIndex: 1
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-orange-700 opacity-30 blur-3xl pointer-events-none"
          style={{ 
            left: '45%',
            top: '50%',
            zIndex: 1
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-500 opacity-25 blur-3xl pointer-events-none"
          style={{ 
            right: '15%',
            top: '55%',
            zIndex: 1
          }}
          animate={{
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
        />
```

## Key Changes:
1. `overflow-visible` instead of `overflow-hidden` 
2. HIGHER opacity (25-35% instead of 15-20%)
3. Smaller movement ranges so they stay within the section
4. `pointer-events-none` so they don't interfere with clicks
5. Darker colors (red-800, orange-700, purple-600, pink-500) for better contrast
6. Lower z-index (1) so they stay behind content
