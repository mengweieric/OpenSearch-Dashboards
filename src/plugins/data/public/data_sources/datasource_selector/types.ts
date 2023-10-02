/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OuiComboBoxOptionOption } from '@elastic/eui';
import { DataSourceType } from '../datasource_services';

export interface DataSourceGroup {
  label: string;
  options: DataSourceOption[];
}

export interface DataSourceOption {
  label: string;
  value: string;
}

export type DataSourceOptionType = OuiComboBoxOptionOption<unknown>;

export interface DataSourceSelectableProps {
  dataSources: DataSourceType[];
  dataSourceOptionList: DataSourceGroup[];
  selectedSources: DataSourceOption[];
  setSelectedSources: (dataSourceOption: DataSourceOption[]) => void;
  setDataSourceOptionList: (dataSourceList: DataSourceGroup[]) => void;
  singleSelection?: boolean;
  onFetchDataSetError: (error: Error) => void;
}
