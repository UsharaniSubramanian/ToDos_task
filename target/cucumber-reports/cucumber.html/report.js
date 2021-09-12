$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("apitest.feature");
formatter.feature({
  "line": 3,
  "name": "GET the list of post via GET method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Api"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "GET the list of post via GET method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-list-of-post-via-get-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@testGetn"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I provide \"\u003cinput\u003e\" for GET method and get the response back",
  "keyword": "Given "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-list-of-post-via-get-method;",
  "rows": [
    {
      "cells": [
        "input"
      ],
      "line": 9,
      "id": "get-the-list-of-post-via-get-method;get-the-list-of-post-via-get-method;;1"
    },
    {
      "cells": [
        "5"
      ],
      "line": 10,
      "id": "get-the-list-of-post-via-get-method;get-the-list-of-post-via-get-method;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "GET the list of post via GET method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-list-of-post-via-get-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@testGetn"
    },
    {
      "line": 1,
      "name": "@Api"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I provide \"5\" for GET method and get the response back",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "APIGlue.i_provide_for_GET_method(String)"
});
formatter.result({
  "duration": 953545000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "GET all the list of post via GET method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-all-the-list-of-post-via-get-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@testGetAll"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "GET all the list of posts available",
  "keyword": "Given "
});
formatter.match({
  "location": "APIGlue.get_all_the_list_of_posts_available()"
});
formatter.result({
  "duration": 31661600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "GET the detail via POST method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-detail-via-post-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@testPost"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Pass on the \"\u003cinput_json\u003e\" file to POST Method and get the response back",
  "keyword": "Given "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-detail-via-post-method;",
  "rows": [
    {
      "cells": [
        "input_json"
      ],
      "line": 23,
      "id": "get-the-list-of-post-via-get-method;get-the-detail-via-post-method;;1"
    },
    {
      "cells": [
        "data/test-postJson-1.json"
      ],
      "line": 24,
      "id": "get-the-list-of-post-via-get-method;get-the-detail-via-post-method;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "GET the detail via POST method",
  "description": "",
  "id": "get-the-list-of-post-via-get-method;get-the-detail-via-post-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Api"
    },
    {
      "line": 18,
      "name": "@testPost"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Pass on the \"data/test-postJson-1.json\" file to POST Method and get the response back",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "data/test-postJson-1.json",
      "offset": 13
    }
  ],
  "location": "APIGlue.pass_on_the_file_to_POST_Method_and_get_the_response_back(String)"
});
formatter.result({
  "duration": 491209400,
  "status": "passed"
});
});