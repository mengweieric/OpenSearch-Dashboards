/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DataSource,
  DataSourceFactory,
  IDataSetParams,
  IDataSourceMetaData,
  IDataSourceQueryParams,
  IDataSourceQueryResult,
  ISourceDataSet,
} from '../datasource';
import { DataSourceService } from './datasource_service';

export interface IDataSourceFilters {
  names: string[];
}

export interface IDataSourceRegisterationResult {
  success: boolean;
  info: string;
}

export class DataSourceRegisterationError extends Error {
  success: boolean;
  info: string;
  constructor(message: string) {
    super(message);
    this.success = false;
    this.info = message;
  }
}

export interface DataSourceStart {
  dataSourceService: DataSourceService;
  dataSourceFactory: DataSourceFactory;
}

export type DataSourceType = DataSource<
  IDataSourceMetaData,
  IDataSetParams,
  ISourceDataSet,
  IDataSourceQueryParams,
  IDataSourceQueryResult
>;
