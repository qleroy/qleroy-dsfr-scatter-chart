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
import React, { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import { QleroyDsfrScatterChartProps, QleroyDsfrScatterChartStylesProps } from './types';

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

const Styles = styled.div<QleroyDsfrScatterChartStylesProps>`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default function QleroyDsfrScatterChart({
  data,
  height,
  width,
  colsX,
  colsY,
  colsZ,
  seriesX,
  seriesY,
  seriesZ,
  entityX,
}: QleroyDsfrScatterChartProps) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉

  const rootElem = createRef<HTMLDivElement>();

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  });


  const colname_x = Object.keys(data[0])[0];
  const colname_y = Object.keys(data[0])[1];
  const series_x = data.map(item => item[colname_x]);
  const series_y = data.map(item => item[colname_y]);
  console.groupCollapsed('DATA')
  console.log('data', data);
  console.log('series_x', series_x);
  console.log('series_x', JSON.stringify(series_x));
  const scatter_x = `[${JSON.stringify(series_x)}]`;
  console.log('scatter_x', scatter_x);
  console.log('series_y', series_y);
  console.log('series_y', JSON.stringify(series_y));
  const scatter_y = `[${JSON.stringify(series_y)}]`;
  console.log('scatter_y', scatter_y);
  //debugger;

  let scatter_X = '[';
  let scatter_Y = '[';
  series_x.map((series_X, index) => {
    let series_Y = series_y[index];
    scatter_X += JSON.stringify(series_X);
    scatter_Y += JSON.stringify(series_Y);
    //scatter_X += ',';
    //scatter_Y += ',';
  })
  scatter_X += ']';
  scatter_Y += ']';
  console.log('scatter_X', scatter_X);
  console.log('scatter_Y', scatter_Y);
  console.groupEnd();



  return (
    <Styles
      ref={rootElem}
      height={height}
      width={width}
    >
      <div className="part_container">
        <scatter-chart x={scatter_x} y={scatter_y}
          showline={true}></scatter-chart>
      </div>
    </Styles >
  );
}
