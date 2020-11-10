### Assumptions / Thoughts

## Data source/ Resources json
  The Templates json data is about 250 thousand in total! In my opinion, it is a bit too much for 
  a small project. My browser makes about 10 requests sequentially fetching the data in chunks which
  not only affects initial page load, it also makes the components to re-render and re-order themselves over and over again. overall application performance is signaficantly throttled.
    To curb this i copied a large set of data and stored it as a json file in the project folder. 

## Pagination component
  Due to the aformentioned above, I could'nt wrap up the pagination. I could have used infinite scrolling
  to fetch data but the json file is stored in the project so reading the file is going to require another uneccesary setup.

## Data structure
  The data structure of a single template json data can be better.




