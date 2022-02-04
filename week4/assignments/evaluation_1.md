1. I started with creating the xsl file from the xml which was provided. Additionally I used the instructions that were provided in the assignment.md file. First step was to create the title Catalog, for which i have used the h1 tag. I have displayed the product id as h3 and product description as paragraph as was given in the assignment instructions. Following the same, the next step was to render the table with columns item number, price, gender, small, medium, large, extra large. 

I have used the table header to display these columns. For gender column I have used the <xsl:choose> tag to express conditional tests to display 'W' when gender is 'Women' otherwise 'M'. 

Then for the last step I have displayed Color and image as <th> tag. I have added multiple if conditions for size (small, medium, etc.)

2. Final Output: 
![image info](../assets/output.png)
