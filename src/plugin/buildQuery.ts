/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { buildQueryContext, QueryFormData } from '@superset-ui/core';

/**
 * The buildQuery function is used to create an instance of QueryContext that's
 * sent to the chart data endpoint. In addition to containing information of which
 * datasource to use, it specifies the type (e.g. full payload, samples, query) and
 * format (e.g. CSV or JSON) of the result and whether or not to force refresh the data from
 * the datasource as opposed to using a cached copy of the data, if available.
 *
 * More importantly though, QueryContext contains a property `queries`, which is an array of
 * QueryObjects specifying individual data requests to be made. A QueryObject specifies which
 * columns, metrics and filters, among others, to use during the query. Usually it will be enough
 * to specify just one query based on the baseQueryObject, but for some more advanced use cases
 * it is possible to define post processing operations in the QueryObject, or multiple queries
 * if a viz needs multiple different result sets.
 */
export default function buildQuery(formData: QueryFormData) {
  const {
    cols: groupby
  } = formData;
  return buildQueryContext(formData, baseQueryObject => {
    //debugger;
    const {
      annotation_layers,
      applied_time_extras,
      columns = [],
      custom_form_data = [],
      custom_params = [],
      extras = [],
      filters = [],
      granularity = [],
      metrics = [],
      order_desc,
      orderby = [],
      row_limit,
      row_offset = 0,
      series_columns = [],
      series_limit = 0,
      series_limit_metric = [],
      url_params = {}
    } = baseQueryObject;
    const {
      adhoc_filters = [],
      bold_text = false,
      cache_timeout = 0,
      datasource = "",
      extra_form_data = {},
      force = false,
      groupby_x = [],
      groupby_y = [],
      header_font_size = "",
      header_text = "",
      result_format = "json",
      result_type = "full",
      row_limit_formdata = 1000,
      slice_id = 0,
      url_params_formdata = {},
      viz_type = ""
    } = formData;
    console.groupCollapsed('buildQueryContext');
    console.groupCollapsed('formData');
    console.log('formData', formData);
    for (const [key, val] of Object.entries(formData)) {
      console.log(key, val);
    }
    console.log('annotation_layers', annotation_layers);
    console.log('applied_time_extras', applied_time_extras);
    console.log('columns', columns);
    console.log('custom_form_data', custom_form_data);
    console.log('custom_params', custom_params);
    console.log('extras', extras);
    console.log('filters', filters);
    console.log('granularity', granularity);
    console.log('metrics', metrics);
    console.log('order_desc', order_desc);
    console.log('orderby', orderby);
    console.log('row_limit', row_limit);
    console.log('row_offset', row_offset);
    console.log('series_columns', series_columns);
    console.log('series_limit', series_limit);
    console.log('series_limit_metric', series_limit_metric);
    console.log('url_params', url_params);
    console.groupEnd();
    console.groupCollapsed('baseQueryObject')
    console.log('baseQueryObject', baseQueryObject);
    for (const [key, val] of Object.entries(baseQueryObject)) {
      console.log(key, val);
    }
    console.log('adhoc_filters', adhoc_filters);
    console.log('bold_text', bold_text);
    console.log('cache_timeout', cache_timeout);
    console.log('datasource', datasource);
    console.log('extra_form_data', extra_form_data);
    console.log('force', force);
    console.log('groupby_x', groupby_x);
    console.log('groupby_y', groupby_y);
    console.log('header_font_size', header_font_size);
    console.log('header_text', header_text);
    console.log('result_format', result_format);
    console.log('result_type', result_type);
    console.log('row_limit_formdata', row_limit_formdata);
    console.log('slice_id', slice_id);
    console.log('url_params_formdata', url_params_formdata);
    console.log('viz_type', viz_type);
    console.groupEnd();
    console.groupCollapsed('queryContext')
    const queryContext = [
      {
        ...baseQueryObject,
        columns: groupby_x.concat(groupby_y),
      },
    ];
    console.log('queryContext', queryContext);
    console.groupEnd();
    console.groupEnd();
    return queryContext;
  });
}
