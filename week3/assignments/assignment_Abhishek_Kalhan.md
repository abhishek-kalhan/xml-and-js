1. XML file with DTD validated successfully
![image info](../assets/assignment_xml_validation.png)


2. XSD file validated successfully
![image info](../assets/assignment_xsd_validation.png)


3. I started with creating the DTD for the XML file which was provided. I first listed all the elements in the DTD for the XML, and listed all attributes in the end. I studied the provided xml thoroughly to create the element type declerations in the DTD. 

    Then I moved to defining the attributes for each of the elements. Only product, catalog_item, size and color_swatch are the elements which had attributes. Product has 3 attributes product_id whose attribute type I gave as ID, description and product_image, both having CDATA as attribubte type. The catalog_item element has 1 attribute, gender. The size and color_swatch also had 1 attribute each, description and image respectively. I have given the attribute-value to each of the attributes as required and implied where necessary.

    After successfully validating the DTD I started creating the XSD file. For the nested elements, I used the complexType and sequence tags to add them to the XSD.    
