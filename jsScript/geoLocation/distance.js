function calculateDistance(lat1, lon1, lat2, lon2) {
          const R = 6371e3; // Earth's radius in meters
          const φ1 = lat1 * Math.PI / 180; // Convert latitude to radians
          const φ2 = lat2 * Math.PI / 180;
          const Δφ = (lat2 - lat1) * Math.PI / 180;
          const Δλ = (lon2 - lon1) * Math.PI / 180;
      
          const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
          const distance = R * c; // Distance in meters
          return distance;
      }
      
      if (navigator.geolocation) {
          // Get the current position
          navigator.geolocation.getCurrentPosition(
              // Success callback
              function(position) {
                  // Extract latitude and longitude from the position object
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
      
                  // Use latitude and longitude as needed
                  console.log("Latitude:", latitude);
                  console.log("Longitude:", longitude);
      
                  // Call calculateDistance function here
                  const distance = calculateDistance(latitude, longitude, 12.842224135562025, 80.15444121963982);
                  console.log("Distance:", distance.toFixed(2), "meters");
              },
              // Error callback
              function(error) {
                  // Handle errors here
                  switch(error.code) {
                      case error.PERMISSION_DENIED:
                          console.error("User denied the request for Geolocation.");
                          break;
                      case error.POSITION_UNAVAILABLE:
                          console.error("Location information is unavailable.");
                          break;
                      case error.TIMEOUT:
                          console.error("The request to get user location timed out.");
                          break;
                      case error.UNKNOWN_ERROR:
                          console.error("An unknown error occurred.");
                          break;
                  }
              }
          );
      } else {
          // Geolocation is not supported
          console.error("Geolocation is not supported by this browser.");
      }
      
      