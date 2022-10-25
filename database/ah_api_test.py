import requests



url = 'https://www.ah.nl/gql'
headers = {
  'client-name': 'ah-allerhande',
  'client-version': '1.757.0-pr-869-build-2479',
}

# Recipe id's:
# 7500    till 8630    inclusive      1130 recipes
# 65750   till 66180   inclusive       430 recipes
# 196258  till 196320  inclusive        62 recipes
# 237800  till 237860  inclusive        60 recipes
# 373280  till 373290  inclusive        10 recipes
# 425710  till 425720  inclusive        10 recipes
# 454190  till 454200  inclusive        10 recipes
# 551286  till 551300  inclusive        14 recipes
# 577896  till 577910  inclusive        14 recipes
# 626080  till 626100  inclusive        20 recipes
# 655280  till 655300  inclusive        20 recipes
# 665340  till 665400  inclusive        60 recipes
# 733270  till 733300  inclusive        30 recipes
# 845640  till 845700  inclusive        60 recipes
# 909480                                 1 recipes
# 1064570 till 1064600 inclusive        30 recipes
# 1064602 till 1064620 inclusive        18 recipes
# 1112300 till 1112360 inclusive        60 recipes
# 1178180 till 1178200 inclusive        20 recipes
# 1184980 till 1189982 inclusive      5002 recipes
# 1190000 till 1197335 inclusive      7335 recipes

for id in range(237800, 237860):
     payload = {
     'operationName': "recipe",
     'query': 'query recipe($id: Int!) {\n  recipe(id: $id) {\n    ...recipe\n    __typename\n  }\n}\n\nfragment recipe on Recipe {\n  id\n  title\n  alternateTitle\n  slugifiedTitle\n  courses\n  modifiedAt\n  publishedAt\n  nutritions {\n    ...recipeNutritionInfo\n    __typename\n  }\n  cookTime\n  ovenTime\n  waitTime\n  servings {\n    isChangeable\n    max\n    min\n    scale\n    type\n    number\n    __typename\n  }\n  rating {\n    average\n    count\n    __typename\n  }\n  images(\n    renditions: [D220X162, D302X220, D440X324, D612X450, D1024X748, D1224X900]\n  ) {\n    url\n    width\n    height\n    rendition\n    __typename\n  }\n  preparation {\n    steps\n    summary\n    __typename\n  }\n  videos {\n    preparation {\n      ...recipeVideo\n      __typename\n    }\n    tips {\n      ...recipeVideo\n      __typename\n    }\n    __typename\n  }\n  spiciness\n  magazines {\n    number\n    date\n    title\n    issueSlug\n    type\n    __typename\n  }\n  description\n  tags {\n    key\n    value\n    __typename\n  }\n  ingredients {\n    id\n    name {\n      plural\n      singular\n      __typename\n    }\n    quantity\n    quantityUnit {\n      plural\n      singular\n      __typename\n    }\n    servingsScale\n    text\n    __typename\n  }\n  kitchenAppliances {\n    quantity\n    name\n    scalable\n    __typename\n  }\n  tips {\n    value\n    type\n    __typename\n  }\n  href\n  classifications\n  meta {\n    description\n    title\n    __typename\n  }\n  cuisines\n  nutriScore\n  __typename\n}\n\nfragment recipeNutritionInfo on RecipeNutritionInfo {\n  carbohydrates {\n    ...recipeNutrition\n    __typename\n  }\n  energy {\n    ...recipeNutrition\n    __typename\n  }\n  fat {\n    ...recipeNutrition\n    __typename\n  }\n  fibers {\n    ...recipeNutrition\n    __typename\n  }\n  protein {\n    ...recipeNutrition\n    __typename\n  }\n  saturatedFat {\n    ...recipeNutrition\n    __typename\n  }\n  sodium {\n    ...recipeNutrition\n    __typename\n  }\n  sugar {\n    ...recipeNutrition\n    __typename\n  }\n  __typename\n}\n\nfragment recipeNutrition on RecipeNutrition {\n  name\n  unit\n  value\n  __typename\n}\n\nfragment recipeVideo on RecipeVideo {\n  id\n  category\n  title\n  slug\n  duration\n  description\n  descriptionHtml\n  publication\n  views\n  images {\n    ...recipeVideoImages\n    __typename\n  }\n  streams {\n    ...recipeVideoStreams\n    __typename\n  }\n  __typename\n}\n\nfragment recipeVideoImages on RecipeVideoImages {\n  sd\n  thumbnail\n  __typename\n}\n\nfragment recipeVideoStreams on RecipeVideoStreams {\n  sd\n  hd\n  __typename\n}',
     'variables': {
    'id': id,
                  }
              }

     response = requests.post(url, json=payload, headers=headers)
     data = response.json()
   

     if data['data']['recipe'] != None:
         id = data['data']['recipe'].get('id')
         name = data['data']['recipe'].get('title')
         serving = data['data']['recipe']['servings']['number']
         preparation = data['data']['recipe']['preparation']['summary']
    

         for i in data['data']['recipe']['ingredients']:

             ingredient_id = i['id']
             ingredient_name = i['name']['singular']
             ingredient_quantity = i['quantity']
             ingredient_quantity_unit = i['quantityUnit']['singular']
       

         preparation_str = ''

         for i in preparation:
             preparation_str = preparation_str + i
            
       








