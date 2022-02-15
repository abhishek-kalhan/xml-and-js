const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const loadnewData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  const generateTableRow = (item) => {
    const rollno = item.attributes[0].textContent;
    const firstName = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastname`))[0];
    const nickName = Array.from(item.getElementsByTagName(`nickname`))[0];
    const marks = Array.from(item.getElementsByTagName(`marks`))[0];
  
    return `<tr>
        <td>${rollno}</td>
        <td>${firstName.textContent}</td>
        <td>${lastName.textContent}</td>
        <td>${nickName.textContent}</td>
        <td>${marks.textContent}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-data");
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadnewData(`http://localhost:8080/week-6/assignments/students.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };