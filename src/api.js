let rootUrl = 'http://localhost:8000/';

module.exports = {
  getReports: function(url) {
    return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log('>>>error', error);
      return error;
    });
  },
  saveReport: function(report) {
    return fetch(rootUrl + 'report', {
      method: 'POST',
      body: JSON.stringify(report)
    })
    .then((response) => { return response })
  }
}
