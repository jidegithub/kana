### Assumptions / Thoughts

## Data source/ Resources json
  The Templates json data is about 250 thousand in total! In my opinion, it is a bit too much for 
  a small project. My browser makes about 10 requests sequentially fetching the data in chunks which
  not only affects initial page load, it also makes the components to re-render and re-order themselves over and over again. overall application performance is signaficantly throttled.
    To curb this i copied a large set of data and stored it as a json file in the project folder. 

## Pagination component
  Due to the aformentioned above, I could'nt implement the pagination. I could even chunk the dataset after
  getting back the response but thats a very expensive computational overhead for a dataset of that size and
  since performance is key here. It's a no-no.
  I could use other methods like fetching the data when user requests for it but it's still a dead end
  to fetch dataset due to the way it was setup. other methods will just a hack.

## Dataset Fetch Query/Limiting
  Sequel to the above, the api doesn't come with data limiting/ data skipping capabilities i.e "api/?page=10/skip=5" so i have to actually fetch everything! 


## Data structure
  The data structure of a single template json data can be better.




