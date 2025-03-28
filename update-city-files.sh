#!/bin/bash

# Get the template content
TEMPLATE=$(cat /Users/nate/Projects/cashpayscripts/cities/template.html)

# Get a list of all city HTML files excluding the template files
CITY_FILES=$(find /Users/nate/Projects/cashpayscripts/cities -name "*.html" | grep -v "template.html" | grep -v "city-template.html")

# Function to format city name 
format_city_name() {
  local slug="$1"
  
  # Special case for Washington DC
  if [ "$slug" = "washington" ]; then
    echo "Washington DC"
    return
  fi
  
  # Manual fixes for common city names
  case "$slug" in
    "boston") echo "Boston" ;;
    "baltimore") echo "Baltimore" ;;
    "albuquerque") echo "Albuquerque" ;;
    "columbus") echo "Columbus" ;;
    "long-beach") echo "Long Beach" ;;
    *) # Convert kebab-case to title case
       echo "$slug" | sed -E 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1'
       ;;
  esac
}

# Process each city file
for file in $CITY_FILES; do
  echo "Updating $file..."
  
  # Get the city slug from the filename
  CITY_SLUG=$(basename "$file" .html)
  
  # Format the city name
  CITY_NAME=$(format_city_name "$CITY_SLUG")
  
  # Replace the placeholders with the actual city name and slug
  CONTENT="${TEMPLATE//\[CITY\]/$CITY_NAME}"
  CONTENT="${CONTENT//\[CITY-SLUG\]/$CITY_SLUG}"
  
  # Write the content to the file
  echo "$CONTENT" > "$file"
  
  echo "Updated $file with '$CITY_NAME' successfully."
done

echo "All city files have been updated successfully!"