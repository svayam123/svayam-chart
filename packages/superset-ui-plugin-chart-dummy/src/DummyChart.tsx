/* eslint-disable no-magic-numbers */
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
import React from 'react';

export type DummyChartProps = {
  height: number;
  width: number;
  data: { x: number; y: number }[];
};

export default class DummyChart extends React.PureComponent<DummyChartProps> {
  render() {
    const { data, height, width } = this.props;

    return (
      <svg style={{ backgroundColor: '#ffe459', borderRadius: 8, height, width }}>
        {data.map(({ x, y }) => (
          <circle
            key={[x, y].join('-')}
            cx={x * width}
            cy={y * height}
            r={Math.random() * 20}
            fill="#fff"
            opacity="0.5"
          />
        ))}
        <text x={width / 2} y={height / 2} textAnchor="middle" fontWeight="bold" fontSize="36">
          Hello!
        </text>
      </svg>
    );
  }
}
