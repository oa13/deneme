async function denemeFetch() {
    const response = await fetch("https://eksisozluk2023.com/basliklar/ara?SearchForm.Keywords=&SearchForm.Author=&SearchForm.When.From=2023-04-30&SearchForm.When.To=&SearchForm.NiceOnly=false&SearchForm.SortOrder=Date&_=1682869123966");
    const jsonData = await response.json();
    console.log(jsonData);
  }