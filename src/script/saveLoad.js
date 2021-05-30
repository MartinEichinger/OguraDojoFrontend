import $ from 'jquery';

// save function
export async function save() {
  console.log('saveLoad/save');

  // init json object
  /* var json = {};

  // write script title to json object
  var $title = $('#scriptTitle');
  json['title'] = $title[0].value;

  // write key data of libraries to json object
  var lib = [];
  var $lib = $('.library');
  var dropItems = $lib.find('.dropItem');

  for (var dropItem of dropItems) {
    console.log(dropItem);
    lib.push({
      id: dropItem.id,
      img1: dropItem.children[0].src,
      txt: dropItem.children[1].textContent,
      img2: dropItem.children[2].src,
    });
  }

  json['library'] = lib;
  console.log('Lib', json);

  // write key data of tasks to json object
  var tasks = [];
  var $tasks = $('.tasks');
  var taskItems = $tasks.find('.taskItem');

  for (var taskItem of taskItems) {
    console.log(taskItem);
    tasks.push({
      txt: taskItem.children[0].children[1].value,
    });
  }

  json['tasks'] = tasks;
  console.log('Tasks', json);

  // write data to hard drive
  const response = await fetch('/save_load', {
    method: 'POST',
    body: JSON.stringify({
      body: json,
    }),
  }); */
  //var result = await response.json();
  //result = JSON.parse(result);
}

export async function loadJSON() {
  console.log('saveLoad/load');

  // Retrieve data from local file
  const response = await fetch('/eventscontent.json', {});
  var result = await response.json();
  //result = JSON.parse(result);

  return result;
}
