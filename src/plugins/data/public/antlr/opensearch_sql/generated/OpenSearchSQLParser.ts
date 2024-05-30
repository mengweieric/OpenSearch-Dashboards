// Generated from /home/ubuntu/ws/OpenSearch-Dashboards/src/plugins/data/public/antlr/opensearch_sql/grammar/OpenSearchSQLParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { OpenSearchSQLParserListener } from "./OpenSearchSQLParserListener.js";
import { OpenSearchSQLParserVisitor } from "./OpenSearchSQLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class OpenSearchSQLParser extends antlr.Parser {
    public static readonly SPACE = 1;
    public static readonly SPEC_SQL_COMMENT = 2;
    public static readonly COMMENT_INPUT = 3;
    public static readonly LINE_COMMENT = 4;
    public static readonly ALL = 5;
    public static readonly AND = 6;
    public static readonly AS = 7;
    public static readonly ASC = 8;
    public static readonly BOOLEAN = 9;
    public static readonly BETWEEN = 10;
    public static readonly BY = 11;
    public static readonly CASE = 12;
    public static readonly CAST = 13;
    public static readonly CROSS = 14;
    public static readonly COLUMNS = 15;
    public static readonly DATETIME = 16;
    public static readonly DELETE = 17;
    public static readonly DESC = 18;
    public static readonly DESCRIBE = 19;
    public static readonly DISTINCT = 20;
    public static readonly DOUBLE = 21;
    public static readonly ELSE = 22;
    public static readonly EXISTS = 23;
    public static readonly FALSE = 24;
    public static readonly FLOAT = 25;
    public static readonly FIRST = 26;
    public static readonly FROM = 27;
    public static readonly GROUP = 28;
    public static readonly HAVING = 29;
    public static readonly IN = 30;
    public static readonly INNER = 31;
    public static readonly INT = 32;
    public static readonly INTEGER = 33;
    public static readonly IS = 34;
    public static readonly JOIN = 35;
    public static readonly LAST = 36;
    public static readonly LEFT = 37;
    public static readonly LIKE = 38;
    public static readonly LIMIT = 39;
    public static readonly LONG = 40;
    public static readonly MATCH = 41;
    public static readonly NATURAL = 42;
    public static readonly MISSING_LITERAL = 43;
    public static readonly NOT = 44;
    public static readonly NULL_LITERAL = 45;
    public static readonly NULLS = 46;
    public static readonly ON = 47;
    public static readonly OR = 48;
    public static readonly ORDER = 49;
    public static readonly OUTER = 50;
    public static readonly OVER = 51;
    public static readonly PARTITION = 52;
    public static readonly REGEXP = 53;
    public static readonly RIGHT = 54;
    public static readonly SELECT = 55;
    public static readonly SHOW = 56;
    public static readonly STRING = 57;
    public static readonly THEN = 58;
    public static readonly TRUE = 59;
    public static readonly UNION = 60;
    public static readonly USING = 61;
    public static readonly WHEN = 62;
    public static readonly WHERE = 63;
    public static readonly MISSING = 64;
    public static readonly EXCEPT = 65;
    public static readonly AVG = 66;
    public static readonly COUNT = 67;
    public static readonly MAX = 68;
    public static readonly MIN = 69;
    public static readonly SUM = 70;
    public static readonly VAR_POP = 71;
    public static readonly VAR_SAMP = 72;
    public static readonly VARIANCE = 73;
    public static readonly STD = 74;
    public static readonly STDDEV = 75;
    public static readonly STDDEV_POP = 76;
    public static readonly STDDEV_SAMP = 77;
    public static readonly SUBSTRING = 78;
    public static readonly TRIM = 79;
    public static readonly END = 80;
    public static readonly FULL = 81;
    public static readonly OFFSET = 82;
    public static readonly INTERVAL = 83;
    public static readonly MICROSECOND = 84;
    public static readonly SECOND = 85;
    public static readonly MINUTE = 86;
    public static readonly HOUR = 87;
    public static readonly DAY = 88;
    public static readonly WEEK = 89;
    public static readonly MONTH = 90;
    public static readonly QUARTER = 91;
    public static readonly YEAR = 92;
    public static readonly SECOND_MICROSECOND = 93;
    public static readonly MINUTE_MICROSECOND = 94;
    public static readonly MINUTE_SECOND = 95;
    public static readonly HOUR_MICROSECOND = 96;
    public static readonly HOUR_SECOND = 97;
    public static readonly HOUR_MINUTE = 98;
    public static readonly DAY_MICROSECOND = 99;
    public static readonly DAY_SECOND = 100;
    public static readonly DAY_MINUTE = 101;
    public static readonly DAY_HOUR = 102;
    public static readonly YEAR_MONTH = 103;
    public static readonly TABLES = 104;
    public static readonly ABS = 105;
    public static readonly ACOS = 106;
    public static readonly ADD = 107;
    public static readonly ADDTIME = 108;
    public static readonly ASCII = 109;
    public static readonly ASIN = 110;
    public static readonly ATAN = 111;
    public static readonly ATAN2 = 112;
    public static readonly CBRT = 113;
    public static readonly CEIL = 114;
    public static readonly CEILING = 115;
    public static readonly CONCAT = 116;
    public static readonly CONCAT_WS = 117;
    public static readonly CONV = 118;
    public static readonly CONVERT_TZ = 119;
    public static readonly COS = 120;
    public static readonly COSH = 121;
    public static readonly COT = 122;
    public static readonly CRC32 = 123;
    public static readonly CURDATE = 124;
    public static readonly CURTIME = 125;
    public static readonly CURRENT_DATE = 126;
    public static readonly CURRENT_TIME = 127;
    public static readonly CURRENT_TIMESTAMP = 128;
    public static readonly DATE = 129;
    public static readonly DATE_ADD = 130;
    public static readonly DATE_FORMAT = 131;
    public static readonly DATE_SUB = 132;
    public static readonly DATEDIFF = 133;
    public static readonly DAYNAME = 134;
    public static readonly DAYOFMONTH = 135;
    public static readonly DAYOFWEEK = 136;
    public static readonly DAYOFYEAR = 137;
    public static readonly DEGREES = 138;
    public static readonly DIVIDE = 139;
    public static readonly E = 140;
    public static readonly EXP = 141;
    public static readonly EXPM1 = 142;
    public static readonly EXTRACT = 143;
    public static readonly FLOOR = 144;
    public static readonly FROM_DAYS = 145;
    public static readonly FROM_UNIXTIME = 146;
    public static readonly GET_FORMAT = 147;
    public static readonly IF = 148;
    public static readonly IFNULL = 149;
    public static readonly ISNULL = 150;
    public static readonly LAST_DAY = 151;
    public static readonly LENGTH = 152;
    public static readonly LN = 153;
    public static readonly LOCALTIME = 154;
    public static readonly LOCALTIMESTAMP = 155;
    public static readonly LOCATE = 156;
    public static readonly LOG = 157;
    public static readonly LOG10 = 158;
    public static readonly LOG2 = 159;
    public static readonly LOWER = 160;
    public static readonly LTRIM = 161;
    public static readonly MAKEDATE = 162;
    public static readonly MAKETIME = 163;
    public static readonly MODULUS = 164;
    public static readonly MONTHNAME = 165;
    public static readonly MULTIPLY = 166;
    public static readonly NOW = 167;
    public static readonly NULLIF = 168;
    public static readonly PERIOD_ADD = 169;
    public static readonly PERIOD_DIFF = 170;
    public static readonly PI = 171;
    public static readonly POSITION = 172;
    public static readonly POW = 173;
    public static readonly POWER = 174;
    public static readonly RADIANS = 175;
    public static readonly RAND = 176;
    public static readonly REPLACE = 177;
    public static readonly RINT = 178;
    public static readonly ROUND = 179;
    public static readonly RTRIM = 180;
    public static readonly REVERSE = 181;
    public static readonly SEC_TO_TIME = 182;
    public static readonly SIGN = 183;
    public static readonly SIGNUM = 184;
    public static readonly SIN = 185;
    public static readonly SINH = 186;
    public static readonly SQRT = 187;
    public static readonly STR_TO_DATE = 188;
    public static readonly SUBDATE = 189;
    public static readonly SUBTIME = 190;
    public static readonly SUBTRACT = 191;
    public static readonly SYSDATE = 192;
    public static readonly TAN = 193;
    public static readonly TIME = 194;
    public static readonly TIMEDIFF = 195;
    public static readonly TIME_FORMAT = 196;
    public static readonly TIME_TO_SEC = 197;
    public static readonly TIMESTAMP = 198;
    public static readonly TRUNCATE = 199;
    public static readonly TO_DAYS = 200;
    public static readonly TO_SECONDS = 201;
    public static readonly UNIX_TIMESTAMP = 202;
    public static readonly UPPER = 203;
    public static readonly UTC_DATE = 204;
    public static readonly UTC_TIME = 205;
    public static readonly UTC_TIMESTAMP = 206;
    public static readonly D = 207;
    public static readonly T = 208;
    public static readonly TS = 209;
    public static readonly LEFT_BRACE = 210;
    public static readonly RIGHT_BRACE = 211;
    public static readonly DENSE_RANK = 212;
    public static readonly RANK = 213;
    public static readonly ROW_NUMBER = 214;
    public static readonly DATE_HISTOGRAM = 215;
    public static readonly DAY_OF_MONTH = 216;
    public static readonly DAY_OF_YEAR = 217;
    public static readonly DAY_OF_WEEK = 218;
    public static readonly EXCLUDE = 219;
    public static readonly EXTENDED_STATS = 220;
    public static readonly FIELD = 221;
    public static readonly FILTER = 222;
    public static readonly GEO_BOUNDING_BOX = 223;
    public static readonly GEO_CELL = 224;
    public static readonly GEO_DISTANCE = 225;
    public static readonly GEO_DISTANCE_RANGE = 226;
    public static readonly GEO_INTERSECTS = 227;
    public static readonly GEO_POLYGON = 228;
    public static readonly HISTOGRAM = 229;
    public static readonly HOUR_OF_DAY = 230;
    public static readonly INCLUDE = 231;
    public static readonly IN_TERMS = 232;
    public static readonly MATCHPHRASE = 233;
    public static readonly MATCH_PHRASE = 234;
    public static readonly MATCHPHRASEQUERY = 235;
    public static readonly SIMPLE_QUERY_STRING = 236;
    public static readonly QUERY_STRING = 237;
    public static readonly MATCH_PHRASE_PREFIX = 238;
    public static readonly MATCHQUERY = 239;
    public static readonly MATCH_QUERY = 240;
    public static readonly MINUTE_OF_DAY = 241;
    public static readonly MINUTE_OF_HOUR = 242;
    public static readonly MONTH_OF_YEAR = 243;
    public static readonly MULTIMATCH = 244;
    public static readonly MULTI_MATCH = 245;
    public static readonly MULTIMATCHQUERY = 246;
    public static readonly NESTED = 247;
    public static readonly PERCENTILES = 248;
    public static readonly REGEXP_QUERY = 249;
    public static readonly REVERSE_NESTED = 250;
    public static readonly QUERY = 251;
    public static readonly RANGE = 252;
    public static readonly SCORE = 253;
    public static readonly SCOREQUERY = 254;
    public static readonly SCORE_QUERY = 255;
    public static readonly SECOND_OF_MINUTE = 256;
    public static readonly STATS = 257;
    public static readonly TERM = 258;
    public static readonly TERMS = 259;
    public static readonly TIMESTAMPADD = 260;
    public static readonly TIMESTAMPDIFF = 261;
    public static readonly TOPHITS = 262;
    public static readonly TYPEOF = 263;
    public static readonly WEEK_OF_YEAR = 264;
    public static readonly WEEKOFYEAR = 265;
    public static readonly WEEKDAY = 266;
    public static readonly WILDCARDQUERY = 267;
    public static readonly WILDCARD_QUERY = 268;
    public static readonly SUBSTR = 269;
    public static readonly STRCMP = 270;
    public static readonly ADDDATE = 271;
    public static readonly YEARWEEK = 272;
    public static readonly ALLOW_LEADING_WILDCARD = 273;
    public static readonly ANALYZER = 274;
    public static readonly ANALYZE_WILDCARD = 275;
    public static readonly AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = 276;
    public static readonly BOOST = 277;
    public static readonly CASE_INSENSITIVE = 278;
    public static readonly CUTOFF_FREQUENCY = 279;
    public static readonly DEFAULT_FIELD = 280;
    public static readonly DEFAULT_OPERATOR = 281;
    public static readonly ESCAPE = 282;
    public static readonly ENABLE_POSITION_INCREMENTS = 283;
    public static readonly FIELDS = 284;
    public static readonly FLAGS = 285;
    public static readonly FUZZINESS = 286;
    public static readonly FUZZY_MAX_EXPANSIONS = 287;
    public static readonly FUZZY_PREFIX_LENGTH = 288;
    public static readonly FUZZY_REWRITE = 289;
    public static readonly FUZZY_TRANSPOSITIONS = 290;
    public static readonly LENIENT = 291;
    public static readonly LOW_FREQ_OPERATOR = 292;
    public static readonly MAX_DETERMINIZED_STATES = 293;
    public static readonly MAX_EXPANSIONS = 294;
    public static readonly MINIMUM_SHOULD_MATCH = 295;
    public static readonly OPERATOR = 296;
    public static readonly PHRASE_SLOP = 297;
    public static readonly PREFIX_LENGTH = 298;
    public static readonly QUOTE_ANALYZER = 299;
    public static readonly QUOTE_FIELD_SUFFIX = 300;
    public static readonly REWRITE = 301;
    public static readonly SLOP = 302;
    public static readonly TIE_BREAKER = 303;
    public static readonly TIME_ZONE = 304;
    public static readonly TYPE = 305;
    public static readonly ZERO_TERMS_QUERY = 306;
    public static readonly HIGHLIGHT = 307;
    public static readonly HIGHLIGHT_PRE_TAGS = 308;
    public static readonly HIGHLIGHT_POST_TAGS = 309;
    public static readonly MATCH_BOOL_PREFIX = 310;
    public static readonly STAR = 311;
    public static readonly SLASH = 312;
    public static readonly MODULE = 313;
    public static readonly PLUS = 314;
    public static readonly MINUS = 315;
    public static readonly DIV = 316;
    public static readonly MOD = 317;
    public static readonly EQUAL_SYMBOL = 318;
    public static readonly GREATER_SYMBOL = 319;
    public static readonly LESS_SYMBOL = 320;
    public static readonly EXCLAMATION_SYMBOL = 321;
    public static readonly BIT_NOT_OP = 322;
    public static readonly BIT_OR_OP = 323;
    public static readonly BIT_AND_OP = 324;
    public static readonly BIT_XOR_OP = 325;
    public static readonly DOT = 326;
    public static readonly LR_BRACKET = 327;
    public static readonly RR_BRACKET = 328;
    public static readonly LT_SQR_PRTHS = 329;
    public static readonly RT_SQR_PRTHS = 330;
    public static readonly COMMA = 331;
    public static readonly SEMI = 332;
    public static readonly AT_SIGN = 333;
    public static readonly ZERO_DECIMAL = 334;
    public static readonly ONE_DECIMAL = 335;
    public static readonly TWO_DECIMAL = 336;
    public static readonly SINGLE_QUOTE_SYMB = 337;
    public static readonly DOUBLE_QUOTE_SYMB = 338;
    public static readonly REVERSE_QUOTE_SYMB = 339;
    public static readonly COLON_SYMB = 340;
    public static readonly START_NATIONAL_STRING_LITERAL = 341;
    public static readonly STRING_LITERAL = 342;
    public static readonly DECIMAL_LITERAL = 343;
    public static readonly HEXADECIMAL_LITERAL = 344;
    public static readonly REAL_LITERAL = 345;
    public static readonly NULL_SPEC_LITERAL = 346;
    public static readonly BIT_STRING = 347;
    public static readonly ID = 348;
    public static readonly DOUBLE_QUOTE_ID = 349;
    public static readonly BACKTICK_QUOTE_ID = 350;
    public static readonly ERROR_RECOGNITION = 351;
    public static readonly RULE_root = 0;
    public static readonly RULE_sqlStatement = 1;
    public static readonly RULE_dmlStatement = 2;
    public static readonly RULE_selectStatement = 3;
    public static readonly RULE_adminStatement = 4;
    public static readonly RULE_showStatement = 5;
    public static readonly RULE_describeStatement = 6;
    public static readonly RULE_columnFilter = 7;
    public static readonly RULE_tableFilter = 8;
    public static readonly RULE_showDescribePattern = 9;
    public static readonly RULE_querySpecification = 10;
    public static readonly RULE_selectClause = 11;
    public static readonly RULE_selectSpec = 12;
    public static readonly RULE_selectElements = 13;
    public static readonly RULE_selectElement = 14;
    public static readonly RULE_fromClause = 15;
    public static readonly RULE_relation = 16;
    public static readonly RULE_whereClause = 17;
    public static readonly RULE_groupByClause = 18;
    public static readonly RULE_groupByElements = 19;
    public static readonly RULE_groupByElement = 20;
    public static readonly RULE_havingClause = 21;
    public static readonly RULE_orderByClause = 22;
    public static readonly RULE_orderByElement = 23;
    public static readonly RULE_limitClause = 24;
    public static readonly RULE_windowFunctionClause = 25;
    public static readonly RULE_windowFunction = 26;
    public static readonly RULE_overClause = 27;
    public static readonly RULE_partitionByClause = 28;
    public static readonly RULE_constant = 29;
    public static readonly RULE_decimalLiteral = 30;
    public static readonly RULE_stringLiteral = 31;
    public static readonly RULE_booleanLiteral = 32;
    public static readonly RULE_realLiteral = 33;
    public static readonly RULE_sign = 34;
    public static readonly RULE_nullLiteral = 35;
    public static readonly RULE_datetimeLiteral = 36;
    public static readonly RULE_dateLiteral = 37;
    public static readonly RULE_timeLiteral = 38;
    public static readonly RULE_timestampLiteral = 39;
    public static readonly RULE_datetimeConstantLiteral = 40;
    public static readonly RULE_intervalLiteral = 41;
    public static readonly RULE_intervalUnit = 42;
    public static readonly RULE_expression = 43;
    public static readonly RULE_predicate = 44;
    public static readonly RULE_expressions = 45;
    public static readonly RULE_expressionAtom = 46;
    public static readonly RULE_comparisonOperator = 47;
    public static readonly RULE_nullNotnull = 48;
    public static readonly RULE_functionCall = 49;
    public static readonly RULE_timestampFunction = 50;
    public static readonly RULE_timestampFunctionName = 51;
    public static readonly RULE_getFormatFunction = 52;
    public static readonly RULE_getFormatType = 53;
    public static readonly RULE_extractFunction = 54;
    public static readonly RULE_simpleDateTimePart = 55;
    public static readonly RULE_complexDateTimePart = 56;
    public static readonly RULE_datetimePart = 57;
    public static readonly RULE_highlightFunction = 58;
    public static readonly RULE_positionFunction = 59;
    public static readonly RULE_matchQueryAltSyntaxFunction = 60;
    public static readonly RULE_scalarFunctionName = 61;
    public static readonly RULE_specificFunction = 62;
    public static readonly RULE_relevanceFunction = 63;
    public static readonly RULE_scoreRelevanceFunction = 64;
    public static readonly RULE_noFieldRelevanceFunction = 65;
    public static readonly RULE_singleFieldRelevanceFunction = 66;
    public static readonly RULE_multiFieldRelevanceFunction = 67;
    public static readonly RULE_altSingleFieldRelevanceFunction = 68;
    public static readonly RULE_altMultiFieldRelevanceFunction = 69;
    public static readonly RULE_convertedDataType = 70;
    public static readonly RULE_caseFuncAlternative = 71;
    public static readonly RULE_aggregateFunction = 72;
    public static readonly RULE_filterClause = 73;
    public static readonly RULE_aggregationFunctionName = 74;
    public static readonly RULE_mathematicalFunctionName = 75;
    public static readonly RULE_trigonometricFunctionName = 76;
    public static readonly RULE_arithmeticFunctionName = 77;
    public static readonly RULE_dateTimeFunctionName = 78;
    public static readonly RULE_textFunctionName = 79;
    public static readonly RULE_flowControlFunctionName = 80;
    public static readonly RULE_noFieldRelevanceFunctionName = 81;
    public static readonly RULE_systemFunctionName = 82;
    public static readonly RULE_nestedFunctionName = 83;
    public static readonly RULE_scoreRelevanceFunctionName = 84;
    public static readonly RULE_singleFieldRelevanceFunctionName = 85;
    public static readonly RULE_multiFieldRelevanceFunctionName = 86;
    public static readonly RULE_altSingleFieldRelevanceFunctionName = 87;
    public static readonly RULE_altMultiFieldRelevanceFunctionName = 88;
    public static readonly RULE_functionArgs = 89;
    public static readonly RULE_functionArg = 90;
    public static readonly RULE_relevanceArg = 91;
    public static readonly RULE_highlightArg = 92;
    public static readonly RULE_relevanceArgName = 93;
    public static readonly RULE_highlightArgName = 94;
    public static readonly RULE_relevanceFieldAndWeight = 95;
    public static readonly RULE_relevanceFieldWeight = 96;
    public static readonly RULE_relevanceField = 97;
    public static readonly RULE_relevanceQuery = 98;
    public static readonly RULE_relevanceArgValue = 99;
    public static readonly RULE_highlightArgValue = 100;
    public static readonly RULE_alternateMultiMatchArgName = 101;
    public static readonly RULE_alternateMultiMatchQuery = 102;
    public static readonly RULE_alternateMultiMatchField = 103;
    public static readonly RULE_tableName = 104;
    public static readonly RULE_columnName = 105;
    public static readonly RULE_allTupleFields = 106;
    public static readonly RULE_alias = 107;
    public static readonly RULE_qualifiedName = 108;
    public static readonly RULE_ident = 109;
    public static readonly RULE_keywordsCanBeId = 110;

    public static readonly literalNames = [
        null, null, null, null, null, "'ALL'", "'AND'", "'AS'", "'ASC'", 
        "'BOOLEAN'", "'BETWEEN'", "'BY'", "'CASE'", "'CAST'", "'CROSS'", 
        "'COLUMNS'", "'DATETIME'", "'DELETE'", "'DESC'", "'DESCRIBE'", "'DISTINCT'", 
        "'DOUBLE'", "'ELSE'", "'EXISTS'", "'FALSE'", "'FLOAT'", "'FIRST'", 
        "'FROM'", "'GROUP'", "'HAVING'", "'IN'", "'INNER'", "'INT'", "'INTEGER'", 
        "'IS'", "'JOIN'", "'LAST'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LONG'", 
        "'MATCH'", "'NATURAL'", null, "'NOT'", "'NULL'", "'NULLS'", "'ON'", 
        "'OR'", "'ORDER'", "'OUTER'", "'OVER'", "'PARTITION'", "'REGEXP'", 
        "'RIGHT'", "'SELECT'", "'SHOW'", "'STRING'", "'THEN'", "'TRUE'", 
        "'UNION'", "'USING'", "'WHEN'", "'WHERE'", null, "'MINUS'", "'AVG'", 
        "'COUNT'", "'MAX'", "'MIN'", "'SUM'", "'VAR_POP'", "'VAR_SAMP'", 
        "'VARIANCE'", "'STD'", "'STDDEV'", "'STDDEV_POP'", "'STDDEV_SAMP'", 
        "'SUBSTRING'", "'TRIM'", "'END'", "'FULL'", "'OFFSET'", "'INTERVAL'", 
        "'MICROSECOND'", "'SECOND'", "'MINUTE'", "'HOUR'", "'DAY'", "'WEEK'", 
        "'MONTH'", "'QUARTER'", "'YEAR'", "'SECOND_MICROSECOND'", "'MINUTE_MICROSECOND'", 
        "'MINUTE_SECOND'", "'HOUR_MICROSECOND'", "'HOUR_SECOND'", "'HOUR_MINUTE'", 
        "'DAY_MICROSECOND'", "'DAY_SECOND'", "'DAY_MINUTE'", "'DAY_HOUR'", 
        "'YEAR_MONTH'", "'TABLES'", "'ABS'", "'ACOS'", "'ADD'", "'ADDTIME'", 
        "'ASCII'", "'ASIN'", "'ATAN'", "'ATAN2'", "'CBRT'", "'CEIL'", "'CEILING'", 
        "'CONCAT'", "'CONCAT_WS'", "'CONV'", "'CONVERT_TZ'", "'COS'", "'COSH'", 
        "'COT'", "'CRC32'", "'CURDATE'", "'CURTIME'", "'CURRENT_DATE'", 
        "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'DATE'", "'DATE_ADD'", 
        "'DATE_FORMAT'", "'DATE_SUB'", "'DATEDIFF'", "'DAYNAME'", "'DAYOFMONTH'", 
        "'DAYOFWEEK'", "'DAYOFYEAR'", "'DEGREES'", "'DIVIDE'", "'E'", "'EXP'", 
        "'EXPM1'", "'EXTRACT'", "'FLOOR'", "'FROM_DAYS'", "'FROM_UNIXTIME'", 
        "'GET_FORMAT'", "'IF'", "'IFNULL'", "'ISNULL'", "'LAST_DAY'", "'LENGTH'", 
        "'LN'", "'LOCALTIME'", "'LOCALTIMESTAMP'", "'LOCATE'", "'LOG'", 
        "'LOG10'", "'LOG2'", "'LOWER'", "'LTRIM'", "'MAKEDATE'", "'MAKETIME'", 
        "'MODULUS'", "'MONTHNAME'", "'MULTIPLY'", "'NOW'", "'NULLIF'", "'PERIOD_ADD'", 
        "'PERIOD_DIFF'", "'PI'", "'POSITION'", "'POW'", "'POWER'", "'RADIANS'", 
        "'RAND'", "'REPLACE'", "'RINT'", "'ROUND'", "'RTRIM'", "'REVERSE'", 
        "'SEC_TO_TIME'", "'SIGN'", "'SIGNUM'", "'SIN'", "'SINH'", "'SQRT'", 
        "'STR_TO_DATE'", "'SUBDATE'", "'SUBTIME'", "'SUBTRACT'", "'SYSDATE'", 
        "'TAN'", "'TIME'", "'TIMEDIFF'", "'TIME_FORMAT'", "'TIME_TO_SEC'", 
        "'TIMESTAMP'", "'TRUNCATE'", "'TO_DAYS'", "'TO_SECONDS'", "'UNIX_TIMESTAMP'", 
        "'UPPER'", "'UTC_DATE'", "'UTC_TIME'", "'UTC_TIMESTAMP'", "'D'", 
        "'T'", "'TS'", "'{'", "'}'", "'DENSE_RANK'", "'RANK'", "'ROW_NUMBER'", 
        "'DATE_HISTOGRAM'", "'DAY_OF_MONTH'", "'DAY_OF_YEAR'", "'DAY_OF_WEEK'", 
        "'EXCLUDE'", "'EXTENDED_STATS'", "'FIELD'", "'FILTER'", "'GEO_BOUNDING_BOX'", 
        "'GEO_CELL'", "'GEO_DISTANCE'", "'GEO_DISTANCE_RANGE'", "'GEO_INTERSECTS'", 
        "'GEO_POLYGON'", "'HISTOGRAM'", "'HOUR_OF_DAY'", "'INCLUDE'", "'IN_TERMS'", 
        "'MATCHPHRASE'", "'MATCH_PHRASE'", "'MATCHPHRASEQUERY'", "'SIMPLE_QUERY_STRING'", 
        "'QUERY_STRING'", "'MATCH_PHRASE_PREFIX'", "'MATCHQUERY'", "'MATCH_QUERY'", 
        "'MINUTE_OF_DAY'", "'MINUTE_OF_HOUR'", "'MONTH_OF_YEAR'", "'MULTIMATCH'", 
        "'MULTI_MATCH'", "'MULTIMATCHQUERY'", "'NESTED'", "'PERCENTILES'", 
        "'REGEXP_QUERY'", "'REVERSE_NESTED'", "'QUERY'", "'RANGE'", "'SCORE'", 
        "'SCOREQUERY'", "'SCORE_QUERY'", "'SECOND_OF_MINUTE'", "'STATS'", 
        "'TERM'", "'TERMS'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TOPHITS'", 
        "'TYPEOF'", "'WEEK_OF_YEAR'", "'WEEKOFYEAR'", "'WEEKDAY'", "'WILDCARDQUERY'", 
        "'WILDCARD_QUERY'", "'SUBSTR'", "'STRCMP'", "'ADDDATE'", "'YEARWEEK'", 
        "'ALLOW_LEADING_WILDCARD'", "'ANALYZER'", "'ANALYZE_WILDCARD'", 
        "'AUTO_GENERATE_SYNONYMS_PHRASE_QUERY'", "'BOOST'", "'CASE_INSENSITIVE'", 
        "'CUTOFF_FREQUENCY'", "'DEFAULT_FIELD'", "'DEFAULT_OPERATOR'", "'ESCAPE'", 
        "'ENABLE_POSITION_INCREMENTS'", "'FIELDS'", "'FLAGS'", "'FUZZINESS'", 
        "'FUZZY_MAX_EXPANSIONS'", "'FUZZY_PREFIX_LENGTH'", "'FUZZY_REWRITE'", 
        "'FUZZY_TRANSPOSITIONS'", "'LENIENT'", "'LOW_FREQ_OPERATOR'", "'MAX_DETERMINIZED_STATES'", 
        "'MAX_EXPANSIONS'", "'MINIMUM_SHOULD_MATCH'", "'OPERATOR'", "'PHRASE_SLOP'", 
        "'PREFIX_LENGTH'", "'QUOTE_ANALYZER'", "'QUOTE_FIELD_SUFFIX'", "'REWRITE'", 
        "'SLOP'", "'TIE_BREAKER'", "'TIME_ZONE'", "'TYPE'", "'ZERO_TERMS_QUERY'", 
        "'HIGHLIGHT'", "'PRE_TAGS'", "'POST_TAGS'", "'MATCH_BOOL_PREFIX'", 
        "'*'", "'/'", "'%'", "'+'", "'-'", "'DIV'", "'MOD'", "'='", "'>'", 
        "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'('", "')'", "'['", 
        "']'", "','", "';'", "'@'", "'0'", "'1'", "'2'", "'''", "'\"'", 
        "'`'", "':'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "SPEC_SQL_COMMENT", "COMMENT_INPUT", "LINE_COMMENT", 
        "ALL", "AND", "AS", "ASC", "BOOLEAN", "BETWEEN", "BY", "CASE", "CAST", 
        "CROSS", "COLUMNS", "DATETIME", "DELETE", "DESC", "DESCRIBE", "DISTINCT", 
        "DOUBLE", "ELSE", "EXISTS", "FALSE", "FLOAT", "FIRST", "FROM", "GROUP", 
        "HAVING", "IN", "INNER", "INT", "INTEGER", "IS", "JOIN", "LAST", 
        "LEFT", "LIKE", "LIMIT", "LONG", "MATCH", "NATURAL", "MISSING_LITERAL", 
        "NOT", "NULL_LITERAL", "NULLS", "ON", "OR", "ORDER", "OUTER", "OVER", 
        "PARTITION", "REGEXP", "RIGHT", "SELECT", "SHOW", "STRING", "THEN", 
        "TRUE", "UNION", "USING", "WHEN", "WHERE", "MISSING", "EXCEPT", 
        "AVG", "COUNT", "MAX", "MIN", "SUM", "VAR_POP", "VAR_SAMP", "VARIANCE", 
        "STD", "STDDEV", "STDDEV_POP", "STDDEV_SAMP", "SUBSTRING", "TRIM", 
        "END", "FULL", "OFFSET", "INTERVAL", "MICROSECOND", "SECOND", "MINUTE", 
        "HOUR", "DAY", "WEEK", "MONTH", "QUARTER", "YEAR", "SECOND_MICROSECOND", 
        "MINUTE_MICROSECOND", "MINUTE_SECOND", "HOUR_MICROSECOND", "HOUR_SECOND", 
        "HOUR_MINUTE", "DAY_MICROSECOND", "DAY_SECOND", "DAY_MINUTE", "DAY_HOUR", 
        "YEAR_MONTH", "TABLES", "ABS", "ACOS", "ADD", "ADDTIME", "ASCII", 
        "ASIN", "ATAN", "ATAN2", "CBRT", "CEIL", "CEILING", "CONCAT", "CONCAT_WS", 
        "CONV", "CONVERT_TZ", "COS", "COSH", "COT", "CRC32", "CURDATE", 
        "CURTIME", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
        "DATE", "DATE_ADD", "DATE_FORMAT", "DATE_SUB", "DATEDIFF", "DAYNAME", 
        "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "DEGREES", "DIVIDE", "E", 
        "EXP", "EXPM1", "EXTRACT", "FLOOR", "FROM_DAYS", "FROM_UNIXTIME", 
        "GET_FORMAT", "IF", "IFNULL", "ISNULL", "LAST_DAY", "LENGTH", "LN", 
        "LOCALTIME", "LOCALTIMESTAMP", "LOCATE", "LOG", "LOG10", "LOG2", 
        "LOWER", "LTRIM", "MAKEDATE", "MAKETIME", "MODULUS", "MONTHNAME", 
        "MULTIPLY", "NOW", "NULLIF", "PERIOD_ADD", "PERIOD_DIFF", "PI", 
        "POSITION", "POW", "POWER", "RADIANS", "RAND", "REPLACE", "RINT", 
        "ROUND", "RTRIM", "REVERSE", "SEC_TO_TIME", "SIGN", "SIGNUM", "SIN", 
        "SINH", "SQRT", "STR_TO_DATE", "SUBDATE", "SUBTIME", "SUBTRACT", 
        "SYSDATE", "TAN", "TIME", "TIMEDIFF", "TIME_FORMAT", "TIME_TO_SEC", 
        "TIMESTAMP", "TRUNCATE", "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", 
        "UPPER", "UTC_DATE", "UTC_TIME", "UTC_TIMESTAMP", "D", "T", "TS", 
        "LEFT_BRACE", "RIGHT_BRACE", "DENSE_RANK", "RANK", "ROW_NUMBER", 
        "DATE_HISTOGRAM", "DAY_OF_MONTH", "DAY_OF_YEAR", "DAY_OF_WEEK", 
        "EXCLUDE", "EXTENDED_STATS", "FIELD", "FILTER", "GEO_BOUNDING_BOX", 
        "GEO_CELL", "GEO_DISTANCE", "GEO_DISTANCE_RANGE", "GEO_INTERSECTS", 
        "GEO_POLYGON", "HISTOGRAM", "HOUR_OF_DAY", "INCLUDE", "IN_TERMS", 
        "MATCHPHRASE", "MATCH_PHRASE", "MATCHPHRASEQUERY", "SIMPLE_QUERY_STRING", 
        "QUERY_STRING", "MATCH_PHRASE_PREFIX", "MATCHQUERY", "MATCH_QUERY", 
        "MINUTE_OF_DAY", "MINUTE_OF_HOUR", "MONTH_OF_YEAR", "MULTIMATCH", 
        "MULTI_MATCH", "MULTIMATCHQUERY", "NESTED", "PERCENTILES", "REGEXP_QUERY", 
        "REVERSE_NESTED", "QUERY", "RANGE", "SCORE", "SCOREQUERY", "SCORE_QUERY", 
        "SECOND_OF_MINUTE", "STATS", "TERM", "TERMS", "TIMESTAMPADD", "TIMESTAMPDIFF", 
        "TOPHITS", "TYPEOF", "WEEK_OF_YEAR", "WEEKOFYEAR", "WEEKDAY", "WILDCARDQUERY", 
        "WILDCARD_QUERY", "SUBSTR", "STRCMP", "ADDDATE", "YEARWEEK", "ALLOW_LEADING_WILDCARD", 
        "ANALYZER", "ANALYZE_WILDCARD", "AUTO_GENERATE_SYNONYMS_PHRASE_QUERY", 
        "BOOST", "CASE_INSENSITIVE", "CUTOFF_FREQUENCY", "DEFAULT_FIELD", 
        "DEFAULT_OPERATOR", "ESCAPE", "ENABLE_POSITION_INCREMENTS", "FIELDS", 
        "FLAGS", "FUZZINESS", "FUZZY_MAX_EXPANSIONS", "FUZZY_PREFIX_LENGTH", 
        "FUZZY_REWRITE", "FUZZY_TRANSPOSITIONS", "LENIENT", "LOW_FREQ_OPERATOR", 
        "MAX_DETERMINIZED_STATES", "MAX_EXPANSIONS", "MINIMUM_SHOULD_MATCH", 
        "OPERATOR", "PHRASE_SLOP", "PREFIX_LENGTH", "QUOTE_ANALYZER", "QUOTE_FIELD_SUFFIX", 
        "REWRITE", "SLOP", "TIE_BREAKER", "TIME_ZONE", "TYPE", "ZERO_TERMS_QUERY", 
        "HIGHLIGHT", "HIGHLIGHT_PRE_TAGS", "HIGHLIGHT_POST_TAGS", "MATCH_BOOL_PREFIX", 
        "STAR", "SLASH", "MODULE", "PLUS", "MINUS", "DIV", "MOD", "EQUAL_SYMBOL", 
        "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", 
        "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LR_BRACKET", "RR_BRACKET", 
        "LT_SQR_PRTHS", "RT_SQR_PRTHS", "COMMA", "SEMI", "AT_SIGN", "ZERO_DECIMAL", 
        "ONE_DECIMAL", "TWO_DECIMAL", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
        "REVERSE_QUOTE_SYMB", "COLON_SYMB", "START_NATIONAL_STRING_LITERAL", 
        "STRING_LITERAL", "DECIMAL_LITERAL", "HEXADECIMAL_LITERAL", "REAL_LITERAL", 
        "NULL_SPEC_LITERAL", "BIT_STRING", "ID", "DOUBLE_QUOTE_ID", "BACKTICK_QUOTE_ID", 
        "ERROR_RECOGNITION"
    ];
    public static readonly ruleNames = [
        "root", "sqlStatement", "dmlStatement", "selectStatement", "adminStatement", 
        "showStatement", "describeStatement", "columnFilter", "tableFilter", 
        "showDescribePattern", "querySpecification", "selectClause", "selectSpec", 
        "selectElements", "selectElement", "fromClause", "relation", "whereClause", 
        "groupByClause", "groupByElements", "groupByElement", "havingClause", 
        "orderByClause", "orderByElement", "limitClause", "windowFunctionClause", 
        "windowFunction", "overClause", "partitionByClause", "constant", 
        "decimalLiteral", "stringLiteral", "booleanLiteral", "realLiteral", 
        "sign", "nullLiteral", "datetimeLiteral", "dateLiteral", "timeLiteral", 
        "timestampLiteral", "datetimeConstantLiteral", "intervalLiteral", 
        "intervalUnit", "expression", "predicate", "expressions", "expressionAtom", 
        "comparisonOperator", "nullNotnull", "functionCall", "timestampFunction", 
        "timestampFunctionName", "getFormatFunction", "getFormatType", "extractFunction", 
        "simpleDateTimePart", "complexDateTimePart", "datetimePart", "highlightFunction", 
        "positionFunction", "matchQueryAltSyntaxFunction", "scalarFunctionName", 
        "specificFunction", "relevanceFunction", "scoreRelevanceFunction", 
        "noFieldRelevanceFunction", "singleFieldRelevanceFunction", "multiFieldRelevanceFunction", 
        "altSingleFieldRelevanceFunction", "altMultiFieldRelevanceFunction", 
        "convertedDataType", "caseFuncAlternative", "aggregateFunction", 
        "filterClause", "aggregationFunctionName", "mathematicalFunctionName", 
        "trigonometricFunctionName", "arithmeticFunctionName", "dateTimeFunctionName", 
        "textFunctionName", "flowControlFunctionName", "noFieldRelevanceFunctionName", 
        "systemFunctionName", "nestedFunctionName", "scoreRelevanceFunctionName", 
        "singleFieldRelevanceFunctionName", "multiFieldRelevanceFunctionName", 
        "altSingleFieldRelevanceFunctionName", "altMultiFieldRelevanceFunctionName", 
        "functionArgs", "functionArg", "relevanceArg", "highlightArg", "relevanceArgName", 
        "highlightArgName", "relevanceFieldAndWeight", "relevanceFieldWeight", 
        "relevanceField", "relevanceQuery", "relevanceArgValue", "highlightArgValue", 
        "alternateMultiMatchArgName", "alternateMultiMatchQuery", "alternateMultiMatchField", 
        "tableName", "columnName", "allTupleFields", "alias", "qualifiedName", 
        "ident", "keywordsCanBeId",
    ];

    public get grammarFileName(): string { return "OpenSearchSQLParser.g4"; }
    public get literalNames(): (string | null)[] { return OpenSearchSQLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return OpenSearchSQLParser.symbolicNames; }
    public get ruleNames(): string[] { return OpenSearchSQLParser.ruleNames; }
    public get serializedATN(): number[] { return OpenSearchSQLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, OpenSearchSQLParser._ATN, OpenSearchSQLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public root(): RootContext {
        let localContext = new RootContext(this.context, this.state);
        this.enterRule(localContext, 0, OpenSearchSQLParser.RULE_root);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19 || _la === 55 || _la === 56) {
                {
                this.state = 222;
                this.sqlStatement();
                }
            }

            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 332) {
                {
                this.state = 225;
                this.match(OpenSearchSQLParser.SEMI);
                }
            }

            this.state = 228;
            this.match(OpenSearchSQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sqlStatement(): SqlStatementContext {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, OpenSearchSQLParser.RULE_sqlStatement);
        try {
            this.state = 232;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.SELECT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 230;
                this.dmlStatement();
                }
                break;
            case OpenSearchSQLParser.DESCRIBE:
            case OpenSearchSQLParser.SHOW:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 231;
                this.adminStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dmlStatement(): DmlStatementContext {
        let localContext = new DmlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, OpenSearchSQLParser.RULE_dmlStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 234;
            this.selectStatement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStatement(): SelectStatementContext {
        let localContext = new SelectStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, OpenSearchSQLParser.RULE_selectStatement);
        try {
            localContext = new SimpleSelectContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 236;
            this.querySpecification();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public adminStatement(): AdminStatementContext {
        let localContext = new AdminStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, OpenSearchSQLParser.RULE_adminStatement);
        try {
            this.state = 240;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.SHOW:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 238;
                this.showStatement();
                }
                break;
            case OpenSearchSQLParser.DESCRIBE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 239;
                this.describeStatement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showStatement(): ShowStatementContext {
        let localContext = new ShowStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, OpenSearchSQLParser.RULE_showStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 242;
            this.match(OpenSearchSQLParser.SHOW);
            this.state = 243;
            this.match(OpenSearchSQLParser.TABLES);
            this.state = 244;
            this.tableFilter();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public describeStatement(): DescribeStatementContext {
        let localContext = new DescribeStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, OpenSearchSQLParser.RULE_describeStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.match(OpenSearchSQLParser.DESCRIBE);
            this.state = 247;
            this.match(OpenSearchSQLParser.TABLES);
            this.state = 248;
            this.tableFilter();
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 249;
                this.columnFilter();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnFilter(): ColumnFilterContext {
        let localContext = new ColumnFilterContext(this.context, this.state);
        this.enterRule(localContext, 14, OpenSearchSQLParser.RULE_columnFilter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 252;
            this.match(OpenSearchSQLParser.COLUMNS);
            this.state = 253;
            this.match(OpenSearchSQLParser.LIKE);
            this.state = 254;
            this.showDescribePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableFilter(): TableFilterContext {
        let localContext = new TableFilterContext(this.context, this.state);
        this.enterRule(localContext, 16, OpenSearchSQLParser.RULE_tableFilter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 256;
            this.match(OpenSearchSQLParser.LIKE);
            this.state = 257;
            this.showDescribePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showDescribePattern(): ShowDescribePatternContext {
        let localContext = new ShowDescribePatternContext(this.context, this.state);
        this.enterRule(localContext, 18, OpenSearchSQLParser.RULE_showDescribePattern);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public querySpecification(): QuerySpecificationContext {
        let localContext = new QuerySpecificationContext(this.context, this.state);
        this.enterRule(localContext, 20, OpenSearchSQLParser.RULE_querySpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 261;
            this.selectClause();
            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 262;
                this.fromClause();
                }
            }

            this.state = 266;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 39) {
                {
                this.state = 265;
                this.limitClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectClause(): SelectClauseContext {
        let localContext = new SelectClauseContext(this.context, this.state);
        this.enterRule(localContext, 22, OpenSearchSQLParser.RULE_selectClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 268;
            this.match(OpenSearchSQLParser.SELECT);
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5 || _la === 20) {
                {
                this.state = 269;
                this.selectSpec();
                }
            }

            this.state = 272;
            this.selectElements();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectSpec(): SelectSpecContext {
        let localContext = new SelectSpecContext(this.context, this.state);
        this.enterRule(localContext, 24, OpenSearchSQLParser.RULE_selectSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 274;
            _la = this.tokenStream.LA(1);
            if(!(_la === 5 || _la === 20)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectElements(): SelectElementsContext {
        let localContext = new SelectElementsContext(this.context, this.state);
        this.enterRule(localContext, 26, OpenSearchSQLParser.RULE_selectElements);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.STAR:
                {
                this.state = 276;
                localContext._star = this.match(OpenSearchSQLParser.STAR);
                }
                break;
            case OpenSearchSQLParser.CASE:
            case OpenSearchSQLParser.CAST:
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.FALSE:
            case OpenSearchSQLParser.FIRST:
            case OpenSearchSQLParser.LAST:
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.MATCH:
            case OpenSearchSQLParser.NOT:
            case OpenSearchSQLParser.NULL_LITERAL:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.TRUE:
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.VAR_POP:
            case OpenSearchSQLParser.VAR_SAMP:
            case OpenSearchSQLParser.VARIANCE:
            case OpenSearchSQLParser.STD:
            case OpenSearchSQLParser.STDDEV:
            case OpenSearchSQLParser.STDDEV_POP:
            case OpenSearchSQLParser.STDDEV_SAMP:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.FULL:
            case OpenSearchSQLParser.INTERVAL:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.EXTRACT:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.GET_FORMAT:
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.NULLIF:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POSITION:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.D:
            case OpenSearchSQLParser.T:
            case OpenSearchSQLParser.TS:
            case OpenSearchSQLParser.LEFT_BRACE:
            case OpenSearchSQLParser.DENSE_RANK:
            case OpenSearchSQLParser.RANK:
            case OpenSearchSQLParser.ROW_NUMBER:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.FIELD:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MATCHPHRASE:
            case OpenSearchSQLParser.MATCH_PHRASE:
            case OpenSearchSQLParser.MATCHPHRASEQUERY:
            case OpenSearchSQLParser.SIMPLE_QUERY_STRING:
            case OpenSearchSQLParser.QUERY_STRING:
            case OpenSearchSQLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchSQLParser.MATCHQUERY:
            case OpenSearchSQLParser.MATCH_QUERY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.MULTIMATCH:
            case OpenSearchSQLParser.MULTI_MATCH:
            case OpenSearchSQLParser.MULTIMATCHQUERY:
            case OpenSearchSQLParser.NESTED:
            case OpenSearchSQLParser.QUERY:
            case OpenSearchSQLParser.SCORE:
            case OpenSearchSQLParser.SCOREQUERY:
            case OpenSearchSQLParser.SCORE_QUERY:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.TIMESTAMPADD:
            case OpenSearchSQLParser.TIMESTAMPDIFF:
            case OpenSearchSQLParser.TYPEOF:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.WILDCARDQUERY:
            case OpenSearchSQLParser.WILDCARD_QUERY:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
            case OpenSearchSQLParser.TYPE:
            case OpenSearchSQLParser.HIGHLIGHT:
            case OpenSearchSQLParser.MATCH_BOOL_PREFIX:
            case OpenSearchSQLParser.PLUS:
            case OpenSearchSQLParser.MINUS:
            case OpenSearchSQLParser.MOD:
            case OpenSearchSQLParser.DOT:
            case OpenSearchSQLParser.LR_BRACKET:
            case OpenSearchSQLParser.ZERO_DECIMAL:
            case OpenSearchSQLParser.ONE_DECIMAL:
            case OpenSearchSQLParser.TWO_DECIMAL:
            case OpenSearchSQLParser.STRING_LITERAL:
            case OpenSearchSQLParser.DECIMAL_LITERAL:
            case OpenSearchSQLParser.REAL_LITERAL:
            case OpenSearchSQLParser.ID:
            case OpenSearchSQLParser.DOUBLE_QUOTE_ID:
            case OpenSearchSQLParser.BACKTICK_QUOTE_ID:
                {
                this.state = 277;
                this.selectElement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 280;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 281;
                this.selectElement();
                }
                }
                this.state = 286;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectElement(): SelectElementContext {
        let localContext = new SelectElementContext(this.context, this.state);
        this.enterRule(localContext, 28, OpenSearchSQLParser.RULE_selectElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.expression(0);
            this.state = 292;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67174528) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 3221487619) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 33500167) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 4294967295) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 4294966207) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 4294967287) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 538149375) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 4089479239) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & 2101249) !== 0) || _la === 348 || _la === 350) {
                {
                this.state = 289;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 288;
                    this.match(OpenSearchSQLParser.AS);
                    }
                }

                this.state = 291;
                this.alias();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 30, OpenSearchSQLParser.RULE_fromClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            this.match(OpenSearchSQLParser.FROM);
            this.state = 295;
            this.relation();
            this.state = 297;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 63) {
                {
                this.state = 296;
                this.whereClause();
                }
            }

            this.state = 300;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28) {
                {
                this.state = 299;
                this.groupByClause();
                }
            }

            this.state = 303;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 302;
                this.havingClause();
                }
            }

            this.state = 306;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 305;
                this.orderByClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relation(): RelationContext {
        let localContext = new RelationContext(this.context, this.state);
        this.enterRule(localContext, 32, OpenSearchSQLParser.RULE_relation);
        let _la: number;
        try {
            this.state = 323;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.FIRST:
            case OpenSearchSQLParser.LAST:
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.FULL:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.NULLIF:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.D:
            case OpenSearchSQLParser.T:
            case OpenSearchSQLParser.TS:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.FIELD:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.NESTED:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.TYPEOF:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
            case OpenSearchSQLParser.TYPE:
            case OpenSearchSQLParser.MOD:
            case OpenSearchSQLParser.DOT:
            case OpenSearchSQLParser.ID:
            case OpenSearchSQLParser.BACKTICK_QUOTE_ID:
                localContext = new TableAsRelationContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 308;
                this.tableName();
                this.state = 313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67174528) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 3221487619) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 33500167) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 4294967295) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 4294966207) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 4294967287) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 538149375) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 4089479239) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & 2101249) !== 0) || _la === 348 || _la === 350) {
                    {
                    this.state = 310;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 7) {
                        {
                        this.state = 309;
                        this.match(OpenSearchSQLParser.AS);
                        }
                    }

                    this.state = 312;
                    this.alias();
                    }
                }

                }
                break;
            case OpenSearchSQLParser.LR_BRACKET:
                localContext = new SubqueryAsRelationContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 315;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 316;
                (localContext as SubqueryAsRelationContext)._subquery = this.querySpecification();
                this.state = 317;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                this.state = 319;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 318;
                    this.match(OpenSearchSQLParser.AS);
                    }
                }

                this.state = 321;
                this.alias();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 34, OpenSearchSQLParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.match(OpenSearchSQLParser.WHERE);
            this.state = 326;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 36, OpenSearchSQLParser.RULE_groupByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(OpenSearchSQLParser.GROUP);
            this.state = 329;
            this.match(OpenSearchSQLParser.BY);
            this.state = 330;
            this.groupByElements();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByElements(): GroupByElementsContext {
        let localContext = new GroupByElementsContext(this.context, this.state);
        this.enterRule(localContext, 38, OpenSearchSQLParser.RULE_groupByElements);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
            this.groupByElement();
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 333;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 334;
                this.groupByElement();
                }
                }
                this.state = 339;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByElement(): GroupByElementContext {
        let localContext = new GroupByElementContext(this.context, this.state);
        this.enterRule(localContext, 40, OpenSearchSQLParser.RULE_groupByElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 340;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 42, OpenSearchSQLParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 342;
            this.match(OpenSearchSQLParser.HAVING);
            this.state = 343;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 44, OpenSearchSQLParser.RULE_orderByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 345;
            this.match(OpenSearchSQLParser.ORDER);
            this.state = 346;
            this.match(OpenSearchSQLParser.BY);
            this.state = 347;
            this.orderByElement();
            this.state = 352;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 348;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 349;
                this.orderByElement();
                }
                }
                this.state = 354;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByElement(): OrderByElementContext {
        let localContext = new OrderByElementContext(this.context, this.state);
        this.enterRule(localContext, 46, OpenSearchSQLParser.RULE_orderByElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 355;
            this.expression(0);
            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8 || _la === 18) {
                {
                this.state = 356;
                localContext._order = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 8 || _la === 18)) {
                    localContext._order = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 361;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 359;
                this.match(OpenSearchSQLParser.NULLS);
                this.state = 360;
                _la = this.tokenStream.LA(1);
                if(!(_la === 26 || _la === 36)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 48, OpenSearchSQLParser.RULE_limitClause);
        try {
            this.state = 375;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 363;
                this.match(OpenSearchSQLParser.LIMIT);
                this.state = 367;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
                case 1:
                    {
                    this.state = 364;
                    localContext._offset = this.decimalLiteral();
                    this.state = 365;
                    this.match(OpenSearchSQLParser.COMMA);
                    }
                    break;
                }
                this.state = 369;
                localContext._limit = this.decimalLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 370;
                this.match(OpenSearchSQLParser.LIMIT);
                this.state = 371;
                localContext._limit = this.decimalLiteral();
                this.state = 372;
                this.match(OpenSearchSQLParser.OFFSET);
                this.state = 373;
                localContext._offset = this.decimalLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFunctionClause(): WindowFunctionClauseContext {
        let localContext = new WindowFunctionClauseContext(this.context, this.state);
        this.enterRule(localContext, 50, OpenSearchSQLParser.RULE_windowFunctionClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 377;
            localContext._function_ = this.windowFunction();
            this.state = 378;
            this.overClause();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowFunction(): WindowFunctionContext {
        let localContext = new WindowFunctionContext(this.context, this.state);
        this.enterRule(localContext, 52, OpenSearchSQLParser.RULE_windowFunction);
        let _la: number;
        try {
            this.state = 387;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DENSE_RANK:
            case OpenSearchSQLParser.RANK:
            case OpenSearchSQLParser.ROW_NUMBER:
                localContext = new ScalarWindowFunctionContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 380;
                (localContext as ScalarWindowFunctionContext)._functionName = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 7) !== 0))) {
                    (localContext as ScalarWindowFunctionContext)._functionName = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 381;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 383;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
                case 1:
                    {
                    this.state = 382;
                    this.functionArgs();
                    }
                    break;
                }
                this.state = 385;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.VAR_POP:
            case OpenSearchSQLParser.VAR_SAMP:
            case OpenSearchSQLParser.VARIANCE:
            case OpenSearchSQLParser.STD:
            case OpenSearchSQLParser.STDDEV:
            case OpenSearchSQLParser.STDDEV_POP:
            case OpenSearchSQLParser.STDDEV_SAMP:
                localContext = new AggregateWindowFunctionContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 386;
                this.aggregateFunction();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public overClause(): OverClauseContext {
        let localContext = new OverClauseContext(this.context, this.state);
        this.enterRule(localContext, 54, OpenSearchSQLParser.RULE_overClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 389;
            this.match(OpenSearchSQLParser.OVER);
            this.state = 390;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 391;
                this.partitionByClause();
                }
            }

            this.state = 395;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 394;
                this.orderByClause();
                }
            }

            this.state = 397;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 56, OpenSearchSQLParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.match(OpenSearchSQLParser.PARTITION);
            this.state = 400;
            this.match(OpenSearchSQLParser.BY);
            this.state = 401;
            this.expression(0);
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 402;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 403;
                this.expression(0);
                }
                }
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constant(): ConstantContext {
        let localContext = new ConstantContext(this.context, this.state);
        this.enterRule(localContext, 58, OpenSearchSQLParser.RULE_constant);
        let _la: number;
        try {
            this.state = 422;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                localContext = new StringContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.stringLiteral();
                }
                break;
            case 2:
                localContext = new SignedDecimalContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 411;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 314 || _la === 315) {
                    {
                    this.state = 410;
                    this.sign();
                    }
                }

                this.state = 413;
                this.decimalLiteral();
                }
                break;
            case 3:
                localContext = new SignedRealContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 415;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 314 || _la === 315) {
                    {
                    this.state = 414;
                    this.sign();
                    }
                }

                this.state = 417;
                this.realLiteral();
                }
                break;
            case 4:
                localContext = new BooleanContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 418;
                this.booleanLiteral();
                }
                break;
            case 5:
                localContext = new DatetimeContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 419;
                this.datetimeLiteral();
                }
                break;
            case 6:
                localContext = new IntervalContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 420;
                this.intervalLiteral();
                }
                break;
            case 7:
                localContext = new NullContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 421;
                this.nullLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decimalLiteral(): DecimalLiteralContext {
        let localContext = new DecimalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 60, OpenSearchSQLParser.RULE_decimalLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 424;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 334)) & ~0x1F) === 0 && ((1 << (_la - 334)) & 519) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringLiteral(): StringLiteralContext {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 62, OpenSearchSQLParser.RULE_stringLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 426;
            _la = this.tokenStream.LA(1);
            if(!(_la === 342 || _la === 349)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanLiteral(): BooleanLiteralContext {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 64, OpenSearchSQLParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            _la = this.tokenStream.LA(1);
            if(!(_la === 24 || _la === 59)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public realLiteral(): RealLiteralContext {
        let localContext = new RealLiteralContext(this.context, this.state);
        this.enterRule(localContext, 66, OpenSearchSQLParser.RULE_realLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 430;
            this.match(OpenSearchSQLParser.REAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sign(): SignContext {
        let localContext = new SignContext(this.context, this.state);
        this.enterRule(localContext, 68, OpenSearchSQLParser.RULE_sign);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 432;
            _la = this.tokenStream.LA(1);
            if(!(_la === 314 || _la === 315)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nullLiteral(): NullLiteralContext {
        let localContext = new NullLiteralContext(this.context, this.state);
        this.enterRule(localContext, 70, OpenSearchSQLParser.RULE_nullLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 434;
            this.match(OpenSearchSQLParser.NULL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datetimeLiteral(): DatetimeLiteralContext {
        let localContext = new DatetimeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 72, OpenSearchSQLParser.RULE_datetimeLiteral);
        try {
            this.state = 439;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 436;
                this.dateLiteral();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 437;
                this.timeLiteral();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 438;
                this.timestampLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateLiteral(): DateLiteralContext {
        let localContext = new DateLiteralContext(this.context, this.state);
        this.enterRule(localContext, 74, OpenSearchSQLParser.RULE_dateLiteral);
        let _la: number;
        try {
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 441;
                this.match(OpenSearchSQLParser.DATE);
                this.state = 442;
                localContext._date = this.stringLiteral();
                }
                break;
            case OpenSearchSQLParser.LEFT_BRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 443;
                this.match(OpenSearchSQLParser.LEFT_BRACE);
                this.state = 444;
                _la = this.tokenStream.LA(1);
                if(!(_la === 129 || _la === 207)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 445;
                localContext._date = this.stringLiteral();
                this.state = 446;
                this.match(OpenSearchSQLParser.RIGHT_BRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeLiteral(): TimeLiteralContext {
        let localContext = new TimeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 76, OpenSearchSQLParser.RULE_timeLiteral);
        let _la: number;
        try {
            this.state = 457;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.TIME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 450;
                this.match(OpenSearchSQLParser.TIME);
                this.state = 451;
                localContext._time = this.stringLiteral();
                }
                break;
            case OpenSearchSQLParser.LEFT_BRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 452;
                this.match(OpenSearchSQLParser.LEFT_BRACE);
                this.state = 453;
                _la = this.tokenStream.LA(1);
                if(!(_la === 194 || _la === 208)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 454;
                localContext._time = this.stringLiteral();
                this.state = 455;
                this.match(OpenSearchSQLParser.RIGHT_BRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampLiteral(): TimestampLiteralContext {
        let localContext = new TimestampLiteralContext(this.context, this.state);
        this.enterRule(localContext, 78, OpenSearchSQLParser.RULE_timestampLiteral);
        let _la: number;
        try {
            this.state = 466;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 459;
                this.match(OpenSearchSQLParser.TIMESTAMP);
                this.state = 460;
                localContext._timestamp = this.stringLiteral();
                }
                break;
            case OpenSearchSQLParser.LEFT_BRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 461;
                this.match(OpenSearchSQLParser.LEFT_BRACE);
                this.state = 462;
                _la = this.tokenStream.LA(1);
                if(!(_la === 198 || _la === 209)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 463;
                localContext._timestamp = this.stringLiteral();
                this.state = 464;
                this.match(OpenSearchSQLParser.RIGHT_BRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datetimeConstantLiteral(): DatetimeConstantLiteralContext {
        let localContext = new DatetimeConstantLiteralContext(this.context, this.state);
        this.enterRule(localContext, 80, OpenSearchSQLParser.RULE_datetimeConstantLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 805306375) !== 0) || ((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalLiteral(): IntervalLiteralContext {
        let localContext = new IntervalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 82, OpenSearchSQLParser.RULE_intervalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 470;
            this.match(OpenSearchSQLParser.INTERVAL);
            this.state = 471;
            this.expression(0);
            this.state = 472;
            this.intervalUnit();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intervalUnit(): IntervalUnitContext {
        let localContext = new IntervalUnitContext(this.context, this.state);
        this.enterRule(localContext, 84, OpenSearchSQLParser.RULE_intervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 474;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 1048575) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, OpenSearchSQLParser.RULE_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 480;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.NOT:
                {
                localContext = new NotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 477;
                this.match(OpenSearchSQLParser.NOT);
                this.state = 478;
                this.expression(4);
                }
                break;
            case OpenSearchSQLParser.CASE:
            case OpenSearchSQLParser.CAST:
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.FALSE:
            case OpenSearchSQLParser.FIRST:
            case OpenSearchSQLParser.LAST:
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.MATCH:
            case OpenSearchSQLParser.NULL_LITERAL:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.TRUE:
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.VAR_POP:
            case OpenSearchSQLParser.VAR_SAMP:
            case OpenSearchSQLParser.VARIANCE:
            case OpenSearchSQLParser.STD:
            case OpenSearchSQLParser.STDDEV:
            case OpenSearchSQLParser.STDDEV_POP:
            case OpenSearchSQLParser.STDDEV_SAMP:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.FULL:
            case OpenSearchSQLParser.INTERVAL:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.EXTRACT:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.GET_FORMAT:
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.NULLIF:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POSITION:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.D:
            case OpenSearchSQLParser.T:
            case OpenSearchSQLParser.TS:
            case OpenSearchSQLParser.LEFT_BRACE:
            case OpenSearchSQLParser.DENSE_RANK:
            case OpenSearchSQLParser.RANK:
            case OpenSearchSQLParser.ROW_NUMBER:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.FIELD:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MATCHPHRASE:
            case OpenSearchSQLParser.MATCH_PHRASE:
            case OpenSearchSQLParser.MATCHPHRASEQUERY:
            case OpenSearchSQLParser.SIMPLE_QUERY_STRING:
            case OpenSearchSQLParser.QUERY_STRING:
            case OpenSearchSQLParser.MATCH_PHRASE_PREFIX:
            case OpenSearchSQLParser.MATCHQUERY:
            case OpenSearchSQLParser.MATCH_QUERY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.MULTIMATCH:
            case OpenSearchSQLParser.MULTI_MATCH:
            case OpenSearchSQLParser.MULTIMATCHQUERY:
            case OpenSearchSQLParser.NESTED:
            case OpenSearchSQLParser.QUERY:
            case OpenSearchSQLParser.SCORE:
            case OpenSearchSQLParser.SCOREQUERY:
            case OpenSearchSQLParser.SCORE_QUERY:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.TIMESTAMPADD:
            case OpenSearchSQLParser.TIMESTAMPDIFF:
            case OpenSearchSQLParser.TYPEOF:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.WILDCARDQUERY:
            case OpenSearchSQLParser.WILDCARD_QUERY:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
            case OpenSearchSQLParser.TYPE:
            case OpenSearchSQLParser.HIGHLIGHT:
            case OpenSearchSQLParser.MATCH_BOOL_PREFIX:
            case OpenSearchSQLParser.PLUS:
            case OpenSearchSQLParser.MINUS:
            case OpenSearchSQLParser.MOD:
            case OpenSearchSQLParser.DOT:
            case OpenSearchSQLParser.LR_BRACKET:
            case OpenSearchSQLParser.ZERO_DECIMAL:
            case OpenSearchSQLParser.ONE_DECIMAL:
            case OpenSearchSQLParser.TWO_DECIMAL:
            case OpenSearchSQLParser.STRING_LITERAL:
            case OpenSearchSQLParser.DECIMAL_LITERAL:
            case OpenSearchSQLParser.REAL_LITERAL:
            case OpenSearchSQLParser.ID:
            case OpenSearchSQLParser.DOUBLE_QUOTE_ID:
            case OpenSearchSQLParser.BACKTICK_QUOTE_ID:
                {
                localContext = new PredicateExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 479;
                this.predicate(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 490;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 488;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
                    case 1:
                        {
                        localContext = new AndExpressionContext(new ExpressionContext(parentContext, parentState));
                        (localContext as AndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_expression);
                        this.state = 482;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 483;
                        this.match(OpenSearchSQLParser.AND);
                        this.state = 484;
                        (localContext as AndExpressionContext)._right = this.expression(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new OrExpressionContext(new ExpressionContext(parentContext, parentState));
                        (localContext as OrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_expression);
                        this.state = 485;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 486;
                        this.match(OpenSearchSQLParser.OR);
                        this.state = 487;
                        (localContext as OrExpressionContext)._right = this.expression(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 492;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public predicate(): PredicateContext;
    public predicate(_p: number): PredicateContext;
    public predicate(_p?: number): PredicateContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PredicateContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 88;
        this.enterRecursionRule(localContext, 88, OpenSearchSQLParser.RULE_predicate, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            localContext = new ExpressionAtomPredicateContext(localContext);
            this.context = localContext;
            previousContext = localContext;

            this.state = 494;
            this.expressionAtom(0);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 532;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 530;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
                    case 1:
                        {
                        localContext = new BinaryComparisonPredicateContext(new PredicateContext(parentContext, parentState));
                        (localContext as BinaryComparisonPredicateContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 496;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 497;
                        this.comparisonOperator();
                        this.state = 498;
                        (localContext as BinaryComparisonPredicateContext)._right = this.predicate(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new BetweenPredicateContext(new PredicateContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 500;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 502;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 44) {
                            {
                            this.state = 501;
                            this.match(OpenSearchSQLParser.NOT);
                            }
                        }

                        this.state = 504;
                        this.match(OpenSearchSQLParser.BETWEEN);
                        this.state = 505;
                        this.predicate(0);
                        this.state = 506;
                        this.match(OpenSearchSQLParser.AND);
                        this.state = 507;
                        this.predicate(5);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LikePredicateContext(new PredicateContext(parentContext, parentState));
                        (localContext as LikePredicateContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 509;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 511;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 44) {
                            {
                            this.state = 510;
                            this.match(OpenSearchSQLParser.NOT);
                            }
                        }

                        this.state = 513;
                        this.match(OpenSearchSQLParser.LIKE);
                        this.state = 514;
                        (localContext as LikePredicateContext)._right = this.predicate(4);
                        }
                        break;
                    case 4:
                        {
                        localContext = new RegexpPredicateContext(new PredicateContext(parentContext, parentState));
                        (localContext as RegexpPredicateContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 515;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 516;
                        this.match(OpenSearchSQLParser.REGEXP);
                        this.state = 517;
                        (localContext as RegexpPredicateContext)._right = this.predicate(3);
                        }
                        break;
                    case 5:
                        {
                        localContext = new IsNullPredicateContext(new PredicateContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 518;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 519;
                        this.match(OpenSearchSQLParser.IS);
                        this.state = 520;
                        this.nullNotnull();
                        }
                        break;
                    case 6:
                        {
                        localContext = new InPredicateContext(new PredicateContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_predicate);
                        this.state = 521;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 523;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 44) {
                            {
                            this.state = 522;
                            this.match(OpenSearchSQLParser.NOT);
                            }
                        }

                        this.state = 525;
                        this.match(OpenSearchSQLParser.IN);
                        this.state = 526;
                        this.match(OpenSearchSQLParser.LR_BRACKET);
                        this.state = 527;
                        this.expressions();
                        this.state = 528;
                        this.match(OpenSearchSQLParser.RR_BRACKET);
                        }
                        break;
                    }
                    }
                }
                this.state = 534;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public expressions(): ExpressionsContext {
        let localContext = new ExpressionsContext(this.context, this.state);
        this.enterRule(localContext, 90, OpenSearchSQLParser.RULE_expressions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 535;
            this.expression(0);
            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 536;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 537;
                this.expression(0);
                }
                }
                this.state = 542;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expressionAtom(): ExpressionAtomContext;
    public expressionAtom(_p: number): ExpressionAtomContext;
    public expressionAtom(_p?: number): ExpressionAtomContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionAtomContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 92;
        this.enterRecursionRule(localContext, 92, OpenSearchSQLParser.RULE_expressionAtom, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 551;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                {
                localContext = new ConstantExpressionAtomContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 544;
                this.constant();
                }
                break;
            case 2:
                {
                localContext = new FullColumnNameExpressionAtomContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 545;
                this.columnName();
                }
                break;
            case 3:
                {
                localContext = new FunctionCallExpressionAtomContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 546;
                this.functionCall();
                }
                break;
            case 4:
                {
                localContext = new NestedExpressionAtomContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 547;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 548;
                this.expression(0);
                this.state = 549;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 561;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 559;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
                    case 1:
                        {
                        localContext = new MathExpressionAtomContext(new ExpressionAtomContext(parentContext, parentState));
                        (localContext as MathExpressionAtomContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_expressionAtom);
                        this.state = 553;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 554;
                        (localContext as MathExpressionAtomContext)._mathOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 311)) & ~0x1F) === 0 && ((1 << (_la - 311)) & 7) !== 0))) {
                            (localContext as MathExpressionAtomContext)._mathOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 555;
                        (localContext as MathExpressionAtomContext)._right = this.expressionAtom(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MathExpressionAtomContext(new ExpressionAtomContext(parentContext, parentState));
                        (localContext as MathExpressionAtomContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, OpenSearchSQLParser.RULE_expressionAtom);
                        this.state = 556;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 557;
                        (localContext as MathExpressionAtomContext)._mathOperator = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 314 || _la === 315)) {
                            (localContext as MathExpressionAtomContext)._mathOperator = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 558;
                        (localContext as MathExpressionAtomContext)._right = this.expressionAtom(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 563;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 94, OpenSearchSQLParser.RULE_comparisonOperator);
        try {
            this.state = 575;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 564;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 565;
                this.match(OpenSearchSQLParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 566;
                this.match(OpenSearchSQLParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 567;
                this.match(OpenSearchSQLParser.LESS_SYMBOL);
                this.state = 568;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 569;
                this.match(OpenSearchSQLParser.GREATER_SYMBOL);
                this.state = 570;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 571;
                this.match(OpenSearchSQLParser.LESS_SYMBOL);
                this.state = 572;
                this.match(OpenSearchSQLParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 573;
                this.match(OpenSearchSQLParser.EXCLAMATION_SYMBOL);
                this.state = 574;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nullNotnull(): NullNotnullContext {
        let localContext = new NullNotnullContext(this.context, this.state);
        this.enterRule(localContext, 96, OpenSearchSQLParser.RULE_nullNotnull);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 578;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 577;
                this.match(OpenSearchSQLParser.NOT);
                }
            }

            this.state = 580;
            this.match(OpenSearchSQLParser.NULL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionCall(): FunctionCallContext {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 98, OpenSearchSQLParser.RULE_functionCall);
        let _la: number;
        try {
            this.state = 608;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
            case 1:
                localContext = new NestedAllFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 582;
                this.nestedFunctionName();
                this.state = 583;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 584;
                this.allTupleFields();
                this.state = 585;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case 2:
                localContext = new ScalarFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 587;
                this.scalarFunctionName();
                this.state = 588;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 589;
                this.functionArgs();
                this.state = 590;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case 3:
                localContext = new SpecificFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 592;
                this.specificFunction();
                }
                break;
            case 4:
                localContext = new WindowFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 593;
                this.windowFunctionClause();
                }
                break;
            case 5:
                localContext = new AggregateFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 594;
                this.aggregateFunction();
                }
                break;
            case 6:
                localContext = new FilteredAggregationFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 595;
                this.aggregateFunction();
                this.state = 597;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 596;
                    this.orderByClause();
                    }
                }

                this.state = 599;
                this.filterClause();
                }
                break;
            case 7:
                localContext = new ScoreRelevanceFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 601;
                this.scoreRelevanceFunction();
                }
                break;
            case 8:
                localContext = new RelevanceFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 602;
                this.relevanceFunction();
                }
                break;
            case 9:
                localContext = new HighlightFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 603;
                this.highlightFunction();
                }
                break;
            case 10:
                localContext = new PositionFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 604;
                this.positionFunction();
                }
                break;
            case 11:
                localContext = new ExtractFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 605;
                this.extractFunction();
                }
                break;
            case 12:
                localContext = new GetFormatFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 606;
                this.getFormatFunction();
                }
                break;
            case 13:
                localContext = new TimestampFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 607;
                this.timestampFunction();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampFunction(): TimestampFunctionContext {
        let localContext = new TimestampFunctionContext(this.context, this.state);
        this.enterRule(localContext, 100, OpenSearchSQLParser.RULE_timestampFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 610;
            this.timestampFunctionName();
            this.state = 611;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 612;
            this.simpleDateTimePart();
            this.state = 613;
            this.match(OpenSearchSQLParser.COMMA);
            this.state = 614;
            localContext._firstArg = this.functionArg();
            this.state = 615;
            this.match(OpenSearchSQLParser.COMMA);
            this.state = 616;
            localContext._secondArg = this.functionArg();
            this.state = 617;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timestampFunctionName(): TimestampFunctionNameContext {
        let localContext = new TimestampFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 102, OpenSearchSQLParser.RULE_timestampFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 619;
            _la = this.tokenStream.LA(1);
            if(!(_la === 260 || _la === 261)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getFormatFunction(): GetFormatFunctionContext {
        let localContext = new GetFormatFunctionContext(this.context, this.state);
        this.enterRule(localContext, 104, OpenSearchSQLParser.RULE_getFormatFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            this.match(OpenSearchSQLParser.GET_FORMAT);
            this.state = 622;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 623;
            this.getFormatType();
            this.state = 624;
            this.match(OpenSearchSQLParser.COMMA);
            this.state = 625;
            this.functionArg();
            this.state = 626;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getFormatType(): GetFormatTypeContext {
        let localContext = new GetFormatTypeContext(this.context, this.state);
        this.enterRule(localContext, 106, OpenSearchSQLParser.RULE_getFormatType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            _la = this.tokenStream.LA(1);
            if(!(_la === 16 || _la === 129 || _la === 194 || _la === 198)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public extractFunction(): ExtractFunctionContext {
        let localContext = new ExtractFunctionContext(this.context, this.state);
        this.enterRule(localContext, 108, OpenSearchSQLParser.RULE_extractFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 630;
            this.match(OpenSearchSQLParser.EXTRACT);
            this.state = 631;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 632;
            this.datetimePart();
            this.state = 633;
            this.match(OpenSearchSQLParser.FROM);
            this.state = 634;
            this.functionArg();
            this.state = 635;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public simpleDateTimePart(): SimpleDateTimePartContext {
        let localContext = new SimpleDateTimePartContext(this.context, this.state);
        this.enterRule(localContext, 110, OpenSearchSQLParser.RULE_simpleDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 637;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 511) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public complexDateTimePart(): ComplexDateTimePartContext {
        let localContext = new ComplexDateTimePartContext(this.context, this.state);
        this.enterRule(localContext, 112, OpenSearchSQLParser.RULE_complexDateTimePart);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 2047) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datetimePart(): DatetimePartContext {
        let localContext = new DatetimePartContext(this.context, this.state);
        this.enterRule(localContext, 114, OpenSearchSQLParser.RULE_datetimePart);
        try {
            this.state = 643;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 641;
                this.simpleDateTimePart();
                }
                break;
            case OpenSearchSQLParser.SECOND_MICROSECOND:
            case OpenSearchSQLParser.MINUTE_MICROSECOND:
            case OpenSearchSQLParser.MINUTE_SECOND:
            case OpenSearchSQLParser.HOUR_MICROSECOND:
            case OpenSearchSQLParser.HOUR_SECOND:
            case OpenSearchSQLParser.HOUR_MINUTE:
            case OpenSearchSQLParser.DAY_MICROSECOND:
            case OpenSearchSQLParser.DAY_SECOND:
            case OpenSearchSQLParser.DAY_MINUTE:
            case OpenSearchSQLParser.DAY_HOUR:
            case OpenSearchSQLParser.YEAR_MONTH:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 642;
                this.complexDateTimePart();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public highlightFunction(): HighlightFunctionContext {
        let localContext = new HighlightFunctionContext(this.context, this.state);
        this.enterRule(localContext, 116, OpenSearchSQLParser.RULE_highlightFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 645;
            this.match(OpenSearchSQLParser.HIGHLIGHT);
            this.state = 646;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 647;
            this.relevanceField();
            this.state = 652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 648;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 649;
                this.highlightArg();
                }
                }
                this.state = 654;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 655;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public positionFunction(): PositionFunctionContext {
        let localContext = new PositionFunctionContext(this.context, this.state);
        this.enterRule(localContext, 118, OpenSearchSQLParser.RULE_positionFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 657;
            this.match(OpenSearchSQLParser.POSITION);
            this.state = 658;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 659;
            this.functionArg();
            this.state = 660;
            this.match(OpenSearchSQLParser.IN);
            this.state = 661;
            this.functionArg();
            this.state = 662;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matchQueryAltSyntaxFunction(): MatchQueryAltSyntaxFunctionContext {
        let localContext = new MatchQueryAltSyntaxFunctionContext(this.context, this.state);
        this.enterRule(localContext, 120, OpenSearchSQLParser.RULE_matchQueryAltSyntaxFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 664;
            localContext._field = this.relevanceField();
            this.state = 665;
            this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
            this.state = 666;
            this.match(OpenSearchSQLParser.MATCH_QUERY);
            this.state = 667;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 668;
            localContext._query = this.relevanceQuery();
            this.state = 669;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scalarFunctionName(): ScalarFunctionNameContext {
        let localContext = new ScalarFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 122, OpenSearchSQLParser.RULE_scalarFunctionName);
        try {
            this.state = 677;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.MOD:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 671;
                this.mathematicalFunctionName();
                }
                break;
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 672;
                this.dateTimeFunctionName();
                }
                break;
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 673;
                this.textFunctionName();
                }
                break;
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.NULLIF:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 674;
                this.flowControlFunctionName();
                }
                break;
            case OpenSearchSQLParser.TYPEOF:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 675;
                this.systemFunctionName();
                }
                break;
            case OpenSearchSQLParser.NESTED:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 676;
                this.nestedFunctionName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public specificFunction(): SpecificFunctionContext {
        let localContext = new SpecificFunctionContext(this.context, this.state);
        this.enterRule(localContext, 124, OpenSearchSQLParser.RULE_specificFunction);
        let _la: number;
        try {
            this.state = 711;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                localContext = new CaseFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 679;
                this.match(OpenSearchSQLParser.CASE);
                this.state = 680;
                this.expression(0);
                this.state = 682;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 681;
                    this.caseFuncAlternative();
                    }
                    }
                    this.state = 684;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 62);
                this.state = 688;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 686;
                    this.match(OpenSearchSQLParser.ELSE);
                    this.state = 687;
                    (localContext as CaseFunctionCallContext)._elseArg = this.functionArg();
                    }
                }

                this.state = 690;
                this.match(OpenSearchSQLParser.END);
                }
                break;
            case 2:
                localContext = new CaseFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 692;
                this.match(OpenSearchSQLParser.CASE);
                this.state = 694;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 693;
                    this.caseFuncAlternative();
                    }
                    }
                    this.state = 696;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 62);
                this.state = 700;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 22) {
                    {
                    this.state = 698;
                    this.match(OpenSearchSQLParser.ELSE);
                    this.state = 699;
                    (localContext as CaseFunctionCallContext)._elseArg = this.functionArg();
                    }
                }

                this.state = 702;
                this.match(OpenSearchSQLParser.END);
                }
                break;
            case 3:
                localContext = new DataTypeFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 704;
                this.match(OpenSearchSQLParser.CAST);
                this.state = 705;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 706;
                this.expression(0);
                this.state = 707;
                this.match(OpenSearchSQLParser.AS);
                this.state = 708;
                this.convertedDataType();
                this.state = 709;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceFunction(): RelevanceFunctionContext {
        let localContext = new RelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 126, OpenSearchSQLParser.RULE_relevanceFunction);
        try {
            this.state = 718;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 713;
                this.noFieldRelevanceFunction();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 714;
                this.singleFieldRelevanceFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 715;
                this.multiFieldRelevanceFunction();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 716;
                this.altSingleFieldRelevanceFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 717;
                this.altMultiFieldRelevanceFunction();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scoreRelevanceFunction(): ScoreRelevanceFunctionContext {
        let localContext = new ScoreRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 128, OpenSearchSQLParser.RULE_scoreRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 720;
            this.scoreRelevanceFunctionName();
            this.state = 721;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 722;
            this.relevanceFunction();
            this.state = 725;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 331) {
                {
                this.state = 723;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 724;
                localContext._weight = this.relevanceFieldWeight();
                }
            }

            this.state = 727;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public noFieldRelevanceFunction(): NoFieldRelevanceFunctionContext {
        let localContext = new NoFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 130, OpenSearchSQLParser.RULE_noFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 729;
            this.noFieldRelevanceFunctionName();
            this.state = 730;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 731;
            localContext._query = this.relevanceQuery();
            this.state = 736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 732;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 733;
                this.relevanceArg();
                }
                }
                this.state = 738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 739;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleFieldRelevanceFunction(): SingleFieldRelevanceFunctionContext {
        let localContext = new SingleFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 132, OpenSearchSQLParser.RULE_singleFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 741;
            this.singleFieldRelevanceFunctionName();
            this.state = 742;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 743;
            localContext._field = this.relevanceField();
            this.state = 744;
            this.match(OpenSearchSQLParser.COMMA);
            this.state = 745;
            localContext._query = this.relevanceQuery();
            this.state = 750;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 746;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 747;
                this.relevanceArg();
                }
                }
                this.state = 752;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 753;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiFieldRelevanceFunction(): MultiFieldRelevanceFunctionContext {
        let localContext = new MultiFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 134, OpenSearchSQLParser.RULE_multiFieldRelevanceFunction);
        let _la: number;
        try {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 755;
                this.multiFieldRelevanceFunctionName();
                this.state = 756;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 757;
                this.match(OpenSearchSQLParser.LT_SQR_PRTHS);
                this.state = 758;
                localContext._field = this.relevanceFieldAndWeight();
                this.state = 763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 331) {
                    {
                    {
                    this.state = 759;
                    this.match(OpenSearchSQLParser.COMMA);
                    this.state = 760;
                    localContext._field = this.relevanceFieldAndWeight();
                    }
                    }
                    this.state = 765;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 766;
                this.match(OpenSearchSQLParser.RT_SQR_PRTHS);
                this.state = 767;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 768;
                localContext._query = this.relevanceQuery();
                this.state = 773;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 331) {
                    {
                    {
                    this.state = 769;
                    this.match(OpenSearchSQLParser.COMMA);
                    this.state = 770;
                    this.relevanceArg();
                    }
                    }
                    this.state = 775;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 776;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 778;
                this.multiFieldRelevanceFunctionName();
                this.state = 779;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 780;
                this.alternateMultiMatchQuery();
                this.state = 781;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 782;
                this.alternateMultiMatchField();
                this.state = 787;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 331) {
                    {
                    {
                    this.state = 783;
                    this.match(OpenSearchSQLParser.COMMA);
                    this.state = 784;
                    this.relevanceArg();
                    }
                    }
                    this.state = 789;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 790;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altSingleFieldRelevanceFunction(): AltSingleFieldRelevanceFunctionContext {
        let localContext = new AltSingleFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 136, OpenSearchSQLParser.RULE_altSingleFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 794;
            localContext._field = this.relevanceField();
            this.state = 795;
            this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
            this.state = 796;
            localContext._altSyntaxFunctionName = this.altSingleFieldRelevanceFunctionName();
            this.state = 797;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 798;
            localContext._query = this.relevanceQuery();
            this.state = 803;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 799;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 800;
                this.relevanceArg();
                }
                }
                this.state = 805;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 806;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altMultiFieldRelevanceFunction(): AltMultiFieldRelevanceFunctionContext {
        let localContext = new AltMultiFieldRelevanceFunctionContext(this.context, this.state);
        this.enterRule(localContext, 138, OpenSearchSQLParser.RULE_altMultiFieldRelevanceFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 808;
            localContext._field = this.relevanceField();
            this.state = 809;
            this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
            this.state = 810;
            localContext._altSyntaxFunctionName = this.altMultiFieldRelevanceFunctionName();
            this.state = 811;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 812;
            localContext._query = this.relevanceQuery();
            this.state = 817;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 331) {
                {
                {
                this.state = 813;
                this.match(OpenSearchSQLParser.COMMA);
                this.state = 814;
                this.relevanceArg();
                }
                }
                this.state = 819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 820;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public convertedDataType(): ConvertedDataTypeContext {
        let localContext = new ConvertedDataTypeContext(this.context, this.state);
        this.enterRule(localContext, 140, OpenSearchSQLParser.RULE_convertedDataType);
        try {
            this.state = 832;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DATE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 822;
                localContext._typeName = this.match(OpenSearchSQLParser.DATE);
                }
                break;
            case OpenSearchSQLParser.TIME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 823;
                localContext._typeName = this.match(OpenSearchSQLParser.TIME);
                }
                break;
            case OpenSearchSQLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 824;
                localContext._typeName = this.match(OpenSearchSQLParser.TIMESTAMP);
                }
                break;
            case OpenSearchSQLParser.INT:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 825;
                localContext._typeName = this.match(OpenSearchSQLParser.INT);
                }
                break;
            case OpenSearchSQLParser.INTEGER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 826;
                localContext._typeName = this.match(OpenSearchSQLParser.INTEGER);
                }
                break;
            case OpenSearchSQLParser.DOUBLE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 827;
                localContext._typeName = this.match(OpenSearchSQLParser.DOUBLE);
                }
                break;
            case OpenSearchSQLParser.LONG:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 828;
                localContext._typeName = this.match(OpenSearchSQLParser.LONG);
                }
                break;
            case OpenSearchSQLParser.FLOAT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 829;
                localContext._typeName = this.match(OpenSearchSQLParser.FLOAT);
                }
                break;
            case OpenSearchSQLParser.STRING:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 830;
                localContext._typeName = this.match(OpenSearchSQLParser.STRING);
                }
                break;
            case OpenSearchSQLParser.BOOLEAN:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 831;
                localContext._typeName = this.match(OpenSearchSQLParser.BOOLEAN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseFuncAlternative(): CaseFuncAlternativeContext {
        let localContext = new CaseFuncAlternativeContext(this.context, this.state);
        this.enterRule(localContext, 142, OpenSearchSQLParser.RULE_caseFuncAlternative);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 834;
            this.match(OpenSearchSQLParser.WHEN);
            this.state = 835;
            localContext._condition = this.functionArg();
            this.state = 836;
            this.match(OpenSearchSQLParser.THEN);
            this.state = 837;
            localContext._consequent = this.functionArg();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregateFunction(): AggregateFunctionContext {
        let localContext = new AggregateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 144, OpenSearchSQLParser.RULE_aggregateFunction);
        try {
            this.state = 854;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                localContext = new RegularAggregateFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 839;
                (localContext as RegularAggregateFunctionCallContext)._functionName = this.aggregationFunctionName();
                this.state = 840;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 841;
                this.functionArg();
                this.state = 842;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case 2:
                localContext = new CountStarFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 844;
                this.match(OpenSearchSQLParser.COUNT);
                this.state = 845;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 846;
                this.match(OpenSearchSQLParser.STAR);
                this.state = 847;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            case 3:
                localContext = new DistinctCountFunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 848;
                this.match(OpenSearchSQLParser.COUNT);
                this.state = 849;
                this.match(OpenSearchSQLParser.LR_BRACKET);
                this.state = 850;
                this.match(OpenSearchSQLParser.DISTINCT);
                this.state = 851;
                this.functionArg();
                this.state = 852;
                this.match(OpenSearchSQLParser.RR_BRACKET);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public filterClause(): FilterClauseContext {
        let localContext = new FilterClauseContext(this.context, this.state);
        this.enterRule(localContext, 146, OpenSearchSQLParser.RULE_filterClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 856;
            this.match(OpenSearchSQLParser.FILTER);
            this.state = 857;
            this.match(OpenSearchSQLParser.LR_BRACKET);
            this.state = 858;
            this.match(OpenSearchSQLParser.WHERE);
            this.state = 859;
            this.expression(0);
            this.state = 860;
            this.match(OpenSearchSQLParser.RR_BRACKET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregationFunctionName(): AggregationFunctionNameContext {
        let localContext = new AggregationFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 148, OpenSearchSQLParser.RULE_aggregationFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 862;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4095) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mathematicalFunctionName(): MathematicalFunctionNameContext {
        let localContext = new MathematicalFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 150, OpenSearchSQLParser.RULE_mathematicalFunctionName);
        try {
            this.state = 891;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 864;
                this.match(OpenSearchSQLParser.ABS);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 865;
                this.match(OpenSearchSQLParser.CBRT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 866;
                this.match(OpenSearchSQLParser.CEIL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 867;
                this.match(OpenSearchSQLParser.CEILING);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 868;
                this.match(OpenSearchSQLParser.CONV);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 869;
                this.match(OpenSearchSQLParser.CRC32);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 870;
                this.match(OpenSearchSQLParser.E);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 871;
                this.match(OpenSearchSQLParser.EXP);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 872;
                this.match(OpenSearchSQLParser.EXPM1);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 873;
                this.match(OpenSearchSQLParser.FLOOR);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 874;
                this.match(OpenSearchSQLParser.LN);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 875;
                this.match(OpenSearchSQLParser.LOG);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 876;
                this.match(OpenSearchSQLParser.LOG10);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 877;
                this.match(OpenSearchSQLParser.LOG2);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 878;
                this.match(OpenSearchSQLParser.MOD);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 879;
                this.match(OpenSearchSQLParser.PI);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 880;
                this.match(OpenSearchSQLParser.POW);
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 881;
                this.match(OpenSearchSQLParser.POWER);
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 882;
                this.match(OpenSearchSQLParser.RAND);
                }
                break;
            case 20:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 883;
                this.match(OpenSearchSQLParser.RINT);
                }
                break;
            case 21:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 884;
                this.match(OpenSearchSQLParser.ROUND);
                }
                break;
            case 22:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 885;
                this.match(OpenSearchSQLParser.SIGN);
                }
                break;
            case 23:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 886;
                this.match(OpenSearchSQLParser.SIGNUM);
                }
                break;
            case 24:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 887;
                this.match(OpenSearchSQLParser.SQRT);
                }
                break;
            case 25:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 888;
                this.match(OpenSearchSQLParser.TRUNCATE);
                }
                break;
            case 26:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 889;
                this.trigonometricFunctionName();
                }
                break;
            case 27:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 890;
                this.arithmeticFunctionName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public trigonometricFunctionName(): TrigonometricFunctionNameContext {
        let localContext = new TrigonometricFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 152, OpenSearchSQLParser.RULE_trigonometricFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 893;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 114801) !== 0) || _la === 138 || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 265217) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arithmeticFunctionName(): ArithmeticFunctionNameContext {
        let localContext = new ArithmeticFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 154, OpenSearchSQLParser.RULE_arithmeticFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 895;
            _la = this.tokenStream.LA(1);
            if(!(_la === 107 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 167772161) !== 0) || _la === 191 || _la === 317)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateTimeFunctionName(): DateTimeFunctionNameContext {
        let localContext = new DateTimeFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 156, OpenSearchSQLParser.RULE_dateTimeFunctionName);
        try {
            this.state = 956;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 897;
                this.datetimeConstantLiteral();
                }
                break;
            case OpenSearchSQLParser.ADDDATE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 898;
                this.match(OpenSearchSQLParser.ADDDATE);
                }
                break;
            case OpenSearchSQLParser.ADDTIME:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 899;
                this.match(OpenSearchSQLParser.ADDTIME);
                }
                break;
            case OpenSearchSQLParser.CONVERT_TZ:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 900;
                this.match(OpenSearchSQLParser.CONVERT_TZ);
                }
                break;
            case OpenSearchSQLParser.CURDATE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 901;
                this.match(OpenSearchSQLParser.CURDATE);
                }
                break;
            case OpenSearchSQLParser.CURTIME:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 902;
                this.match(OpenSearchSQLParser.CURTIME);
                }
                break;
            case OpenSearchSQLParser.DATE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 903;
                this.match(OpenSearchSQLParser.DATE);
                }
                break;
            case OpenSearchSQLParser.DATE_ADD:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 904;
                this.match(OpenSearchSQLParser.DATE_ADD);
                }
                break;
            case OpenSearchSQLParser.DATE_FORMAT:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 905;
                this.match(OpenSearchSQLParser.DATE_FORMAT);
                }
                break;
            case OpenSearchSQLParser.DATE_SUB:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 906;
                this.match(OpenSearchSQLParser.DATE_SUB);
                }
                break;
            case OpenSearchSQLParser.DATEDIFF:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 907;
                this.match(OpenSearchSQLParser.DATEDIFF);
                }
                break;
            case OpenSearchSQLParser.DATETIME:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 908;
                this.match(OpenSearchSQLParser.DATETIME);
                }
                break;
            case OpenSearchSQLParser.DAY:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 909;
                this.match(OpenSearchSQLParser.DAY);
                }
                break;
            case OpenSearchSQLParser.DAYNAME:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 910;
                this.match(OpenSearchSQLParser.DAYNAME);
                }
                break;
            case OpenSearchSQLParser.DAYOFMONTH:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 911;
                this.match(OpenSearchSQLParser.DAYOFMONTH);
                }
                break;
            case OpenSearchSQLParser.DAY_OF_MONTH:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 912;
                this.match(OpenSearchSQLParser.DAY_OF_MONTH);
                }
                break;
            case OpenSearchSQLParser.DAYOFWEEK:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 913;
                this.match(OpenSearchSQLParser.DAYOFWEEK);
                }
                break;
            case OpenSearchSQLParser.DAYOFYEAR:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 914;
                this.match(OpenSearchSQLParser.DAYOFYEAR);
                }
                break;
            case OpenSearchSQLParser.DAY_OF_YEAR:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 915;
                this.match(OpenSearchSQLParser.DAY_OF_YEAR);
                }
                break;
            case OpenSearchSQLParser.DAY_OF_WEEK:
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 916;
                this.match(OpenSearchSQLParser.DAY_OF_WEEK);
                }
                break;
            case OpenSearchSQLParser.FROM_DAYS:
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 917;
                this.match(OpenSearchSQLParser.FROM_DAYS);
                }
                break;
            case OpenSearchSQLParser.FROM_UNIXTIME:
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 918;
                this.match(OpenSearchSQLParser.FROM_UNIXTIME);
                }
                break;
            case OpenSearchSQLParser.HOUR:
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 919;
                this.match(OpenSearchSQLParser.HOUR);
                }
                break;
            case OpenSearchSQLParser.HOUR_OF_DAY:
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 920;
                this.match(OpenSearchSQLParser.HOUR_OF_DAY);
                }
                break;
            case OpenSearchSQLParser.LAST_DAY:
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 921;
                this.match(OpenSearchSQLParser.LAST_DAY);
                }
                break;
            case OpenSearchSQLParser.MAKEDATE:
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 922;
                this.match(OpenSearchSQLParser.MAKEDATE);
                }
                break;
            case OpenSearchSQLParser.MAKETIME:
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 923;
                this.match(OpenSearchSQLParser.MAKETIME);
                }
                break;
            case OpenSearchSQLParser.MICROSECOND:
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 924;
                this.match(OpenSearchSQLParser.MICROSECOND);
                }
                break;
            case OpenSearchSQLParser.MINUTE:
                this.enterOuterAlt(localContext, 29);
                {
                this.state = 925;
                this.match(OpenSearchSQLParser.MINUTE);
                }
                break;
            case OpenSearchSQLParser.MINUTE_OF_DAY:
                this.enterOuterAlt(localContext, 30);
                {
                this.state = 926;
                this.match(OpenSearchSQLParser.MINUTE_OF_DAY);
                }
                break;
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
                this.enterOuterAlt(localContext, 31);
                {
                this.state = 927;
                this.match(OpenSearchSQLParser.MINUTE_OF_HOUR);
                }
                break;
            case OpenSearchSQLParser.MONTH:
                this.enterOuterAlt(localContext, 32);
                {
                this.state = 928;
                this.match(OpenSearchSQLParser.MONTH);
                }
                break;
            case OpenSearchSQLParser.MONTHNAME:
                this.enterOuterAlt(localContext, 33);
                {
                this.state = 929;
                this.match(OpenSearchSQLParser.MONTHNAME);
                }
                break;
            case OpenSearchSQLParser.MONTH_OF_YEAR:
                this.enterOuterAlt(localContext, 34);
                {
                this.state = 930;
                this.match(OpenSearchSQLParser.MONTH_OF_YEAR);
                }
                break;
            case OpenSearchSQLParser.NOW:
                this.enterOuterAlt(localContext, 35);
                {
                this.state = 931;
                this.match(OpenSearchSQLParser.NOW);
                }
                break;
            case OpenSearchSQLParser.PERIOD_ADD:
                this.enterOuterAlt(localContext, 36);
                {
                this.state = 932;
                this.match(OpenSearchSQLParser.PERIOD_ADD);
                }
                break;
            case OpenSearchSQLParser.PERIOD_DIFF:
                this.enterOuterAlt(localContext, 37);
                {
                this.state = 933;
                this.match(OpenSearchSQLParser.PERIOD_DIFF);
                }
                break;
            case OpenSearchSQLParser.QUARTER:
                this.enterOuterAlt(localContext, 38);
                {
                this.state = 934;
                this.match(OpenSearchSQLParser.QUARTER);
                }
                break;
            case OpenSearchSQLParser.SEC_TO_TIME:
                this.enterOuterAlt(localContext, 39);
                {
                this.state = 935;
                this.match(OpenSearchSQLParser.SEC_TO_TIME);
                }
                break;
            case OpenSearchSQLParser.SECOND:
                this.enterOuterAlt(localContext, 40);
                {
                this.state = 936;
                this.match(OpenSearchSQLParser.SECOND);
                }
                break;
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
                this.enterOuterAlt(localContext, 41);
                {
                this.state = 937;
                this.match(OpenSearchSQLParser.SECOND_OF_MINUTE);
                }
                break;
            case OpenSearchSQLParser.SUBDATE:
                this.enterOuterAlt(localContext, 42);
                {
                this.state = 938;
                this.match(OpenSearchSQLParser.SUBDATE);
                }
                break;
            case OpenSearchSQLParser.SUBTIME:
                this.enterOuterAlt(localContext, 43);
                {
                this.state = 939;
                this.match(OpenSearchSQLParser.SUBTIME);
                }
                break;
            case OpenSearchSQLParser.SYSDATE:
                this.enterOuterAlt(localContext, 44);
                {
                this.state = 940;
                this.match(OpenSearchSQLParser.SYSDATE);
                }
                break;
            case OpenSearchSQLParser.STR_TO_DATE:
                this.enterOuterAlt(localContext, 45);
                {
                this.state = 941;
                this.match(OpenSearchSQLParser.STR_TO_DATE);
                }
                break;
            case OpenSearchSQLParser.TIME:
                this.enterOuterAlt(localContext, 46);
                {
                this.state = 942;
                this.match(OpenSearchSQLParser.TIME);
                }
                break;
            case OpenSearchSQLParser.TIME_FORMAT:
                this.enterOuterAlt(localContext, 47);
                {
                this.state = 943;
                this.match(OpenSearchSQLParser.TIME_FORMAT);
                }
                break;
            case OpenSearchSQLParser.TIME_TO_SEC:
                this.enterOuterAlt(localContext, 48);
                {
                this.state = 944;
                this.match(OpenSearchSQLParser.TIME_TO_SEC);
                }
                break;
            case OpenSearchSQLParser.TIMEDIFF:
                this.enterOuterAlt(localContext, 49);
                {
                this.state = 945;
                this.match(OpenSearchSQLParser.TIMEDIFF);
                }
                break;
            case OpenSearchSQLParser.TIMESTAMP:
                this.enterOuterAlt(localContext, 50);
                {
                this.state = 946;
                this.match(OpenSearchSQLParser.TIMESTAMP);
                }
                break;
            case OpenSearchSQLParser.TO_DAYS:
                this.enterOuterAlt(localContext, 51);
                {
                this.state = 947;
                this.match(OpenSearchSQLParser.TO_DAYS);
                }
                break;
            case OpenSearchSQLParser.TO_SECONDS:
                this.enterOuterAlt(localContext, 52);
                {
                this.state = 948;
                this.match(OpenSearchSQLParser.TO_SECONDS);
                }
                break;
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
                this.enterOuterAlt(localContext, 53);
                {
                this.state = 949;
                this.match(OpenSearchSQLParser.UNIX_TIMESTAMP);
                }
                break;
            case OpenSearchSQLParser.WEEK:
                this.enterOuterAlt(localContext, 54);
                {
                this.state = 950;
                this.match(OpenSearchSQLParser.WEEK);
                }
                break;
            case OpenSearchSQLParser.WEEKDAY:
                this.enterOuterAlt(localContext, 55);
                {
                this.state = 951;
                this.match(OpenSearchSQLParser.WEEKDAY);
                }
                break;
            case OpenSearchSQLParser.WEEK_OF_YEAR:
                this.enterOuterAlt(localContext, 56);
                {
                this.state = 952;
                this.match(OpenSearchSQLParser.WEEK_OF_YEAR);
                }
                break;
            case OpenSearchSQLParser.WEEKOFYEAR:
                this.enterOuterAlt(localContext, 57);
                {
                this.state = 953;
                this.match(OpenSearchSQLParser.WEEKOFYEAR);
                }
                break;
            case OpenSearchSQLParser.YEAR:
                this.enterOuterAlt(localContext, 58);
                {
                this.state = 954;
                this.match(OpenSearchSQLParser.YEAR);
                }
                break;
            case OpenSearchSQLParser.YEARWEEK:
                this.enterOuterAlt(localContext, 59);
                {
                this.state = 955;
                this.match(OpenSearchSQLParser.YEARWEEK);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public textFunctionName(): TextFunctionNameContext {
        let localContext = new TextFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 158, OpenSearchSQLParser.RULE_textFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 958;
            _la = this.tokenStream.LA(1);
            if(!(_la === 37 || _la === 54 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 2147483651) !== 0) || _la === 116 || _la === 117 || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & 838861585) !== 0) || _la === 203 || _la === 269 || _la === 270)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flowControlFunctionName(): FlowControlFunctionNameContext {
        let localContext = new FlowControlFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 160, OpenSearchSQLParser.RULE_flowControlFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 960;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 148)) & ~0x1F) === 0 && ((1 << (_la - 148)) & 1048583) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public noFieldRelevanceFunctionName(): NoFieldRelevanceFunctionNameContext {
        let localContext = new NoFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 162, OpenSearchSQLParser.RULE_noFieldRelevanceFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 962;
            this.match(OpenSearchSQLParser.QUERY);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public systemFunctionName(): SystemFunctionNameContext {
        let localContext = new SystemFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 164, OpenSearchSQLParser.RULE_systemFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 964;
            this.match(OpenSearchSQLParser.TYPEOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nestedFunctionName(): NestedFunctionNameContext {
        let localContext = new NestedFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 166, OpenSearchSQLParser.RULE_nestedFunctionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 966;
            this.match(OpenSearchSQLParser.NESTED);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scoreRelevanceFunctionName(): ScoreRelevanceFunctionNameContext {
        let localContext = new ScoreRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 168, OpenSearchSQLParser.RULE_scoreRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 968;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleFieldRelevanceFunctionName(): SingleFieldRelevanceFunctionNameContext {
        let localContext = new SingleFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 170, OpenSearchSQLParser.RULE_singleFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 970;
            _la = this.tokenStream.LA(1);
            if(!(_la === 41 || ((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 231) !== 0) || _la === 267 || _la === 268 || _la === 310)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiFieldRelevanceFunctionName(): MultiFieldRelevanceFunctionNameContext {
        let localContext = new MultiFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 172, OpenSearchSQLParser.RULE_multiFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 972;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 236)) & ~0x1F) === 0 && ((1 << (_la - 236)) & 1795) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altSingleFieldRelevanceFunctionName(): AltSingleFieldRelevanceFunctionNameContext {
        let localContext = new AltSingleFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 174, OpenSearchSQLParser.RULE_altSingleFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 974;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 195) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public altMultiFieldRelevanceFunctionName(): AltMultiFieldRelevanceFunctionNameContext {
        let localContext = new AltMultiFieldRelevanceFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 176, OpenSearchSQLParser.RULE_altMultiFieldRelevanceFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 976;
            _la = this.tokenStream.LA(1);
            if(!(_la === 244 || _la === 245)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionArgs(): FunctionArgsContext {
        let localContext = new FunctionArgsContext(this.context, this.state);
        this.enterRule(localContext, 178, OpenSearchSQLParser.RULE_functionArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 986;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 83963904) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 3229877027) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 33533951) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 4294967295) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 4294967295) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 4294967295) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 538164223) !== 0) || ((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 3639902207) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 255) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & 3764393509) !== 0) || ((((_la - 342)) & ~0x1F) === 0 && ((1 << (_la - 342)) & 459) !== 0)) {
                {
                this.state = 978;
                this.functionArg();
                this.state = 983;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 331) {
                    {
                    {
                    this.state = 979;
                    this.match(OpenSearchSQLParser.COMMA);
                    this.state = 980;
                    this.functionArg();
                    }
                    }
                    this.state = 985;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionArg(): FunctionArgContext {
        let localContext = new FunctionArgContext(this.context, this.state);
        this.enterRule(localContext, 180, OpenSearchSQLParser.RULE_functionArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 988;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArg(): RelevanceArgContext {
        let localContext = new RelevanceArgContext(this.context, this.state);
        this.enterRule(localContext, 182, OpenSearchSQLParser.RULE_relevanceArg);
        try {
            this.state = 998;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.ALLOW_LEADING_WILDCARD:
            case OpenSearchSQLParser.ANALYZER:
            case OpenSearchSQLParser.ANALYZE_WILDCARD:
            case OpenSearchSQLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY:
            case OpenSearchSQLParser.BOOST:
            case OpenSearchSQLParser.CASE_INSENSITIVE:
            case OpenSearchSQLParser.CUTOFF_FREQUENCY:
            case OpenSearchSQLParser.DEFAULT_FIELD:
            case OpenSearchSQLParser.DEFAULT_OPERATOR:
            case OpenSearchSQLParser.ESCAPE:
            case OpenSearchSQLParser.ENABLE_POSITION_INCREMENTS:
            case OpenSearchSQLParser.FIELDS:
            case OpenSearchSQLParser.FLAGS:
            case OpenSearchSQLParser.FUZZINESS:
            case OpenSearchSQLParser.FUZZY_MAX_EXPANSIONS:
            case OpenSearchSQLParser.FUZZY_PREFIX_LENGTH:
            case OpenSearchSQLParser.FUZZY_REWRITE:
            case OpenSearchSQLParser.FUZZY_TRANSPOSITIONS:
            case OpenSearchSQLParser.LENIENT:
            case OpenSearchSQLParser.LOW_FREQ_OPERATOR:
            case OpenSearchSQLParser.MAX_DETERMINIZED_STATES:
            case OpenSearchSQLParser.MAX_EXPANSIONS:
            case OpenSearchSQLParser.MINIMUM_SHOULD_MATCH:
            case OpenSearchSQLParser.OPERATOR:
            case OpenSearchSQLParser.PHRASE_SLOP:
            case OpenSearchSQLParser.PREFIX_LENGTH:
            case OpenSearchSQLParser.QUOTE_ANALYZER:
            case OpenSearchSQLParser.QUOTE_FIELD_SUFFIX:
            case OpenSearchSQLParser.REWRITE:
            case OpenSearchSQLParser.SLOP:
            case OpenSearchSQLParser.TIE_BREAKER:
            case OpenSearchSQLParser.TIME_ZONE:
            case OpenSearchSQLParser.TYPE:
            case OpenSearchSQLParser.ZERO_TERMS_QUERY:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 990;
                this.relevanceArgName();
                this.state = 991;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                this.state = 992;
                this.relevanceArgValue();
                }
                break;
            case OpenSearchSQLParser.STRING_LITERAL:
            case OpenSearchSQLParser.DOUBLE_QUOTE_ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 994;
                localContext._argName = this.stringLiteral();
                this.state = 995;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                this.state = 996;
                localContext._argVal = this.relevanceArgValue();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public highlightArg(): HighlightArgContext {
        let localContext = new HighlightArgContext(this.context, this.state);
        this.enterRule(localContext, 184, OpenSearchSQLParser.RULE_highlightArg);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1000;
            this.highlightArgName();
            this.state = 1001;
            this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
            this.state = 1002;
            this.highlightArgValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArgName(): RelevanceArgNameContext {
        let localContext = new RelevanceArgNameContext(this.context, this.state);
        this.enterRule(localContext, 186, OpenSearchSQLParser.RULE_relevanceArgName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1004;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & 4294967295) !== 0) || _la === 305 || _la === 306)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public highlightArgName(): HighlightArgNameContext {
        let localContext = new HighlightArgNameContext(this.context, this.state);
        this.enterRule(localContext, 188, OpenSearchSQLParser.RULE_highlightArgName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1006;
            _la = this.tokenStream.LA(1);
            if(!(_la === 308 || _la === 309)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceFieldAndWeight(): RelevanceFieldAndWeightContext {
        let localContext = new RelevanceFieldAndWeightContext(this.context, this.state);
        this.enterRule(localContext, 190, OpenSearchSQLParser.RULE_relevanceFieldAndWeight);
        try {
            this.state = 1016;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1008;
                localContext._field = this.relevanceField();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1009;
                localContext._field = this.relevanceField();
                this.state = 1010;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1012;
                localContext._field = this.relevanceField();
                this.state = 1013;
                this.match(OpenSearchSQLParser.BIT_XOR_OP);
                this.state = 1014;
                localContext._weight = this.relevanceFieldWeight();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceFieldWeight(): RelevanceFieldWeightContext {
        let localContext = new RelevanceFieldWeightContext(this.context, this.state);
        this.enterRule(localContext, 192, OpenSearchSQLParser.RULE_relevanceFieldWeight);
        try {
            this.state = 1020;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1018;
                this.realLiteral();
                }
                break;
            case OpenSearchSQLParser.ZERO_DECIMAL:
            case OpenSearchSQLParser.ONE_DECIMAL:
            case OpenSearchSQLParser.TWO_DECIMAL:
            case OpenSearchSQLParser.DECIMAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1019;
                this.decimalLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceField(): RelevanceFieldContext {
        let localContext = new RelevanceFieldContext(this.context, this.state);
        this.enterRule(localContext, 194, OpenSearchSQLParser.RULE_relevanceField);
        try {
            this.state = 1024;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.FIRST:
            case OpenSearchSQLParser.LAST:
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.FULL:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.NULLIF:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.D:
            case OpenSearchSQLParser.T:
            case OpenSearchSQLParser.TS:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.FIELD:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.NESTED:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.TYPEOF:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
            case OpenSearchSQLParser.TYPE:
            case OpenSearchSQLParser.MOD:
            case OpenSearchSQLParser.DOT:
            case OpenSearchSQLParser.ID:
            case OpenSearchSQLParser.BACKTICK_QUOTE_ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1022;
                this.qualifiedName();
                }
                break;
            case OpenSearchSQLParser.STRING_LITERAL:
            case OpenSearchSQLParser.DOUBLE_QUOTE_ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1023;
                this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceQuery(): RelevanceQueryContext {
        let localContext = new RelevanceQueryContext(this.context, this.state);
        this.enterRule(localContext, 196, OpenSearchSQLParser.RULE_relevanceQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1026;
            this.relevanceArgValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        let localContext = new RelevanceArgValueContext(this.context, this.state);
        this.enterRule(localContext, 198, OpenSearchSQLParser.RULE_relevanceArgValue);
        try {
            this.state = 1030;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1028;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1029;
                this.constant();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public highlightArgValue(): HighlightArgValueContext {
        let localContext = new HighlightArgValueContext(this.context, this.state);
        this.enterRule(localContext, 200, OpenSearchSQLParser.RULE_highlightArgValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1032;
            this.stringLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alternateMultiMatchArgName(): AlternateMultiMatchArgNameContext {
        let localContext = new AlternateMultiMatchArgNameContext(this.context, this.state);
        this.enterRule(localContext, 202, OpenSearchSQLParser.RULE_alternateMultiMatchArgName);
        try {
            this.state = 1037;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.FIELDS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1034;
                this.match(OpenSearchSQLParser.FIELDS);
                }
                break;
            case OpenSearchSQLParser.QUERY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1035;
                this.match(OpenSearchSQLParser.QUERY);
                }
                break;
            case OpenSearchSQLParser.STRING_LITERAL:
            case OpenSearchSQLParser.DOUBLE_QUOTE_ID:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1036;
                this.stringLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alternateMultiMatchQuery(): AlternateMultiMatchQueryContext {
        let localContext = new AlternateMultiMatchQueryContext(this.context, this.state);
        this.enterRule(localContext, 204, OpenSearchSQLParser.RULE_alternateMultiMatchQuery);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1039;
            localContext._argName = this.alternateMultiMatchArgName();
            this.state = 1040;
            this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
            this.state = 1041;
            localContext._argVal = this.relevanceArgValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alternateMultiMatchField(): AlternateMultiMatchFieldContext {
        let localContext = new AlternateMultiMatchFieldContext(this.context, this.state);
        this.enterRule(localContext, 206, OpenSearchSQLParser.RULE_alternateMultiMatchField);
        try {
            this.state = 1053;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1043;
                localContext._argName = this.alternateMultiMatchArgName();
                this.state = 1044;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                this.state = 1045;
                localContext._argVal = this.relevanceArgValue();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1047;
                localContext._argName = this.alternateMultiMatchArgName();
                this.state = 1048;
                this.match(OpenSearchSQLParser.EQUAL_SYMBOL);
                this.state = 1049;
                this.match(OpenSearchSQLParser.LT_SQR_PRTHS);
                this.state = 1050;
                localContext._argVal = this.relevanceArgValue();
                this.state = 1051;
                this.match(OpenSearchSQLParser.RT_SQR_PRTHS);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableName(): TableNameContext {
        let localContext = new TableNameContext(this.context, this.state);
        this.enterRule(localContext, 208, OpenSearchSQLParser.RULE_tableName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1055;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnName(): ColumnNameContext {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 210, OpenSearchSQLParser.RULE_columnName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1057;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public allTupleFields(): AllTupleFieldsContext {
        let localContext = new AllTupleFieldsContext(this.context, this.state);
        this.enterRule(localContext, 212, OpenSearchSQLParser.RULE_allTupleFields);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            localContext._path = this.qualifiedName();
            this.state = 1060;
            this.match(OpenSearchSQLParser.DOT);
            this.state = 1061;
            this.match(OpenSearchSQLParser.STAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 214, OpenSearchSQLParser.RULE_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1063;
            this.ident();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 216, OpenSearchSQLParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1065;
            this.ident();
            this.state = 1070;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1066;
                    this.match(OpenSearchSQLParser.DOT);
                    this.state = 1067;
                    this.ident();
                    }
                    }
                }
                this.state = 1072;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 218, OpenSearchSQLParser.RULE_ident);
        let _la: number;
        try {
            this.state = 1080;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OpenSearchSQLParser.DOT:
            case OpenSearchSQLParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1074;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 326) {
                    {
                    this.state = 1073;
                    this.match(OpenSearchSQLParser.DOT);
                    }
                }

                this.state = 1076;
                this.match(OpenSearchSQLParser.ID);
                }
                break;
            case OpenSearchSQLParser.BACKTICK_QUOTE_ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1077;
                this.match(OpenSearchSQLParser.BACKTICK_QUOTE_ID);
                }
                break;
            case OpenSearchSQLParser.FIRST:
            case OpenSearchSQLParser.LAST:
            case OpenSearchSQLParser.AVG:
            case OpenSearchSQLParser.COUNT:
            case OpenSearchSQLParser.MAX:
            case OpenSearchSQLParser.MIN:
            case OpenSearchSQLParser.SUM:
            case OpenSearchSQLParser.FULL:
            case OpenSearchSQLParser.D:
            case OpenSearchSQLParser.T:
            case OpenSearchSQLParser.TS:
            case OpenSearchSQLParser.FIELD:
            case OpenSearchSQLParser.TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1078;
                this.keywordsCanBeId();
                }
                break;
            case OpenSearchSQLParser.DATETIME:
            case OpenSearchSQLParser.LEFT:
            case OpenSearchSQLParser.RIGHT:
            case OpenSearchSQLParser.SUBSTRING:
            case OpenSearchSQLParser.TRIM:
            case OpenSearchSQLParser.MICROSECOND:
            case OpenSearchSQLParser.SECOND:
            case OpenSearchSQLParser.MINUTE:
            case OpenSearchSQLParser.HOUR:
            case OpenSearchSQLParser.DAY:
            case OpenSearchSQLParser.WEEK:
            case OpenSearchSQLParser.MONTH:
            case OpenSearchSQLParser.QUARTER:
            case OpenSearchSQLParser.YEAR:
            case OpenSearchSQLParser.ABS:
            case OpenSearchSQLParser.ACOS:
            case OpenSearchSQLParser.ADD:
            case OpenSearchSQLParser.ADDTIME:
            case OpenSearchSQLParser.ASCII:
            case OpenSearchSQLParser.ASIN:
            case OpenSearchSQLParser.ATAN:
            case OpenSearchSQLParser.ATAN2:
            case OpenSearchSQLParser.CBRT:
            case OpenSearchSQLParser.CEIL:
            case OpenSearchSQLParser.CEILING:
            case OpenSearchSQLParser.CONCAT:
            case OpenSearchSQLParser.CONCAT_WS:
            case OpenSearchSQLParser.CONV:
            case OpenSearchSQLParser.CONVERT_TZ:
            case OpenSearchSQLParser.COS:
            case OpenSearchSQLParser.COSH:
            case OpenSearchSQLParser.COT:
            case OpenSearchSQLParser.CRC32:
            case OpenSearchSQLParser.CURDATE:
            case OpenSearchSQLParser.CURTIME:
            case OpenSearchSQLParser.CURRENT_DATE:
            case OpenSearchSQLParser.CURRENT_TIME:
            case OpenSearchSQLParser.CURRENT_TIMESTAMP:
            case OpenSearchSQLParser.DATE:
            case OpenSearchSQLParser.DATE_ADD:
            case OpenSearchSQLParser.DATE_FORMAT:
            case OpenSearchSQLParser.DATE_SUB:
            case OpenSearchSQLParser.DATEDIFF:
            case OpenSearchSQLParser.DAYNAME:
            case OpenSearchSQLParser.DAYOFMONTH:
            case OpenSearchSQLParser.DAYOFWEEK:
            case OpenSearchSQLParser.DAYOFYEAR:
            case OpenSearchSQLParser.DEGREES:
            case OpenSearchSQLParser.DIVIDE:
            case OpenSearchSQLParser.E:
            case OpenSearchSQLParser.EXP:
            case OpenSearchSQLParser.EXPM1:
            case OpenSearchSQLParser.FLOOR:
            case OpenSearchSQLParser.FROM_DAYS:
            case OpenSearchSQLParser.FROM_UNIXTIME:
            case OpenSearchSQLParser.IF:
            case OpenSearchSQLParser.IFNULL:
            case OpenSearchSQLParser.ISNULL:
            case OpenSearchSQLParser.LAST_DAY:
            case OpenSearchSQLParser.LENGTH:
            case OpenSearchSQLParser.LN:
            case OpenSearchSQLParser.LOCALTIME:
            case OpenSearchSQLParser.LOCALTIMESTAMP:
            case OpenSearchSQLParser.LOCATE:
            case OpenSearchSQLParser.LOG:
            case OpenSearchSQLParser.LOG10:
            case OpenSearchSQLParser.LOG2:
            case OpenSearchSQLParser.LOWER:
            case OpenSearchSQLParser.LTRIM:
            case OpenSearchSQLParser.MAKEDATE:
            case OpenSearchSQLParser.MAKETIME:
            case OpenSearchSQLParser.MODULUS:
            case OpenSearchSQLParser.MONTHNAME:
            case OpenSearchSQLParser.MULTIPLY:
            case OpenSearchSQLParser.NOW:
            case OpenSearchSQLParser.NULLIF:
            case OpenSearchSQLParser.PERIOD_ADD:
            case OpenSearchSQLParser.PERIOD_DIFF:
            case OpenSearchSQLParser.PI:
            case OpenSearchSQLParser.POW:
            case OpenSearchSQLParser.POWER:
            case OpenSearchSQLParser.RADIANS:
            case OpenSearchSQLParser.RAND:
            case OpenSearchSQLParser.REPLACE:
            case OpenSearchSQLParser.RINT:
            case OpenSearchSQLParser.ROUND:
            case OpenSearchSQLParser.RTRIM:
            case OpenSearchSQLParser.REVERSE:
            case OpenSearchSQLParser.SEC_TO_TIME:
            case OpenSearchSQLParser.SIGN:
            case OpenSearchSQLParser.SIGNUM:
            case OpenSearchSQLParser.SIN:
            case OpenSearchSQLParser.SINH:
            case OpenSearchSQLParser.SQRT:
            case OpenSearchSQLParser.STR_TO_DATE:
            case OpenSearchSQLParser.SUBDATE:
            case OpenSearchSQLParser.SUBTIME:
            case OpenSearchSQLParser.SUBTRACT:
            case OpenSearchSQLParser.SYSDATE:
            case OpenSearchSQLParser.TAN:
            case OpenSearchSQLParser.TIME:
            case OpenSearchSQLParser.TIMEDIFF:
            case OpenSearchSQLParser.TIME_FORMAT:
            case OpenSearchSQLParser.TIME_TO_SEC:
            case OpenSearchSQLParser.TIMESTAMP:
            case OpenSearchSQLParser.TRUNCATE:
            case OpenSearchSQLParser.TO_DAYS:
            case OpenSearchSQLParser.TO_SECONDS:
            case OpenSearchSQLParser.UNIX_TIMESTAMP:
            case OpenSearchSQLParser.UPPER:
            case OpenSearchSQLParser.UTC_DATE:
            case OpenSearchSQLParser.UTC_TIME:
            case OpenSearchSQLParser.UTC_TIMESTAMP:
            case OpenSearchSQLParser.DAY_OF_MONTH:
            case OpenSearchSQLParser.DAY_OF_YEAR:
            case OpenSearchSQLParser.DAY_OF_WEEK:
            case OpenSearchSQLParser.HOUR_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_DAY:
            case OpenSearchSQLParser.MINUTE_OF_HOUR:
            case OpenSearchSQLParser.MONTH_OF_YEAR:
            case OpenSearchSQLParser.NESTED:
            case OpenSearchSQLParser.SECOND_OF_MINUTE:
            case OpenSearchSQLParser.TYPEOF:
            case OpenSearchSQLParser.WEEK_OF_YEAR:
            case OpenSearchSQLParser.WEEKOFYEAR:
            case OpenSearchSQLParser.WEEKDAY:
            case OpenSearchSQLParser.SUBSTR:
            case OpenSearchSQLParser.STRCMP:
            case OpenSearchSQLParser.ADDDATE:
            case OpenSearchSQLParser.YEARWEEK:
            case OpenSearchSQLParser.MOD:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1079;
                this.scalarFunctionName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keywordsCanBeId(): KeywordsCanBeIdContext {
        let localContext = new KeywordsCanBeIdContext(this.context, this.state);
        this.enterRule(localContext, 220, OpenSearchSQLParser.RULE_keywordsCanBeId);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1082;
            _la = this.tokenStream.LA(1);
            if(!(_la === 26 || _la === 36 || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 32799) !== 0) || ((((_la - 207)) & ~0x1F) === 0 && ((1 << (_la - 207)) & 16391) !== 0) || _la === 305)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 43:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        case 44:
            return this.predicate_sempred(localContext as PredicateContext, predIndex);
        case 46:
            return this.expressionAtom_sempred(localContext as ExpressionAtomContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 3);
        case 1:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private predicate_sempred(localContext: PredicateContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 6);
        case 3:
            return this.precpred(this.context, 4);
        case 4:
            return this.precpred(this.context, 3);
        case 5:
            return this.precpred(this.context, 2);
        case 6:
            return this.precpred(this.context, 5);
        case 7:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expressionAtom_sempred(localContext: ExpressionAtomContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 8:
            return this.precpred(this.context, 2);
        case 9:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,351,1085,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,1,0,3,0,224,8,0,1,0,3,0,227,8,0,1,0,1,0,1,1,1,
        1,3,1,233,8,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,241,8,4,1,5,1,5,1,5,1,
        5,1,6,1,6,1,6,1,6,3,6,251,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,
        9,1,10,1,10,3,10,264,8,10,1,10,3,10,267,8,10,1,11,1,11,3,11,271,
        8,11,1,11,1,11,1,12,1,12,1,13,1,13,3,13,279,8,13,1,13,1,13,5,13,
        283,8,13,10,13,12,13,286,9,13,1,14,1,14,3,14,290,8,14,1,14,3,14,
        293,8,14,1,15,1,15,1,15,3,15,298,8,15,1,15,3,15,301,8,15,1,15,3,
        15,304,8,15,1,15,3,15,307,8,15,1,16,1,16,3,16,311,8,16,1,16,3,16,
        314,8,16,1,16,1,16,1,16,1,16,3,16,320,8,16,1,16,1,16,3,16,324,8,
        16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,5,19,336,8,
        19,10,19,12,19,339,9,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,
        1,22,1,22,5,22,351,8,22,10,22,12,22,354,9,22,1,23,1,23,3,23,358,
        8,23,1,23,1,23,3,23,362,8,23,1,24,1,24,1,24,1,24,3,24,368,8,24,1,
        24,1,24,1,24,1,24,1,24,1,24,3,24,376,8,24,1,25,1,25,1,25,1,26,1,
        26,1,26,3,26,384,8,26,1,26,1,26,3,26,388,8,26,1,27,1,27,1,27,3,27,
        393,8,27,1,27,3,27,396,8,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,5,
        28,405,8,28,10,28,12,28,408,9,28,1,29,1,29,3,29,412,8,29,1,29,1,
        29,3,29,416,8,29,1,29,1,29,1,29,1,29,1,29,3,29,423,8,29,1,30,1,30,
        1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,
        3,36,440,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,449,8,37,1,
        38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,458,8,38,1,39,1,39,1,39,1,
        39,1,39,1,39,1,39,3,39,467,8,39,1,40,1,40,1,41,1,41,1,41,1,41,1,
        42,1,42,1,43,1,43,1,43,1,43,3,43,481,8,43,1,43,1,43,1,43,1,43,1,
        43,1,43,5,43,489,8,43,10,43,12,43,492,9,43,1,44,1,44,1,44,1,44,1,
        44,1,44,1,44,1,44,1,44,3,44,503,8,44,1,44,1,44,1,44,1,44,1,44,1,
        44,1,44,3,44,512,8,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,
        44,1,44,3,44,524,8,44,1,44,1,44,1,44,1,44,1,44,5,44,531,8,44,10,
        44,12,44,534,9,44,1,45,1,45,1,45,5,45,539,8,45,10,45,12,45,542,9,
        45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,552,8,46,1,46,1,
        46,1,46,1,46,1,46,1,46,5,46,560,8,46,10,46,12,46,563,9,46,1,47,1,
        47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,576,8,47,1,
        48,3,48,579,8,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
        49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,598,8,49,1,49,1,49,1,
        49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,609,8,49,1,50,1,50,1,50,1,
        50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,
        52,1,52,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,
        56,1,56,1,57,1,57,3,57,644,8,57,1,58,1,58,1,58,1,58,1,58,5,58,651,
        8,58,10,58,12,58,654,9,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,
        1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,
        1,61,3,61,678,8,61,1,62,1,62,1,62,4,62,683,8,62,11,62,12,62,684,
        1,62,1,62,3,62,689,8,62,1,62,1,62,1,62,1,62,4,62,695,8,62,11,62,
        12,62,696,1,62,1,62,3,62,701,8,62,1,62,1,62,1,62,1,62,1,62,1,62,
        1,62,1,62,1,62,3,62,712,8,62,1,63,1,63,1,63,1,63,1,63,3,63,719,8,
        63,1,64,1,64,1,64,1,64,1,64,3,64,726,8,64,1,64,1,64,1,65,1,65,1,
        65,1,65,1,65,5,65,735,8,65,10,65,12,65,738,9,65,1,65,1,65,1,66,1,
        66,1,66,1,66,1,66,1,66,1,66,5,66,749,8,66,10,66,12,66,752,9,66,1,
        66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,5,67,762,8,67,10,67,12,67,
        765,9,67,1,67,1,67,1,67,1,67,1,67,5,67,772,8,67,10,67,12,67,775,
        9,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,786,8,67,
        10,67,12,67,789,9,67,1,67,1,67,3,67,793,8,67,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,5,68,802,8,68,10,68,12,68,805,9,68,1,68,1,68,1,69,
        1,69,1,69,1,69,1,69,1,69,1,69,5,69,816,8,69,10,69,12,69,819,9,69,
        1,69,1,69,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,
        833,8,70,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,
        1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,855,8,72,1,73,
        1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,892,8,75,1,76,1,76,
        1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,957,8,78,1,79,
        1,79,1,80,1,80,1,81,1,81,1,82,1,82,1,83,1,83,1,84,1,84,1,85,1,85,
        1,86,1,86,1,87,1,87,1,88,1,88,1,89,1,89,1,89,5,89,982,8,89,10,89,
        12,89,985,9,89,3,89,987,8,89,1,90,1,90,1,91,1,91,1,91,1,91,1,91,
        1,91,1,91,1,91,3,91,999,8,91,1,92,1,92,1,92,1,92,1,93,1,93,1,94,
        1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1017,8,95,1,96,
        1,96,3,96,1021,8,96,1,97,1,97,3,97,1025,8,97,1,98,1,98,1,99,1,99,
        3,99,1031,8,99,1,100,1,100,1,101,1,101,1,101,3,101,1038,8,101,1,
        102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,103,1,103,
        1,103,1,103,1,103,3,103,1054,8,103,1,104,1,104,1,105,1,105,1,106,
        1,106,1,106,1,106,1,107,1,107,1,108,1,108,1,108,5,108,1069,8,108,
        10,108,12,108,1072,9,108,1,109,3,109,1075,8,109,1,109,1,109,1,109,
        1,109,3,109,1081,8,109,1,110,1,110,1,110,0,3,86,88,92,111,0,2,4,
        6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
        50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
        94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
        128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,
        160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,
        192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,0,31,
        2,0,5,5,20,20,2,0,8,8,18,18,2,0,26,26,36,36,1,0,212,214,2,0,334,
        336,343,343,2,0,342,342,349,349,2,0,24,24,59,59,1,0,314,315,2,0,
        129,129,207,207,2,0,194,194,208,208,2,0,198,198,209,209,3,0,126,
        128,154,155,204,206,1,0,84,103,1,0,311,313,1,0,260,261,4,0,16,16,
        129,129,194,194,198,198,1,0,84,92,1,0,93,103,1,0,66,77,7,0,106,106,
        110,112,120,122,138,138,175,175,185,186,193,193,6,0,107,107,139,
        139,164,164,166,166,191,191,317,317,12,0,37,37,54,54,78,79,109,109,
        116,117,152,152,156,156,160,161,177,177,180,181,203,203,269,270,
        2,0,148,150,168,168,1,0,253,255,5,0,41,41,233,235,238,240,267,268,
        310,310,2,0,236,237,244,246,2,0,233,234,239,240,1,0,244,245,1,0,
        273,306,1,0,308,309,7,0,26,26,36,36,66,70,81,81,207,209,221,221,
        305,305,1192,0,223,1,0,0,0,2,232,1,0,0,0,4,234,1,0,0,0,6,236,1,0,
        0,0,8,240,1,0,0,0,10,242,1,0,0,0,12,246,1,0,0,0,14,252,1,0,0,0,16,
        256,1,0,0,0,18,259,1,0,0,0,20,261,1,0,0,0,22,268,1,0,0,0,24,274,
        1,0,0,0,26,278,1,0,0,0,28,287,1,0,0,0,30,294,1,0,0,0,32,323,1,0,
        0,0,34,325,1,0,0,0,36,328,1,0,0,0,38,332,1,0,0,0,40,340,1,0,0,0,
        42,342,1,0,0,0,44,345,1,0,0,0,46,355,1,0,0,0,48,375,1,0,0,0,50,377,
        1,0,0,0,52,387,1,0,0,0,54,389,1,0,0,0,56,399,1,0,0,0,58,422,1,0,
        0,0,60,424,1,0,0,0,62,426,1,0,0,0,64,428,1,0,0,0,66,430,1,0,0,0,
        68,432,1,0,0,0,70,434,1,0,0,0,72,439,1,0,0,0,74,448,1,0,0,0,76,457,
        1,0,0,0,78,466,1,0,0,0,80,468,1,0,0,0,82,470,1,0,0,0,84,474,1,0,
        0,0,86,480,1,0,0,0,88,493,1,0,0,0,90,535,1,0,0,0,92,551,1,0,0,0,
        94,575,1,0,0,0,96,578,1,0,0,0,98,608,1,0,0,0,100,610,1,0,0,0,102,
        619,1,0,0,0,104,621,1,0,0,0,106,628,1,0,0,0,108,630,1,0,0,0,110,
        637,1,0,0,0,112,639,1,0,0,0,114,643,1,0,0,0,116,645,1,0,0,0,118,
        657,1,0,0,0,120,664,1,0,0,0,122,677,1,0,0,0,124,711,1,0,0,0,126,
        718,1,0,0,0,128,720,1,0,0,0,130,729,1,0,0,0,132,741,1,0,0,0,134,
        792,1,0,0,0,136,794,1,0,0,0,138,808,1,0,0,0,140,832,1,0,0,0,142,
        834,1,0,0,0,144,854,1,0,0,0,146,856,1,0,0,0,148,862,1,0,0,0,150,
        891,1,0,0,0,152,893,1,0,0,0,154,895,1,0,0,0,156,956,1,0,0,0,158,
        958,1,0,0,0,160,960,1,0,0,0,162,962,1,0,0,0,164,964,1,0,0,0,166,
        966,1,0,0,0,168,968,1,0,0,0,170,970,1,0,0,0,172,972,1,0,0,0,174,
        974,1,0,0,0,176,976,1,0,0,0,178,986,1,0,0,0,180,988,1,0,0,0,182,
        998,1,0,0,0,184,1000,1,0,0,0,186,1004,1,0,0,0,188,1006,1,0,0,0,190,
        1016,1,0,0,0,192,1020,1,0,0,0,194,1024,1,0,0,0,196,1026,1,0,0,0,
        198,1030,1,0,0,0,200,1032,1,0,0,0,202,1037,1,0,0,0,204,1039,1,0,
        0,0,206,1053,1,0,0,0,208,1055,1,0,0,0,210,1057,1,0,0,0,212,1059,
        1,0,0,0,214,1063,1,0,0,0,216,1065,1,0,0,0,218,1080,1,0,0,0,220,1082,
        1,0,0,0,222,224,3,2,1,0,223,222,1,0,0,0,223,224,1,0,0,0,224,226,
        1,0,0,0,225,227,5,332,0,0,226,225,1,0,0,0,226,227,1,0,0,0,227,228,
        1,0,0,0,228,229,5,0,0,1,229,1,1,0,0,0,230,233,3,4,2,0,231,233,3,
        8,4,0,232,230,1,0,0,0,232,231,1,0,0,0,233,3,1,0,0,0,234,235,3,6,
        3,0,235,5,1,0,0,0,236,237,3,20,10,0,237,7,1,0,0,0,238,241,3,10,5,
        0,239,241,3,12,6,0,240,238,1,0,0,0,240,239,1,0,0,0,241,9,1,0,0,0,
        242,243,5,56,0,0,243,244,5,104,0,0,244,245,3,16,8,0,245,11,1,0,0,
        0,246,247,5,19,0,0,247,248,5,104,0,0,248,250,3,16,8,0,249,251,3,
        14,7,0,250,249,1,0,0,0,250,251,1,0,0,0,251,13,1,0,0,0,252,253,5,
        15,0,0,253,254,5,38,0,0,254,255,3,18,9,0,255,15,1,0,0,0,256,257,
        5,38,0,0,257,258,3,18,9,0,258,17,1,0,0,0,259,260,3,62,31,0,260,19,
        1,0,0,0,261,263,3,22,11,0,262,264,3,30,15,0,263,262,1,0,0,0,263,
        264,1,0,0,0,264,266,1,0,0,0,265,267,3,48,24,0,266,265,1,0,0,0,266,
        267,1,0,0,0,267,21,1,0,0,0,268,270,5,55,0,0,269,271,3,24,12,0,270,
        269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,273,3,26,13,0,273,
        23,1,0,0,0,274,275,7,0,0,0,275,25,1,0,0,0,276,279,5,311,0,0,277,
        279,3,28,14,0,278,276,1,0,0,0,278,277,1,0,0,0,279,284,1,0,0,0,280,
        281,5,331,0,0,281,283,3,28,14,0,282,280,1,0,0,0,283,286,1,0,0,0,
        284,282,1,0,0,0,284,285,1,0,0,0,285,27,1,0,0,0,286,284,1,0,0,0,287,
        292,3,86,43,0,288,290,5,7,0,0,289,288,1,0,0,0,289,290,1,0,0,0,290,
        291,1,0,0,0,291,293,3,214,107,0,292,289,1,0,0,0,292,293,1,0,0,0,
        293,29,1,0,0,0,294,295,5,27,0,0,295,297,3,32,16,0,296,298,3,34,17,
        0,297,296,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,301,3,36,18,
        0,300,299,1,0,0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,304,3,42,21,
        0,303,302,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,307,3,44,22,
        0,306,305,1,0,0,0,306,307,1,0,0,0,307,31,1,0,0,0,308,313,3,208,104,
        0,309,311,5,7,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,
        0,312,314,3,214,107,0,313,310,1,0,0,0,313,314,1,0,0,0,314,324,1,
        0,0,0,315,316,5,327,0,0,316,317,3,20,10,0,317,319,5,328,0,0,318,
        320,5,7,0,0,319,318,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,
        322,3,214,107,0,322,324,1,0,0,0,323,308,1,0,0,0,323,315,1,0,0,0,
        324,33,1,0,0,0,325,326,5,63,0,0,326,327,3,86,43,0,327,35,1,0,0,0,
        328,329,5,28,0,0,329,330,5,11,0,0,330,331,3,38,19,0,331,37,1,0,0,
        0,332,337,3,40,20,0,333,334,5,331,0,0,334,336,3,40,20,0,335,333,
        1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,39,1,
        0,0,0,339,337,1,0,0,0,340,341,3,86,43,0,341,41,1,0,0,0,342,343,5,
        29,0,0,343,344,3,86,43,0,344,43,1,0,0,0,345,346,5,49,0,0,346,347,
        5,11,0,0,347,352,3,46,23,0,348,349,5,331,0,0,349,351,3,46,23,0,350,
        348,1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,
        45,1,0,0,0,354,352,1,0,0,0,355,357,3,86,43,0,356,358,7,1,0,0,357,
        356,1,0,0,0,357,358,1,0,0,0,358,361,1,0,0,0,359,360,5,46,0,0,360,
        362,7,2,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,47,1,0,0,0,363,367,
        5,39,0,0,364,365,3,60,30,0,365,366,5,331,0,0,366,368,1,0,0,0,367,
        364,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,376,3,60,30,0,370,
        371,5,39,0,0,371,372,3,60,30,0,372,373,5,82,0,0,373,374,3,60,30,
        0,374,376,1,0,0,0,375,363,1,0,0,0,375,370,1,0,0,0,376,49,1,0,0,0,
        377,378,3,52,26,0,378,379,3,54,27,0,379,51,1,0,0,0,380,381,7,3,0,
        0,381,383,5,327,0,0,382,384,3,178,89,0,383,382,1,0,0,0,383,384,1,
        0,0,0,384,385,1,0,0,0,385,388,5,328,0,0,386,388,3,144,72,0,387,380,
        1,0,0,0,387,386,1,0,0,0,388,53,1,0,0,0,389,390,5,51,0,0,390,392,
        5,327,0,0,391,393,3,56,28,0,392,391,1,0,0,0,392,393,1,0,0,0,393,
        395,1,0,0,0,394,396,3,44,22,0,395,394,1,0,0,0,395,396,1,0,0,0,396,
        397,1,0,0,0,397,398,5,328,0,0,398,55,1,0,0,0,399,400,5,52,0,0,400,
        401,5,11,0,0,401,406,3,86,43,0,402,403,5,331,0,0,403,405,3,86,43,
        0,404,402,1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,
        0,407,57,1,0,0,0,408,406,1,0,0,0,409,423,3,62,31,0,410,412,3,68,
        34,0,411,410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,423,3,60,
        30,0,414,416,3,68,34,0,415,414,1,0,0,0,415,416,1,0,0,0,416,417,1,
        0,0,0,417,423,3,66,33,0,418,423,3,64,32,0,419,423,3,72,36,0,420,
        423,3,82,41,0,421,423,3,70,35,0,422,409,1,0,0,0,422,411,1,0,0,0,
        422,415,1,0,0,0,422,418,1,0,0,0,422,419,1,0,0,0,422,420,1,0,0,0,
        422,421,1,0,0,0,423,59,1,0,0,0,424,425,7,4,0,0,425,61,1,0,0,0,426,
        427,7,5,0,0,427,63,1,0,0,0,428,429,7,6,0,0,429,65,1,0,0,0,430,431,
        5,345,0,0,431,67,1,0,0,0,432,433,7,7,0,0,433,69,1,0,0,0,434,435,
        5,45,0,0,435,71,1,0,0,0,436,440,3,74,37,0,437,440,3,76,38,0,438,
        440,3,78,39,0,439,436,1,0,0,0,439,437,1,0,0,0,439,438,1,0,0,0,440,
        73,1,0,0,0,441,442,5,129,0,0,442,449,3,62,31,0,443,444,5,210,0,0,
        444,445,7,8,0,0,445,446,3,62,31,0,446,447,5,211,0,0,447,449,1,0,
        0,0,448,441,1,0,0,0,448,443,1,0,0,0,449,75,1,0,0,0,450,451,5,194,
        0,0,451,458,3,62,31,0,452,453,5,210,0,0,453,454,7,9,0,0,454,455,
        3,62,31,0,455,456,5,211,0,0,456,458,1,0,0,0,457,450,1,0,0,0,457,
        452,1,0,0,0,458,77,1,0,0,0,459,460,5,198,0,0,460,467,3,62,31,0,461,
        462,5,210,0,0,462,463,7,10,0,0,463,464,3,62,31,0,464,465,5,211,0,
        0,465,467,1,0,0,0,466,459,1,0,0,0,466,461,1,0,0,0,467,79,1,0,0,0,
        468,469,7,11,0,0,469,81,1,0,0,0,470,471,5,83,0,0,471,472,3,86,43,
        0,472,473,3,84,42,0,473,83,1,0,0,0,474,475,7,12,0,0,475,85,1,0,0,
        0,476,477,6,43,-1,0,477,478,5,44,0,0,478,481,3,86,43,4,479,481,3,
        88,44,0,480,476,1,0,0,0,480,479,1,0,0,0,481,490,1,0,0,0,482,483,
        10,3,0,0,483,484,5,6,0,0,484,489,3,86,43,4,485,486,10,2,0,0,486,
        487,5,48,0,0,487,489,3,86,43,3,488,482,1,0,0,0,488,485,1,0,0,0,489,
        492,1,0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,87,1,0,0,0,492,490,
        1,0,0,0,493,494,6,44,-1,0,494,495,3,92,46,0,495,532,1,0,0,0,496,
        497,10,6,0,0,497,498,3,94,47,0,498,499,3,88,44,7,499,531,1,0,0,0,
        500,502,10,4,0,0,501,503,5,44,0,0,502,501,1,0,0,0,502,503,1,0,0,
        0,503,504,1,0,0,0,504,505,5,10,0,0,505,506,3,88,44,0,506,507,5,6,
        0,0,507,508,3,88,44,5,508,531,1,0,0,0,509,511,10,3,0,0,510,512,5,
        44,0,0,511,510,1,0,0,0,511,512,1,0,0,0,512,513,1,0,0,0,513,514,5,
        38,0,0,514,531,3,88,44,4,515,516,10,2,0,0,516,517,5,53,0,0,517,531,
        3,88,44,3,518,519,10,5,0,0,519,520,5,34,0,0,520,531,3,96,48,0,521,
        523,10,1,0,0,522,524,5,44,0,0,523,522,1,0,0,0,523,524,1,0,0,0,524,
        525,1,0,0,0,525,526,5,30,0,0,526,527,5,327,0,0,527,528,3,90,45,0,
        528,529,5,328,0,0,529,531,1,0,0,0,530,496,1,0,0,0,530,500,1,0,0,
        0,530,509,1,0,0,0,530,515,1,0,0,0,530,518,1,0,0,0,530,521,1,0,0,
        0,531,534,1,0,0,0,532,530,1,0,0,0,532,533,1,0,0,0,533,89,1,0,0,0,
        534,532,1,0,0,0,535,540,3,86,43,0,536,537,5,331,0,0,537,539,3,86,
        43,0,538,536,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,1,0,
        0,0,541,91,1,0,0,0,542,540,1,0,0,0,543,544,6,46,-1,0,544,552,3,58,
        29,0,545,552,3,210,105,0,546,552,3,98,49,0,547,548,5,327,0,0,548,
        549,3,86,43,0,549,550,5,328,0,0,550,552,1,0,0,0,551,543,1,0,0,0,
        551,545,1,0,0,0,551,546,1,0,0,0,551,547,1,0,0,0,552,561,1,0,0,0,
        553,554,10,2,0,0,554,555,7,13,0,0,555,560,3,92,46,3,556,557,10,1,
        0,0,557,558,7,7,0,0,558,560,3,92,46,2,559,553,1,0,0,0,559,556,1,
        0,0,0,560,563,1,0,0,0,561,559,1,0,0,0,561,562,1,0,0,0,562,93,1,0,
        0,0,563,561,1,0,0,0,564,576,5,318,0,0,565,576,5,319,0,0,566,576,
        5,320,0,0,567,568,5,320,0,0,568,576,5,318,0,0,569,570,5,319,0,0,
        570,576,5,318,0,0,571,572,5,320,0,0,572,576,5,319,0,0,573,574,5,
        321,0,0,574,576,5,318,0,0,575,564,1,0,0,0,575,565,1,0,0,0,575,566,
        1,0,0,0,575,567,1,0,0,0,575,569,1,0,0,0,575,571,1,0,0,0,575,573,
        1,0,0,0,576,95,1,0,0,0,577,579,5,44,0,0,578,577,1,0,0,0,578,579,
        1,0,0,0,579,580,1,0,0,0,580,581,5,45,0,0,581,97,1,0,0,0,582,583,
        3,166,83,0,583,584,5,327,0,0,584,585,3,212,106,0,585,586,5,328,0,
        0,586,609,1,0,0,0,587,588,3,122,61,0,588,589,5,327,0,0,589,590,3,
        178,89,0,590,591,5,328,0,0,591,609,1,0,0,0,592,609,3,124,62,0,593,
        609,3,50,25,0,594,609,3,144,72,0,595,597,3,144,72,0,596,598,3,44,
        22,0,597,596,1,0,0,0,597,598,1,0,0,0,598,599,1,0,0,0,599,600,3,146,
        73,0,600,609,1,0,0,0,601,609,3,128,64,0,602,609,3,126,63,0,603,609,
        3,116,58,0,604,609,3,118,59,0,605,609,3,108,54,0,606,609,3,104,52,
        0,607,609,3,100,50,0,608,582,1,0,0,0,608,587,1,0,0,0,608,592,1,0,
        0,0,608,593,1,0,0,0,608,594,1,0,0,0,608,595,1,0,0,0,608,601,1,0,
        0,0,608,602,1,0,0,0,608,603,1,0,0,0,608,604,1,0,0,0,608,605,1,0,
        0,0,608,606,1,0,0,0,608,607,1,0,0,0,609,99,1,0,0,0,610,611,3,102,
        51,0,611,612,5,327,0,0,612,613,3,110,55,0,613,614,5,331,0,0,614,
        615,3,180,90,0,615,616,5,331,0,0,616,617,3,180,90,0,617,618,5,328,
        0,0,618,101,1,0,0,0,619,620,7,14,0,0,620,103,1,0,0,0,621,622,5,147,
        0,0,622,623,5,327,0,0,623,624,3,106,53,0,624,625,5,331,0,0,625,626,
        3,180,90,0,626,627,5,328,0,0,627,105,1,0,0,0,628,629,7,15,0,0,629,
        107,1,0,0,0,630,631,5,143,0,0,631,632,5,327,0,0,632,633,3,114,57,
        0,633,634,5,27,0,0,634,635,3,180,90,0,635,636,5,328,0,0,636,109,
        1,0,0,0,637,638,7,16,0,0,638,111,1,0,0,0,639,640,7,17,0,0,640,113,
        1,0,0,0,641,644,3,110,55,0,642,644,3,112,56,0,643,641,1,0,0,0,643,
        642,1,0,0,0,644,115,1,0,0,0,645,646,5,307,0,0,646,647,5,327,0,0,
        647,652,3,194,97,0,648,649,5,331,0,0,649,651,3,184,92,0,650,648,
        1,0,0,0,651,654,1,0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,655,
        1,0,0,0,654,652,1,0,0,0,655,656,5,328,0,0,656,117,1,0,0,0,657,658,
        5,172,0,0,658,659,5,327,0,0,659,660,3,180,90,0,660,661,5,30,0,0,
        661,662,3,180,90,0,662,663,5,328,0,0,663,119,1,0,0,0,664,665,3,194,
        97,0,665,666,5,318,0,0,666,667,5,240,0,0,667,668,5,327,0,0,668,669,
        3,196,98,0,669,670,5,328,0,0,670,121,1,0,0,0,671,678,3,150,75,0,
        672,678,3,156,78,0,673,678,3,158,79,0,674,678,3,160,80,0,675,678,
        3,164,82,0,676,678,3,166,83,0,677,671,1,0,0,0,677,672,1,0,0,0,677,
        673,1,0,0,0,677,674,1,0,0,0,677,675,1,0,0,0,677,676,1,0,0,0,678,
        123,1,0,0,0,679,680,5,12,0,0,680,682,3,86,43,0,681,683,3,142,71,
        0,682,681,1,0,0,0,683,684,1,0,0,0,684,682,1,0,0,0,684,685,1,0,0,
        0,685,688,1,0,0,0,686,687,5,22,0,0,687,689,3,180,90,0,688,686,1,
        0,0,0,688,689,1,0,0,0,689,690,1,0,0,0,690,691,5,80,0,0,691,712,1,
        0,0,0,692,694,5,12,0,0,693,695,3,142,71,0,694,693,1,0,0,0,695,696,
        1,0,0,0,696,694,1,0,0,0,696,697,1,0,0,0,697,700,1,0,0,0,698,699,
        5,22,0,0,699,701,3,180,90,0,700,698,1,0,0,0,700,701,1,0,0,0,701,
        702,1,0,0,0,702,703,5,80,0,0,703,712,1,0,0,0,704,705,5,13,0,0,705,
        706,5,327,0,0,706,707,3,86,43,0,707,708,5,7,0,0,708,709,3,140,70,
        0,709,710,5,328,0,0,710,712,1,0,0,0,711,679,1,0,0,0,711,692,1,0,
        0,0,711,704,1,0,0,0,712,125,1,0,0,0,713,719,3,130,65,0,714,719,3,
        132,66,0,715,719,3,134,67,0,716,719,3,136,68,0,717,719,3,138,69,
        0,718,713,1,0,0,0,718,714,1,0,0,0,718,715,1,0,0,0,718,716,1,0,0,
        0,718,717,1,0,0,0,719,127,1,0,0,0,720,721,3,168,84,0,721,722,5,327,
        0,0,722,725,3,126,63,0,723,724,5,331,0,0,724,726,3,192,96,0,725,
        723,1,0,0,0,725,726,1,0,0,0,726,727,1,0,0,0,727,728,5,328,0,0,728,
        129,1,0,0,0,729,730,3,162,81,0,730,731,5,327,0,0,731,736,3,196,98,
        0,732,733,5,331,0,0,733,735,3,182,91,0,734,732,1,0,0,0,735,738,1,
        0,0,0,736,734,1,0,0,0,736,737,1,0,0,0,737,739,1,0,0,0,738,736,1,
        0,0,0,739,740,5,328,0,0,740,131,1,0,0,0,741,742,3,170,85,0,742,743,
        5,327,0,0,743,744,3,194,97,0,744,745,5,331,0,0,745,750,3,196,98,
        0,746,747,5,331,0,0,747,749,3,182,91,0,748,746,1,0,0,0,749,752,1,
        0,0,0,750,748,1,0,0,0,750,751,1,0,0,0,751,753,1,0,0,0,752,750,1,
        0,0,0,753,754,5,328,0,0,754,133,1,0,0,0,755,756,3,172,86,0,756,757,
        5,327,0,0,757,758,5,329,0,0,758,763,3,190,95,0,759,760,5,331,0,0,
        760,762,3,190,95,0,761,759,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,
        0,763,764,1,0,0,0,764,766,1,0,0,0,765,763,1,0,0,0,766,767,5,330,
        0,0,767,768,5,331,0,0,768,773,3,196,98,0,769,770,5,331,0,0,770,772,
        3,182,91,0,771,769,1,0,0,0,772,775,1,0,0,0,773,771,1,0,0,0,773,774,
        1,0,0,0,774,776,1,0,0,0,775,773,1,0,0,0,776,777,5,328,0,0,777,793,
        1,0,0,0,778,779,3,172,86,0,779,780,5,327,0,0,780,781,3,204,102,0,
        781,782,5,331,0,0,782,787,3,206,103,0,783,784,5,331,0,0,784,786,
        3,182,91,0,785,783,1,0,0,0,786,789,1,0,0,0,787,785,1,0,0,0,787,788,
        1,0,0,0,788,790,1,0,0,0,789,787,1,0,0,0,790,791,5,328,0,0,791,793,
        1,0,0,0,792,755,1,0,0,0,792,778,1,0,0,0,793,135,1,0,0,0,794,795,
        3,194,97,0,795,796,5,318,0,0,796,797,3,174,87,0,797,798,5,327,0,
        0,798,803,3,196,98,0,799,800,5,331,0,0,800,802,3,182,91,0,801,799,
        1,0,0,0,802,805,1,0,0,0,803,801,1,0,0,0,803,804,1,0,0,0,804,806,
        1,0,0,0,805,803,1,0,0,0,806,807,5,328,0,0,807,137,1,0,0,0,808,809,
        3,194,97,0,809,810,5,318,0,0,810,811,3,176,88,0,811,812,5,327,0,
        0,812,817,3,196,98,0,813,814,5,331,0,0,814,816,3,182,91,0,815,813,
        1,0,0,0,816,819,1,0,0,0,817,815,1,0,0,0,817,818,1,0,0,0,818,820,
        1,0,0,0,819,817,1,0,0,0,820,821,5,328,0,0,821,139,1,0,0,0,822,833,
        5,129,0,0,823,833,5,194,0,0,824,833,5,198,0,0,825,833,5,32,0,0,826,
        833,5,33,0,0,827,833,5,21,0,0,828,833,5,40,0,0,829,833,5,25,0,0,
        830,833,5,57,0,0,831,833,5,9,0,0,832,822,1,0,0,0,832,823,1,0,0,0,
        832,824,1,0,0,0,832,825,1,0,0,0,832,826,1,0,0,0,832,827,1,0,0,0,
        832,828,1,0,0,0,832,829,1,0,0,0,832,830,1,0,0,0,832,831,1,0,0,0,
        833,141,1,0,0,0,834,835,5,62,0,0,835,836,3,180,90,0,836,837,5,58,
        0,0,837,838,3,180,90,0,838,143,1,0,0,0,839,840,3,148,74,0,840,841,
        5,327,0,0,841,842,3,180,90,0,842,843,5,328,0,0,843,855,1,0,0,0,844,
        845,5,67,0,0,845,846,5,327,0,0,846,847,5,311,0,0,847,855,5,328,0,
        0,848,849,5,67,0,0,849,850,5,327,0,0,850,851,5,20,0,0,851,852,3,
        180,90,0,852,853,5,328,0,0,853,855,1,0,0,0,854,839,1,0,0,0,854,844,
        1,0,0,0,854,848,1,0,0,0,855,145,1,0,0,0,856,857,5,222,0,0,857,858,
        5,327,0,0,858,859,5,63,0,0,859,860,3,86,43,0,860,861,5,328,0,0,861,
        147,1,0,0,0,862,863,7,18,0,0,863,149,1,0,0,0,864,892,5,105,0,0,865,
        892,5,113,0,0,866,892,5,114,0,0,867,892,5,115,0,0,868,892,5,118,
        0,0,869,892,5,123,0,0,870,892,5,140,0,0,871,892,5,141,0,0,872,892,
        5,142,0,0,873,892,5,144,0,0,874,892,5,153,0,0,875,892,5,157,0,0,
        876,892,5,158,0,0,877,892,5,159,0,0,878,892,5,317,0,0,879,892,5,
        171,0,0,880,892,5,173,0,0,881,892,5,174,0,0,882,892,5,176,0,0,883,
        892,5,178,0,0,884,892,5,179,0,0,885,892,5,183,0,0,886,892,5,184,
        0,0,887,892,5,187,0,0,888,892,5,199,0,0,889,892,3,152,76,0,890,892,
        3,154,77,0,891,864,1,0,0,0,891,865,1,0,0,0,891,866,1,0,0,0,891,867,
        1,0,0,0,891,868,1,0,0,0,891,869,1,0,0,0,891,870,1,0,0,0,891,871,
        1,0,0,0,891,872,1,0,0,0,891,873,1,0,0,0,891,874,1,0,0,0,891,875,
        1,0,0,0,891,876,1,0,0,0,891,877,1,0,0,0,891,878,1,0,0,0,891,879,
        1,0,0,0,891,880,1,0,0,0,891,881,1,0,0,0,891,882,1,0,0,0,891,883,
        1,0,0,0,891,884,1,0,0,0,891,885,1,0,0,0,891,886,1,0,0,0,891,887,
        1,0,0,0,891,888,1,0,0,0,891,889,1,0,0,0,891,890,1,0,0,0,892,151,
        1,0,0,0,893,894,7,19,0,0,894,153,1,0,0,0,895,896,7,20,0,0,896,155,
        1,0,0,0,897,957,3,80,40,0,898,957,5,271,0,0,899,957,5,108,0,0,900,
        957,5,119,0,0,901,957,5,124,0,0,902,957,5,125,0,0,903,957,5,129,
        0,0,904,957,5,130,0,0,905,957,5,131,0,0,906,957,5,132,0,0,907,957,
        5,133,0,0,908,957,5,16,0,0,909,957,5,88,0,0,910,957,5,134,0,0,911,
        957,5,135,0,0,912,957,5,216,0,0,913,957,5,136,0,0,914,957,5,137,
        0,0,915,957,5,217,0,0,916,957,5,218,0,0,917,957,5,145,0,0,918,957,
        5,146,0,0,919,957,5,87,0,0,920,957,5,230,0,0,921,957,5,151,0,0,922,
        957,5,162,0,0,923,957,5,163,0,0,924,957,5,84,0,0,925,957,5,86,0,
        0,926,957,5,241,0,0,927,957,5,242,0,0,928,957,5,90,0,0,929,957,5,
        165,0,0,930,957,5,243,0,0,931,957,5,167,0,0,932,957,5,169,0,0,933,
        957,5,170,0,0,934,957,5,91,0,0,935,957,5,182,0,0,936,957,5,85,0,
        0,937,957,5,256,0,0,938,957,5,189,0,0,939,957,5,190,0,0,940,957,
        5,192,0,0,941,957,5,188,0,0,942,957,5,194,0,0,943,957,5,196,0,0,
        944,957,5,197,0,0,945,957,5,195,0,0,946,957,5,198,0,0,947,957,5,
        200,0,0,948,957,5,201,0,0,949,957,5,202,0,0,950,957,5,89,0,0,951,
        957,5,266,0,0,952,957,5,264,0,0,953,957,5,265,0,0,954,957,5,92,0,
        0,955,957,5,272,0,0,956,897,1,0,0,0,956,898,1,0,0,0,956,899,1,0,
        0,0,956,900,1,0,0,0,956,901,1,0,0,0,956,902,1,0,0,0,956,903,1,0,
        0,0,956,904,1,0,0,0,956,905,1,0,0,0,956,906,1,0,0,0,956,907,1,0,
        0,0,956,908,1,0,0,0,956,909,1,0,0,0,956,910,1,0,0,0,956,911,1,0,
        0,0,956,912,1,0,0,0,956,913,1,0,0,0,956,914,1,0,0,0,956,915,1,0,
        0,0,956,916,1,0,0,0,956,917,1,0,0,0,956,918,1,0,0,0,956,919,1,0,
        0,0,956,920,1,0,0,0,956,921,1,0,0,0,956,922,1,0,0,0,956,923,1,0,
        0,0,956,924,1,0,0,0,956,925,1,0,0,0,956,926,1,0,0,0,956,927,1,0,
        0,0,956,928,1,0,0,0,956,929,1,0,0,0,956,930,1,0,0,0,956,931,1,0,
        0,0,956,932,1,0,0,0,956,933,1,0,0,0,956,934,1,0,0,0,956,935,1,0,
        0,0,956,936,1,0,0,0,956,937,1,0,0,0,956,938,1,0,0,0,956,939,1,0,
        0,0,956,940,1,0,0,0,956,941,1,0,0,0,956,942,1,0,0,0,956,943,1,0,
        0,0,956,944,1,0,0,0,956,945,1,0,0,0,956,946,1,0,0,0,956,947,1,0,
        0,0,956,948,1,0,0,0,956,949,1,0,0,0,956,950,1,0,0,0,956,951,1,0,
        0,0,956,952,1,0,0,0,956,953,1,0,0,0,956,954,1,0,0,0,956,955,1,0,
        0,0,957,157,1,0,0,0,958,959,7,21,0,0,959,159,1,0,0,0,960,961,7,22,
        0,0,961,161,1,0,0,0,962,963,5,251,0,0,963,163,1,0,0,0,964,965,5,
        263,0,0,965,165,1,0,0,0,966,967,5,247,0,0,967,167,1,0,0,0,968,969,
        7,23,0,0,969,169,1,0,0,0,970,971,7,24,0,0,971,171,1,0,0,0,972,973,
        7,25,0,0,973,173,1,0,0,0,974,975,7,26,0,0,975,175,1,0,0,0,976,977,
        7,27,0,0,977,177,1,0,0,0,978,983,3,180,90,0,979,980,5,331,0,0,980,
        982,3,180,90,0,981,979,1,0,0,0,982,985,1,0,0,0,983,981,1,0,0,0,983,
        984,1,0,0,0,984,987,1,0,0,0,985,983,1,0,0,0,986,978,1,0,0,0,986,
        987,1,0,0,0,987,179,1,0,0,0,988,989,3,86,43,0,989,181,1,0,0,0,990,
        991,3,186,93,0,991,992,5,318,0,0,992,993,3,198,99,0,993,999,1,0,
        0,0,994,995,3,62,31,0,995,996,5,318,0,0,996,997,3,198,99,0,997,999,
        1,0,0,0,998,990,1,0,0,0,998,994,1,0,0,0,999,183,1,0,0,0,1000,1001,
        3,188,94,0,1001,1002,5,318,0,0,1002,1003,3,200,100,0,1003,185,1,
        0,0,0,1004,1005,7,28,0,0,1005,187,1,0,0,0,1006,1007,7,29,0,0,1007,
        189,1,0,0,0,1008,1017,3,194,97,0,1009,1010,3,194,97,0,1010,1011,
        3,192,96,0,1011,1017,1,0,0,0,1012,1013,3,194,97,0,1013,1014,5,325,
        0,0,1014,1015,3,192,96,0,1015,1017,1,0,0,0,1016,1008,1,0,0,0,1016,
        1009,1,0,0,0,1016,1012,1,0,0,0,1017,191,1,0,0,0,1018,1021,3,66,33,
        0,1019,1021,3,60,30,0,1020,1018,1,0,0,0,1020,1019,1,0,0,0,1021,193,
        1,0,0,0,1022,1025,3,216,108,0,1023,1025,3,62,31,0,1024,1022,1,0,
        0,0,1024,1023,1,0,0,0,1025,195,1,0,0,0,1026,1027,3,198,99,0,1027,
        197,1,0,0,0,1028,1031,3,216,108,0,1029,1031,3,58,29,0,1030,1028,
        1,0,0,0,1030,1029,1,0,0,0,1031,199,1,0,0,0,1032,1033,3,62,31,0,1033,
        201,1,0,0,0,1034,1038,5,284,0,0,1035,1038,5,251,0,0,1036,1038,3,
        62,31,0,1037,1034,1,0,0,0,1037,1035,1,0,0,0,1037,1036,1,0,0,0,1038,
        203,1,0,0,0,1039,1040,3,202,101,0,1040,1041,5,318,0,0,1041,1042,
        3,198,99,0,1042,205,1,0,0,0,1043,1044,3,202,101,0,1044,1045,5,318,
        0,0,1045,1046,3,198,99,0,1046,1054,1,0,0,0,1047,1048,3,202,101,0,
        1048,1049,5,318,0,0,1049,1050,5,329,0,0,1050,1051,3,198,99,0,1051,
        1052,5,330,0,0,1052,1054,1,0,0,0,1053,1043,1,0,0,0,1053,1047,1,0,
        0,0,1054,207,1,0,0,0,1055,1056,3,216,108,0,1056,209,1,0,0,0,1057,
        1058,3,216,108,0,1058,211,1,0,0,0,1059,1060,3,216,108,0,1060,1061,
        5,326,0,0,1061,1062,5,311,0,0,1062,213,1,0,0,0,1063,1064,3,218,109,
        0,1064,215,1,0,0,0,1065,1070,3,218,109,0,1066,1067,5,326,0,0,1067,
        1069,3,218,109,0,1068,1066,1,0,0,0,1069,1072,1,0,0,0,1070,1068,1,
        0,0,0,1070,1071,1,0,0,0,1071,217,1,0,0,0,1072,1070,1,0,0,0,1073,
        1075,5,326,0,0,1074,1073,1,0,0,0,1074,1075,1,0,0,0,1075,1076,1,0,
        0,0,1076,1081,5,348,0,0,1077,1081,5,350,0,0,1078,1081,3,220,110,
        0,1079,1081,3,122,61,0,1080,1074,1,0,0,0,1080,1077,1,0,0,0,1080,
        1078,1,0,0,0,1080,1079,1,0,0,0,1081,219,1,0,0,0,1082,1083,7,30,0,
        0,1083,221,1,0,0,0,88,223,226,232,240,250,263,266,270,278,284,289,
        292,297,300,303,306,310,313,319,323,337,352,357,361,367,375,383,
        387,392,395,406,411,415,422,439,448,457,466,480,488,490,502,511,
        523,530,532,540,551,559,561,575,578,597,608,643,652,677,684,688,
        696,700,711,718,725,736,750,763,773,787,792,803,817,832,854,891,
        956,983,986,998,1016,1020,1024,1030,1037,1053,1070,1074,1080
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OpenSearchSQLParser.__ATN) {
            OpenSearchSQLParser.__ATN = new antlr.ATNDeserializer().deserialize(OpenSearchSQLParser._serializedATN);
        }

        return OpenSearchSQLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OpenSearchSQLParser.literalNames, OpenSearchSQLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OpenSearchSQLParser.vocabulary;
    }

    private static readonly decisionsToDFA = OpenSearchSQLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class RootContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EOF, 0)!;
    }
    public sqlStatement(): SqlStatementContext | null {
        return this.getRuleContext(0, SqlStatementContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_root;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRoot) {
             listener.enterRoot(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRoot) {
             listener.exitRoot(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SqlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dmlStatement(): DmlStatementContext | null {
        return this.getRuleContext(0, DmlStatementContext);
    }
    public adminStatement(): AdminStatementContext | null {
        return this.getRuleContext(0, AdminStatementContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_sqlStatement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSqlStatement) {
             listener.enterSqlStatement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSqlStatement) {
             listener.exitSqlStatement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSqlStatement) {
            return visitor.visitSqlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DmlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectStatement(): SelectStatementContext {
        return this.getRuleContext(0, SelectStatementContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_dmlStatement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDmlStatement) {
             listener.enterDmlStatement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDmlStatement) {
             listener.exitDmlStatement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDmlStatement) {
            return visitor.visitDmlStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_selectStatement;
    }
    public override copyFrom(ctx: SelectStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class SimpleSelectContext extends SelectStatementContext {
    public constructor(ctx: SelectStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public querySpecification(): QuerySpecificationContext {
        return this.getRuleContext(0, QuerySpecificationContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSimpleSelect) {
             listener.enterSimpleSelect(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSimpleSelect) {
             listener.exitSimpleSelect(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleSelect) {
            return visitor.visitSimpleSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AdminStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public showStatement(): ShowStatementContext | null {
        return this.getRuleContext(0, ShowStatementContext);
    }
    public describeStatement(): DescribeStatementContext | null {
        return this.getRuleContext(0, DescribeStatementContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_adminStatement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAdminStatement) {
             listener.enterAdminStatement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAdminStatement) {
             listener.exitAdminStatement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAdminStatement) {
            return visitor.visitAdminStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.SHOW, 0)!;
    }
    public TABLES(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.TABLES, 0)!;
    }
    public tableFilter(): TableFilterContext {
        return this.getRuleContext(0, TableFilterContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_showStatement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterShowStatement) {
             listener.enterShowStatement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitShowStatement) {
             listener.exitShowStatement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitShowStatement) {
            return visitor.visitShowStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescribeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DESCRIBE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.DESCRIBE, 0)!;
    }
    public TABLES(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.TABLES, 0)!;
    }
    public tableFilter(): TableFilterContext {
        return this.getRuleContext(0, TableFilterContext)!;
    }
    public columnFilter(): ColumnFilterContext | null {
        return this.getRuleContext(0, ColumnFilterContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_describeStatement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDescribeStatement) {
             listener.enterDescribeStatement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDescribeStatement) {
             listener.exitDescribeStatement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeStatement) {
            return visitor.visitDescribeStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnFilterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLUMNS(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.COLUMNS, 0)!;
    }
    public LIKE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LIKE, 0)!;
    }
    public showDescribePattern(): ShowDescribePatternContext {
        return this.getRuleContext(0, ShowDescribePatternContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_columnFilter;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterColumnFilter) {
             listener.enterColumnFilter(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitColumnFilter) {
             listener.exitColumnFilter(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitColumnFilter) {
            return visitor.visitColumnFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableFilterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIKE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LIKE, 0)!;
    }
    public showDescribePattern(): ShowDescribePatternContext {
        return this.getRuleContext(0, ShowDescribePatternContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_tableFilter;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTableFilter) {
             listener.enterTableFilter(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTableFilter) {
             listener.exitTableFilter(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTableFilter) {
            return visitor.visitTableFilter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowDescribePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_showDescribePattern;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterShowDescribePattern) {
             listener.enterShowDescribePattern(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitShowDescribePattern) {
             listener.exitShowDescribePattern(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitShowDescribePattern) {
            return visitor.visitShowDescribePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QuerySpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectClause(): SelectClauseContext {
        return this.getRuleContext(0, SelectClauseContext)!;
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_querySpecification;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterQuerySpecification) {
             listener.enterQuerySpecification(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitQuerySpecification) {
             listener.exitQuerySpecification(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitQuerySpecification) {
            return visitor.visitQuerySpecification(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.SELECT, 0)!;
    }
    public selectElements(): SelectElementsContext {
        return this.getRuleContext(0, SelectElementsContext)!;
    }
    public selectSpec(): SelectSpecContext | null {
        return this.getRuleContext(0, SelectSpecContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_selectClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSelectClause) {
             listener.enterSelectClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSelectClause) {
             listener.exitSelectClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectClause) {
            return visitor.visitSelectClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ALL, 0);
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DISTINCT, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_selectSpec;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSelectSpec) {
             listener.enterSelectSpec(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSelectSpec) {
             listener.exitSelectSpec(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectSpec) {
            return visitor.visitSelectSpec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectElementsContext extends antlr.ParserRuleContext {
    public _star?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectElement(): SelectElementContext[];
    public selectElement(i: number): SelectElementContext | null;
    public selectElement(i?: number): SelectElementContext[] | SelectElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectElementContext);
        }

        return this.getRuleContext(i, SelectElementContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STAR, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_selectElements;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSelectElements) {
             listener.enterSelectElements(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSelectElements) {
             listener.exitSelectElements(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectElements) {
            return visitor.visitSelectElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_selectElement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSelectElement) {
             listener.enterSelectElement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSelectElement) {
             listener.exitSelectElement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSelectElement) {
            return visitor.visitSelectElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.FROM, 0)!;
    }
    public relation(): RelationContext {
        return this.getRuleContext(0, RelationContext)!;
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_fromClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFromClause) {
             listener.enterFromClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFromClause) {
             listener.exitFromClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relation;
    }
    public override copyFrom(ctx: RelationContext): void {
        super.copyFrom(ctx);
    }
}
export class TableAsRelationContext extends RelationContext {
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableName(): TableNameContext {
        return this.getRuleContext(0, TableNameContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AS, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTableAsRelation) {
             listener.enterTableAsRelation(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTableAsRelation) {
             listener.exitTableAsRelation(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTableAsRelation) {
            return visitor.visitTableAsRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryAsRelationContext extends RelationContext {
    public _subquery?: QuerySpecificationContext;
    public constructor(ctx: RelationContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public alias(): AliasContext {
        return this.getRuleContext(0, AliasContext)!;
    }
    public querySpecification(): QuerySpecificationContext {
        return this.getRuleContext(0, QuerySpecificationContext)!;
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AS, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSubqueryAsRelation) {
             listener.enterSubqueryAsRelation(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSubqueryAsRelation) {
             listener.exitSubqueryAsRelation(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryAsRelation) {
            return visitor.visitSubqueryAsRelation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.WHERE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_whereClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.GROUP, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.BY, 0)!;
    }
    public groupByElements(): GroupByElementsContext {
        return this.getRuleContext(0, GroupByElementsContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_groupByClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupByElement(): GroupByElementContext[];
    public groupByElement(i: number): GroupByElementContext | null;
    public groupByElement(i?: number): GroupByElementContext[] | GroupByElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GroupByElementContext);
        }

        return this.getRuleContext(i, GroupByElementContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_groupByElements;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGroupByElements) {
             listener.enterGroupByElements(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGroupByElements) {
             listener.exitGroupByElements(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByElements) {
            return visitor.visitGroupByElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_groupByElement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGroupByElement) {
             listener.enterGroupByElement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGroupByElement) {
             listener.exitGroupByElement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByElement) {
            return visitor.visitGroupByElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HAVING(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.HAVING, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_havingClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.BY, 0)!;
    }
    public orderByElement(): OrderByElementContext[];
    public orderByElement(i: number): OrderByElementContext | null;
    public orderByElement(i?: number): OrderByElementContext[] | OrderByElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByElementContext);
        }

        return this.getRuleContext(i, OrderByElementContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_orderByClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterOrderByClause) {
             listener.enterOrderByClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitOrderByClause) {
             listener.exitOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByElementContext extends antlr.ParserRuleContext {
    public _order?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NULLS, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LAST, 0);
    }
    public ASC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ASC, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DESC, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_orderByElement;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterOrderByElement) {
             listener.enterOrderByElement(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitOrderByElement) {
             listener.exitOrderByElement(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByElement) {
            return visitor.visitOrderByElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public _offset?: DecimalLiteralContext;
    public _limit?: DecimalLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LIMIT, 0)!;
    }
    public decimalLiteral(): DecimalLiteralContext[];
    public decimalLiteral(i: number): DecimalLiteralContext | null;
    public decimalLiteral(i?: number): DecimalLiteralContext[] | DecimalLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DecimalLiteralContext);
        }

        return this.getRuleContext(i, DecimalLiteralContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COMMA, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_limitClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterLimitClause) {
             listener.enterLimitClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitLimitClause) {
             listener.exitLimitClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFunctionClauseContext extends antlr.ParserRuleContext {
    public _function_?: WindowFunctionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public overClause(): OverClauseContext {
        return this.getRuleContext(0, OverClauseContext)!;
    }
    public windowFunction(): WindowFunctionContext {
        return this.getRuleContext(0, WindowFunctionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_windowFunctionClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterWindowFunctionClause) {
             listener.enterWindowFunctionClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitWindowFunctionClause) {
             listener.exitWindowFunctionClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitWindowFunctionClause) {
            return visitor.visitWindowFunctionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_windowFunction;
    }
    public override copyFrom(ctx: WindowFunctionContext): void {
        super.copyFrom(ctx);
    }
}
export class AggregateWindowFunctionContext extends WindowFunctionContext {
    public constructor(ctx: WindowFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public aggregateFunction(): AggregateFunctionContext {
        return this.getRuleContext(0, AggregateFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAggregateWindowFunction) {
             listener.enterAggregateWindowFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAggregateWindowFunction) {
             listener.exitAggregateWindowFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAggregateWindowFunction) {
            return visitor.visitAggregateWindowFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ScalarWindowFunctionContext extends WindowFunctionContext {
    public _functionName?: Token | null;
    public constructor(ctx: WindowFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public ROW_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ROW_NUMBER, 0);
    }
    public RANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RANK, 0);
    }
    public DENSE_RANK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DENSE_RANK, 0);
    }
    public functionArgs(): FunctionArgsContext | null {
        return this.getRuleContext(0, FunctionArgsContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScalarWindowFunction) {
             listener.enterScalarWindowFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScalarWindowFunction) {
             listener.exitScalarWindowFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScalarWindowFunction) {
            return visitor.visitScalarWindowFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OverClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OVER(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.OVER, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public partitionByClause(): PartitionByClauseContext | null {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_overClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterOverClause) {
             listener.enterOverClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitOverClause) {
             listener.exitOverClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitOverClause) {
            return visitor.visitOverClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.PARTITION, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.BY, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_partitionByClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterPartitionByClause) {
             listener.enterPartitionByClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitPartitionByClause) {
             listener.exitPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_constant;
    }
    public override copyFrom(ctx: ConstantContext): void {
        super.copyFrom(ctx);
    }
}
export class DatetimeContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public datetimeLiteral(): DatetimeLiteralContext {
        return this.getRuleContext(0, DatetimeLiteralContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDatetime) {
             listener.enterDatetime(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDatetime) {
             listener.exitDatetime(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetime) {
            return visitor.visitDatetime(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SignedDecimalContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public decimalLiteral(): DecimalLiteralContext {
        return this.getRuleContext(0, DecimalLiteralContext)!;
    }
    public sign(): SignContext | null {
        return this.getRuleContext(0, SignContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSignedDecimal) {
             listener.enterSignedDecimal(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSignedDecimal) {
             listener.exitSignedDecimal(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSignedDecimal) {
            return visitor.visitSignedDecimal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanLiteral(): BooleanLiteralContext {
        return this.getRuleContext(0, BooleanLiteralContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterBoolean) {
             listener.enterBoolean(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitBoolean) {
             listener.exitBoolean(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterString) {
             listener.enterString(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitString) {
             listener.exitString(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitString) {
            return visitor.visitString(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public nullLiteral(): NullLiteralContext {
        return this.getRuleContext(0, NullLiteralContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNull) {
             listener.enterNull(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNull) {
             listener.exitNull(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNull) {
            return visitor.visitNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public intervalLiteral(): IntervalLiteralContext {
        return this.getRuleContext(0, IntervalLiteralContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterInterval) {
             listener.enterInterval(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitInterval) {
             listener.exitInterval(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SignedRealContext extends ConstantContext {
    public constructor(ctx: ConstantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public realLiteral(): RealLiteralContext {
        return this.getRuleContext(0, RealLiteralContext)!;
    }
    public sign(): SignContext | null {
        return this.getRuleContext(0, SignContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSignedReal) {
             listener.enterSignedReal(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSignedReal) {
             listener.exitSignedReal(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSignedReal) {
            return visitor.visitSignedReal(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecimalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DECIMAL_LITERAL, 0);
    }
    public ZERO_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ZERO_DECIMAL, 0);
    }
    public ONE_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ONE_DECIMAL, 0);
    }
    public TWO_DECIMAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TWO_DECIMAL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_decimalLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDecimalLiteral) {
             listener.enterDecimalLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDecimalLiteral) {
             listener.exitDecimalLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STRING_LITERAL, 0);
    }
    public DOUBLE_QUOTE_ID(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DOUBLE_QUOTE_ID, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_stringLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_booleanLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterBooleanLiteral) {
             listener.enterBooleanLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitBooleanLiteral) {
             listener.exitBooleanLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RealLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.REAL_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_realLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRealLiteral) {
             listener.enterRealLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRealLiteral) {
             listener.exitRealLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRealLiteral) {
            return visitor.visitRealLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_sign;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSign) {
             listener.enterSign(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSign) {
             listener.exitSign(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSign) {
            return visitor.visitSign(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NullLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NULL_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.NULL_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_nullLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNullLiteral) {
             listener.enterNullLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNullLiteral) {
             listener.exitNullLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNullLiteral) {
            return visitor.visitNullLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatetimeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dateLiteral(): DateLiteralContext | null {
        return this.getRuleContext(0, DateLiteralContext);
    }
    public timeLiteral(): TimeLiteralContext | null {
        return this.getRuleContext(0, TimeLiteralContext);
    }
    public timestampLiteral(): TimestampLiteralContext | null {
        return this.getRuleContext(0, TimestampLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_datetimeLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDatetimeLiteral) {
             listener.enterDatetimeLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDatetimeLiteral) {
             listener.exitDatetimeLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetimeLiteral) {
            return visitor.visitDatetimeLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateLiteralContext extends antlr.ParserRuleContext {
    public _date?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public LEFT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LEFT_BRACE, 0);
    }
    public RIGHT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RIGHT_BRACE, 0);
    }
    public D(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.D, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_dateLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDateLiteral) {
             listener.enterDateLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDateLiteral) {
             listener.exitDateLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDateLiteral) {
            return visitor.visitDateLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeLiteralContext extends antlr.ParserRuleContext {
    public _time?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public LEFT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LEFT_BRACE, 0);
    }
    public RIGHT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RIGHT_BRACE, 0);
    }
    public T(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.T, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_timeLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTimeLiteral) {
             listener.enterTimeLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTimeLiteral) {
             listener.exitTimeLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTimeLiteral) {
            return visitor.visitTimeLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampLiteralContext extends antlr.ParserRuleContext {
    public _timestamp?: StringLiteralContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMP, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public LEFT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LEFT_BRACE, 0);
    }
    public RIGHT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RIGHT_BRACE, 0);
    }
    public TS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_timestampLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTimestampLiteral) {
             listener.enterTimestampLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTimestampLiteral) {
             listener.exitTimestampLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampLiteral) {
            return visitor.visitTimestampLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatetimeConstantLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CURRENT_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CURRENT_DATE, 0);
    }
    public CURRENT_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CURRENT_TIME, 0);
    }
    public CURRENT_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CURRENT_TIMESTAMP, 0);
    }
    public LOCALTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOCALTIME, 0);
    }
    public LOCALTIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOCALTIMESTAMP, 0);
    }
    public UTC_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.UTC_TIMESTAMP, 0);
    }
    public UTC_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.UTC_DATE, 0);
    }
    public UTC_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.UTC_TIME, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_datetimeConstantLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDatetimeConstantLiteral) {
             listener.enterDatetimeConstantLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDatetimeConstantLiteral) {
             listener.exitDatetimeConstantLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetimeConstantLiteral) {
            return visitor.visitDatetimeConstantLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERVAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.INTERVAL, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public intervalUnit(): IntervalUnitContext {
        return this.getRuleContext(0, IntervalUnitContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_intervalLiteral;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterIntervalLiteral) {
             listener.enterIntervalLiteral(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitIntervalLiteral) {
             listener.exitIntervalLiteral(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalLiteral) {
            return visitor.visitIntervalLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MICROSECOND, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEAR, 0);
    }
    public SECOND_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND_MICROSECOND, 0);
    }
    public MINUTE_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_MICROSECOND, 0);
    }
    public MINUTE_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_SECOND, 0);
    }
    public HOUR_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_MICROSECOND, 0);
    }
    public HOUR_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_SECOND, 0);
    }
    public HOUR_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_MINUTE, 0);
    }
    public DAY_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_MICROSECOND, 0);
    }
    public DAY_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_SECOND, 0);
    }
    public DAY_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_MINUTE, 0);
    }
    public DAY_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_HOUR, 0);
    }
    public YEAR_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEAR_MONTH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_intervalUnit;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterIntervalUnit) {
             listener.enterIntervalUnit(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitIntervalUnit) {
             listener.exitIntervalUnit(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitIntervalUnit) {
            return visitor.visitIntervalUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class OrExpressionContext extends ExpressionContext {
    public _left?: ExpressionContext;
    public _right?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.OR, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterOrExpression) {
             listener.enterOrExpression(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitOrExpression) {
             listener.exitOrExpression(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitOrExpression) {
            return visitor.visitOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AndExpressionContext extends ExpressionContext {
    public _left?: ExpressionContext;
    public _right?: ExpressionContext;
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.AND, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAndExpression) {
             listener.enterAndExpression(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAndExpression) {
             listener.exitAndExpression(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAndExpression) {
            return visitor.visitAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.NOT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNotExpression) {
             listener.enterNotExpression(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNotExpression) {
             listener.exitNotExpression(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicateExpressionContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public predicate(): PredicateContext {
        return this.getRuleContext(0, PredicateContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterPredicateExpression) {
             listener.enterPredicateExpression(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitPredicateExpression) {
             listener.exitPredicateExpression(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitPredicateExpression) {
            return visitor.visitPredicateExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_predicate;
    }
    public override copyFrom(ctx: PredicateContext): void {
        super.copyFrom(ctx);
    }
}
export class ExpressionAtomPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressionAtom(): ExpressionAtomContext {
        return this.getRuleContext(0, ExpressionAtomContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterExpressionAtomPredicate) {
             listener.enterExpressionAtomPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitExpressionAtomPredicate) {
             listener.exitExpressionAtomPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionAtomPredicate) {
            return visitor.visitExpressionAtomPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryComparisonPredicateContext extends PredicateContext {
    public _left?: PredicateContext;
    public _right?: PredicateContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getRuleContext(0, ComparisonOperatorContext)!;
    }
    public predicate(): PredicateContext[];
    public predicate(i: number): PredicateContext | null;
    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterBinaryComparisonPredicate) {
             listener.enterBinaryComparisonPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitBinaryComparisonPredicate) {
             listener.exitBinaryComparisonPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitBinaryComparisonPredicate) {
            return visitor.visitBinaryComparisonPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public predicate(): PredicateContext {
        return this.getRuleContext(0, PredicateContext)!;
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.IN, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public expressions(): ExpressionsContext {
        return this.getRuleContext(0, ExpressionsContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NOT, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterInPredicate) {
             listener.enterInPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitInPredicate) {
             listener.exitInPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitInPredicate) {
            return visitor.visitInPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BetweenPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public predicate(): PredicateContext[];
    public predicate(i: number): PredicateContext | null;
    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.BETWEEN, 0)!;
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.AND, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NOT, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterBetweenPredicate) {
             listener.enterBetweenPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitBetweenPredicate) {
             listener.exitBetweenPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitBetweenPredicate) {
            return visitor.visitBetweenPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IsNullPredicateContext extends PredicateContext {
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public predicate(): PredicateContext {
        return this.getRuleContext(0, PredicateContext)!;
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.IS, 0)!;
    }
    public nullNotnull(): NullNotnullContext {
        return this.getRuleContext(0, NullNotnullContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterIsNullPredicate) {
             listener.enterIsNullPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitIsNullPredicate) {
             listener.exitIsNullPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitIsNullPredicate) {
            return visitor.visitIsNullPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikePredicateContext extends PredicateContext {
    public _left?: PredicateContext;
    public _right?: PredicateContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LIKE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LIKE, 0)!;
    }
    public predicate(): PredicateContext[];
    public predicate(i: number): PredicateContext | null;
    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NOT, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterLikePredicate) {
             listener.enterLikePredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitLikePredicate) {
             listener.exitLikePredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RegexpPredicateContext extends PredicateContext {
    public _left?: PredicateContext;
    public _right?: PredicateContext;
    public constructor(ctx: PredicateContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REGEXP(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.REGEXP, 0)!;
    }
    public predicate(): PredicateContext[];
    public predicate(i: number): PredicateContext | null;
    public predicate(i?: number): PredicateContext[] | PredicateContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PredicateContext);
        }

        return this.getRuleContext(i, PredicateContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRegexpPredicate) {
             listener.enterRegexpPredicate(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRegexpPredicate) {
             listener.exitRegexpPredicate(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRegexpPredicate) {
            return visitor.visitRegexpPredicate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_expressions;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterExpressions) {
             listener.enterExpressions(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitExpressions) {
             listener.exitExpressions(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitExpressions) {
            return visitor.visitExpressions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionAtomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_expressionAtom;
    }
    public override copyFrom(ctx: ExpressionAtomContext): void {
        super.copyFrom(ctx);
    }
}
export class ConstantExpressionAtomContext extends ExpressionAtomContext {
    public constructor(ctx: ExpressionAtomContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public constant(): ConstantContext {
        return this.getRuleContext(0, ConstantContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterConstantExpressionAtom) {
             listener.enterConstantExpressionAtom(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitConstantExpressionAtom) {
             listener.exitConstantExpressionAtom(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitConstantExpressionAtom) {
            return visitor.visitConstantExpressionAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallExpressionAtomContext extends ExpressionAtomContext {
    public constructor(ctx: ExpressionAtomContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionCall(): FunctionCallContext {
        return this.getRuleContext(0, FunctionCallContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFunctionCallExpressionAtom) {
             listener.enterFunctionCallExpressionAtom(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFunctionCallExpressionAtom) {
             listener.exitFunctionCallExpressionAtom(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallExpressionAtom) {
            return visitor.visitFunctionCallExpressionAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FullColumnNameExpressionAtomContext extends ExpressionAtomContext {
    public constructor(ctx: ExpressionAtomContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnName(): ColumnNameContext {
        return this.getRuleContext(0, ColumnNameContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFullColumnNameExpressionAtom) {
             listener.enterFullColumnNameExpressionAtom(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFullColumnNameExpressionAtom) {
             listener.exitFullColumnNameExpressionAtom(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFullColumnNameExpressionAtom) {
            return visitor.visitFullColumnNameExpressionAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NestedExpressionAtomContext extends ExpressionAtomContext {
    public constructor(ctx: ExpressionAtomContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNestedExpressionAtom) {
             listener.enterNestedExpressionAtom(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNestedExpressionAtom) {
             listener.exitNestedExpressionAtom(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNestedExpressionAtom) {
            return visitor.visitNestedExpressionAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MathExpressionAtomContext extends ExpressionAtomContext {
    public _left?: ExpressionAtomContext;
    public _mathOperator?: Token | null;
    public _right?: ExpressionAtomContext;
    public constructor(ctx: ExpressionAtomContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expressionAtom(): ExpressionAtomContext[];
    public expressionAtom(i: number): ExpressionAtomContext | null;
    public expressionAtom(i?: number): ExpressionAtomContext[] | ExpressionAtomContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionAtomContext);
        }

        return this.getRuleContext(i, ExpressionAtomContext);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SLASH, 0);
    }
    public MODULE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MODULE, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUS, 0);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterMathExpressionAtom) {
             listener.enterMathExpressionAtom(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitMathExpressionAtom) {
             listener.exitMathExpressionAtom(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitMathExpressionAtom) {
            return visitor.visitMathExpressionAtom(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.GREATER_SYMBOL, 0);
    }
    public LESS_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LESS_SYMBOL, 0);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.EXCLAMATION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_comparisonOperator;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterComparisonOperator) {
             listener.enterComparisonOperator(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitComparisonOperator) {
             listener.exitComparisonOperator(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NullNotnullContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NULL_LITERAL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.NULL_LITERAL, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NOT, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_nullNotnull;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNullNotnull) {
             listener.enterNullNotnull(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNullNotnull) {
             listener.exitNullNotnull(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNullNotnull) {
            return visitor.visitNullNotnull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_functionCall;
    }
    public override copyFrom(ctx: FunctionCallContext): void {
        super.copyFrom(ctx);
    }
}
export class PositionFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public positionFunction(): PositionFunctionContext {
        return this.getRuleContext(0, PositionFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterPositionFunctionCall) {
             listener.enterPositionFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitPositionFunctionCall) {
             listener.exitPositionFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitPositionFunctionCall) {
            return visitor.visitPositionFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecificFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public specificFunction(): SpecificFunctionContext {
        return this.getRuleContext(0, SpecificFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSpecificFunctionCall) {
             listener.enterSpecificFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSpecificFunctionCall) {
             listener.exitSpecificFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSpecificFunctionCall) {
            return visitor.visitSpecificFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ScoreRelevanceFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public scoreRelevanceFunction(): ScoreRelevanceFunctionContext {
        return this.getRuleContext(0, ScoreRelevanceFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScoreRelevanceFunctionCall) {
             listener.enterScoreRelevanceFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScoreRelevanceFunctionCall) {
             listener.exitScoreRelevanceFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScoreRelevanceFunctionCall) {
            return visitor.visitScoreRelevanceFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class HighlightFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public highlightFunction(): HighlightFunctionContext {
        return this.getRuleContext(0, HighlightFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHighlightFunctionCall) {
             listener.enterHighlightFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHighlightFunctionCall) {
             listener.exitHighlightFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHighlightFunctionCall) {
            return visitor.visitHighlightFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExtractFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public extractFunction(): ExtractFunctionContext {
        return this.getRuleContext(0, ExtractFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterExtractFunctionCall) {
             listener.enterExtractFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitExtractFunctionCall) {
             listener.exitExtractFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitExtractFunctionCall) {
            return visitor.visitExtractFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelevanceFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public relevanceFunction(): RelevanceFunctionContext {
        return this.getRuleContext(0, RelevanceFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceFunctionCall) {
             listener.enterRelevanceFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceFunctionCall) {
             listener.exitRelevanceFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFunctionCall) {
            return visitor.visitRelevanceFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimestampFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public timestampFunction(): TimestampFunctionContext {
        return this.getRuleContext(0, TimestampFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTimestampFunctionCall) {
             listener.enterTimestampFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTimestampFunctionCall) {
             listener.exitTimestampFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampFunctionCall) {
            return visitor.visitTimestampFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NestedAllFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public nestedFunctionName(): NestedFunctionNameContext {
        return this.getRuleContext(0, NestedFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public allTupleFields(): AllTupleFieldsContext {
        return this.getRuleContext(0, AllTupleFieldsContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNestedAllFunctionCall) {
             listener.enterNestedAllFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNestedAllFunctionCall) {
             listener.exitNestedAllFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNestedAllFunctionCall) {
            return visitor.visitNestedAllFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FilteredAggregationFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public aggregateFunction(): AggregateFunctionContext {
        return this.getRuleContext(0, AggregateFunctionContext)!;
    }
    public filterClause(): FilterClauseContext {
        return this.getRuleContext(0, FilterClauseContext)!;
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFilteredAggregationFunctionCall) {
             listener.enterFilteredAggregationFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFilteredAggregationFunctionCall) {
             listener.exitFilteredAggregationFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFilteredAggregationFunctionCall) {
            return visitor.visitFilteredAggregationFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public windowFunctionClause(): WindowFunctionClauseContext {
        return this.getRuleContext(0, WindowFunctionClauseContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterWindowFunctionCall) {
             listener.enterWindowFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitWindowFunctionCall) {
             listener.exitWindowFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitWindowFunctionCall) {
            return visitor.visitWindowFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AggregateFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public aggregateFunction(): AggregateFunctionContext {
        return this.getRuleContext(0, AggregateFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAggregateFunctionCall) {
             listener.enterAggregateFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAggregateFunctionCall) {
             listener.exitAggregateFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAggregateFunctionCall) {
            return visitor.visitAggregateFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GetFormatFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public getFormatFunction(): GetFormatFunctionContext {
        return this.getRuleContext(0, GetFormatFunctionContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGetFormatFunctionCall) {
             listener.enterGetFormatFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGetFormatFunctionCall) {
             listener.exitGetFormatFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGetFormatFunctionCall) {
            return visitor.visitGetFormatFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ScalarFunctionCallContext extends FunctionCallContext {
    public constructor(ctx: FunctionCallContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public scalarFunctionName(): ScalarFunctionNameContext {
        return this.getRuleContext(0, ScalarFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public functionArgs(): FunctionArgsContext {
        return this.getRuleContext(0, FunctionArgsContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScalarFunctionCall) {
             listener.enterScalarFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScalarFunctionCall) {
             listener.exitScalarFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScalarFunctionCall) {
            return visitor.visitScalarFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampFunctionContext extends antlr.ParserRuleContext {
    public _firstArg?: FunctionArgContext;
    public _secondArg?: FunctionArgContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timestampFunctionName(): TimestampFunctionNameContext {
        return this.getRuleContext(0, TimestampFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public simpleDateTimePart(): SimpleDateTimePartContext {
        return this.getRuleContext(0, SimpleDateTimePartContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_timestampFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTimestampFunction) {
             listener.enterTimestampFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTimestampFunction) {
             listener.exitTimestampFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampFunction) {
            return visitor.visitTimestampFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimestampFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIMESTAMPADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMPADD, 0);
    }
    public TIMESTAMPDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMPDIFF, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_timestampFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTimestampFunctionName) {
             listener.enterTimestampFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTimestampFunctionName) {
             listener.exitTimestampFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTimestampFunctionName) {
            return visitor.visitTimestampFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetFormatFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GET_FORMAT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.GET_FORMAT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public getFormatType(): GetFormatTypeContext {
        return this.getRuleContext(0, GetFormatTypeContext)!;
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.COMMA, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_getFormatFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGetFormatFunction) {
             listener.enterGetFormatFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGetFormatFunction) {
             listener.exitGetFormatFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGetFormatFunction) {
            return visitor.visitGetFormatFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetFormatTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE, 0);
    }
    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATETIME, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_getFormatType;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterGetFormatType) {
             listener.enterGetFormatType(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitGetFormatType) {
             listener.exitGetFormatType(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitGetFormatType) {
            return visitor.visitGetFormatType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExtractFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXTRACT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EXTRACT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public datetimePart(): DatetimePartContext {
        return this.getRuleContext(0, DatetimePartContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.FROM, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_extractFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterExtractFunction) {
             listener.enterExtractFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitExtractFunction) {
             listener.exitExtractFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitExtractFunction) {
            return visitor.visitExtractFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SimpleDateTimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MICROSECOND, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEAR, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_simpleDateTimePart;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSimpleDateTimePart) {
             listener.enterSimpleDateTimePart(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSimpleDateTimePart) {
             listener.exitSimpleDateTimePart(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSimpleDateTimePart) {
            return visitor.visitSimpleDateTimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ComplexDateTimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SECOND_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND_MICROSECOND, 0);
    }
    public MINUTE_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_MICROSECOND, 0);
    }
    public MINUTE_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_SECOND, 0);
    }
    public HOUR_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_MICROSECOND, 0);
    }
    public HOUR_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_SECOND, 0);
    }
    public HOUR_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_MINUTE, 0);
    }
    public DAY_MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_MICROSECOND, 0);
    }
    public DAY_SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_SECOND, 0);
    }
    public DAY_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_MINUTE, 0);
    }
    public DAY_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_HOUR, 0);
    }
    public YEAR_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEAR_MONTH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_complexDateTimePart;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterComplexDateTimePart) {
             listener.enterComplexDateTimePart(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitComplexDateTimePart) {
             listener.exitComplexDateTimePart(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitComplexDateTimePart) {
            return visitor.visitComplexDateTimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatetimePartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleDateTimePart(): SimpleDateTimePartContext | null {
        return this.getRuleContext(0, SimpleDateTimePartContext);
    }
    public complexDateTimePart(): ComplexDateTimePartContext | null {
        return this.getRuleContext(0, ComplexDateTimePartContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_datetimePart;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDatetimePart) {
             listener.enterDatetimePart(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDatetimePart) {
             listener.exitDatetimePart(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDatetimePart) {
            return visitor.visitDatetimePart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HighlightFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HIGHLIGHT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.HIGHLIGHT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public highlightArg(): HighlightArgContext[];
    public highlightArg(i: number): HighlightArgContext | null;
    public highlightArg(i?: number): HighlightArgContext[] | HighlightArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(HighlightArgContext);
        }

        return this.getRuleContext(i, HighlightArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_highlightFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHighlightFunction) {
             listener.enterHighlightFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHighlightFunction) {
             listener.exitHighlightFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHighlightFunction) {
            return visitor.visitHighlightFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POSITION(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.POSITION, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.IN, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_positionFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterPositionFunction) {
             listener.enterPositionFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitPositionFunction) {
             listener.exitPositionFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitPositionFunction) {
            return visitor.visitPositionFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatchQueryAltSyntaxFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public MATCH_QUERY(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.MATCH_QUERY, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_matchQueryAltSyntaxFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterMatchQueryAltSyntaxFunction) {
             listener.enterMatchQueryAltSyntaxFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitMatchQueryAltSyntaxFunction) {
             listener.exitMatchQueryAltSyntaxFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitMatchQueryAltSyntaxFunction) {
            return visitor.visitMatchQueryAltSyntaxFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScalarFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public mathematicalFunctionName(): MathematicalFunctionNameContext | null {
        return this.getRuleContext(0, MathematicalFunctionNameContext);
    }
    public dateTimeFunctionName(): DateTimeFunctionNameContext | null {
        return this.getRuleContext(0, DateTimeFunctionNameContext);
    }
    public textFunctionName(): TextFunctionNameContext | null {
        return this.getRuleContext(0, TextFunctionNameContext);
    }
    public flowControlFunctionName(): FlowControlFunctionNameContext | null {
        return this.getRuleContext(0, FlowControlFunctionNameContext);
    }
    public systemFunctionName(): SystemFunctionNameContext | null {
        return this.getRuleContext(0, SystemFunctionNameContext);
    }
    public nestedFunctionName(): NestedFunctionNameContext | null {
        return this.getRuleContext(0, NestedFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_scalarFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScalarFunctionName) {
             listener.enterScalarFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScalarFunctionName) {
             listener.exitScalarFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScalarFunctionName) {
            return visitor.visitScalarFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SpecificFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_specificFunction;
    }
    public override copyFrom(ctx: SpecificFunctionContext): void {
        super.copyFrom(ctx);
    }
}
export class CaseFunctionCallContext extends SpecificFunctionContext {
    public _elseArg?: FunctionArgContext;
    public constructor(ctx: SpecificFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.CASE, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.END, 0)!;
    }
    public caseFuncAlternative(): CaseFuncAlternativeContext[];
    public caseFuncAlternative(i: number): CaseFuncAlternativeContext | null;
    public caseFuncAlternative(i?: number): CaseFuncAlternativeContext[] | CaseFuncAlternativeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseFuncAlternativeContext);
        }

        return this.getRuleContext(i, CaseFuncAlternativeContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ELSE, 0);
    }
    public functionArg(): FunctionArgContext | null {
        return this.getRuleContext(0, FunctionArgContext);
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterCaseFunctionCall) {
             listener.enterCaseFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitCaseFunctionCall) {
             listener.exitCaseFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitCaseFunctionCall) {
            return visitor.visitCaseFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataTypeFunctionCallContext extends SpecificFunctionContext {
    public constructor(ctx: SpecificFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CAST(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.CAST, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.AS, 0)!;
    }
    public convertedDataType(): ConvertedDataTypeContext {
        return this.getRuleContext(0, ConvertedDataTypeContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDataTypeFunctionCall) {
             listener.enterDataTypeFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDataTypeFunctionCall) {
             listener.exitDataTypeFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDataTypeFunctionCall) {
            return visitor.visitDataTypeFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public noFieldRelevanceFunction(): NoFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, NoFieldRelevanceFunctionContext);
    }
    public singleFieldRelevanceFunction(): SingleFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, SingleFieldRelevanceFunctionContext);
    }
    public multiFieldRelevanceFunction(): MultiFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, MultiFieldRelevanceFunctionContext);
    }
    public altSingleFieldRelevanceFunction(): AltSingleFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, AltSingleFieldRelevanceFunctionContext);
    }
    public altMultiFieldRelevanceFunction(): AltMultiFieldRelevanceFunctionContext | null {
        return this.getRuleContext(0, AltMultiFieldRelevanceFunctionContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceFunction) {
             listener.enterRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceFunction) {
             listener.exitRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFunction) {
            return visitor.visitRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScoreRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _weight?: RelevanceFieldWeightContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public scoreRelevanceFunctionName(): ScoreRelevanceFunctionNameContext {
        return this.getRuleContext(0, ScoreRelevanceFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public relevanceFunction(): RelevanceFunctionContext {
        return this.getRuleContext(0, RelevanceFunctionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COMMA, 0);
    }
    public relevanceFieldWeight(): RelevanceFieldWeightContext | null {
        return this.getRuleContext(0, RelevanceFieldWeightContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_scoreRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScoreRelevanceFunction) {
             listener.enterScoreRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScoreRelevanceFunction) {
             listener.exitScoreRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScoreRelevanceFunction) {
            return visitor.visitScoreRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NoFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public noFieldRelevanceFunctionName(): NoFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, NoFieldRelevanceFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_noFieldRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNoFieldRelevanceFunction) {
             listener.enterNoFieldRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNoFieldRelevanceFunction) {
             listener.exitNoFieldRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNoFieldRelevanceFunction) {
            return visitor.visitNoFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleFieldRelevanceFunctionName(): SingleFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, SingleFieldRelevanceFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_singleFieldRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSingleFieldRelevanceFunction) {
             listener.enterSingleFieldRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSingleFieldRelevanceFunction) {
             listener.exitSingleFieldRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSingleFieldRelevanceFunction) {
            return visitor.visitSingleFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldAndWeightContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiFieldRelevanceFunctionName(): MultiFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, MultiFieldRelevanceFunctionNameContext)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LT_SQR_PRTHS, 0);
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RT_SQR_PRTHS, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceFieldAndWeight(): RelevanceFieldAndWeightContext[];
    public relevanceFieldAndWeight(i: number): RelevanceFieldAndWeightContext | null;
    public relevanceFieldAndWeight(i?: number): RelevanceFieldAndWeightContext[] | RelevanceFieldAndWeightContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceFieldAndWeightContext);
        }

        return this.getRuleContext(i, RelevanceFieldAndWeightContext);
    }
    public relevanceQuery(): RelevanceQueryContext | null {
        return this.getRuleContext(0, RelevanceQueryContext);
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public alternateMultiMatchQuery(): AlternateMultiMatchQueryContext | null {
        return this.getRuleContext(0, AlternateMultiMatchQueryContext);
    }
    public alternateMultiMatchField(): AlternateMultiMatchFieldContext | null {
        return this.getRuleContext(0, AlternateMultiMatchFieldContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_multiFieldRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterMultiFieldRelevanceFunction) {
             listener.enterMultiFieldRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitMultiFieldRelevanceFunction) {
             listener.exitMultiFieldRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitMultiFieldRelevanceFunction) {
            return visitor.visitMultiFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltSingleFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _altSyntaxFunctionName?: AltSingleFieldRelevanceFunctionNameContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public altSingleFieldRelevanceFunctionName(): AltSingleFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, AltSingleFieldRelevanceFunctionNameContext)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_altSingleFieldRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAltSingleFieldRelevanceFunction) {
             listener.enterAltSingleFieldRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAltSingleFieldRelevanceFunction) {
             listener.exitAltSingleFieldRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAltSingleFieldRelevanceFunction) {
            return visitor.visitAltSingleFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltMultiFieldRelevanceFunctionContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _altSyntaxFunctionName?: AltMultiFieldRelevanceFunctionNameContext;
    public _query?: RelevanceQueryContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public altMultiFieldRelevanceFunctionName(): AltMultiFieldRelevanceFunctionNameContext {
        return this.getRuleContext(0, AltMultiFieldRelevanceFunctionNameContext)!;
    }
    public relevanceQuery(): RelevanceQueryContext {
        return this.getRuleContext(0, RelevanceQueryContext)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public relevanceArg(): RelevanceArgContext[];
    public relevanceArg(i: number): RelevanceArgContext | null;
    public relevanceArg(i?: number): RelevanceArgContext[] | RelevanceArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RelevanceArgContext);
        }

        return this.getRuleContext(i, RelevanceArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_altMultiFieldRelevanceFunction;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAltMultiFieldRelevanceFunction) {
             listener.enterAltMultiFieldRelevanceFunction(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAltMultiFieldRelevanceFunction) {
             listener.exitAltMultiFieldRelevanceFunction(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAltMultiFieldRelevanceFunction) {
            return visitor.visitAltMultiFieldRelevanceFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConvertedDataTypeContext extends antlr.ParserRuleContext {
    public _typeName?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMP, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.INT, 0);
    }
    public INTEGER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.INTEGER, 0);
    }
    public DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DOUBLE, 0);
    }
    public LONG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LONG, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FLOAT, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STRING, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.BOOLEAN, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_convertedDataType;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterConvertedDataType) {
             listener.enterConvertedDataType(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitConvertedDataType) {
             listener.exitConvertedDataType(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitConvertedDataType) {
            return visitor.visitConvertedDataType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseFuncAlternativeContext extends antlr.ParserRuleContext {
    public _condition?: FunctionArgContext;
    public _consequent?: FunctionArgContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.WHEN, 0)!;
    }
    public THEN(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.THEN, 0)!;
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_caseFuncAlternative;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterCaseFuncAlternative) {
             listener.enterCaseFuncAlternative(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitCaseFuncAlternative) {
             listener.exitCaseFuncAlternative(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitCaseFuncAlternative) {
            return visitor.visitCaseFuncAlternative(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregateFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_aggregateFunction;
    }
    public override copyFrom(ctx: AggregateFunctionContext): void {
        super.copyFrom(ctx);
    }
}
export class DistinctCountFunctionCallContext extends AggregateFunctionContext {
    public constructor(ctx: AggregateFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.COUNT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.DISTINCT, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDistinctCountFunctionCall) {
             listener.enterDistinctCountFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDistinctCountFunctionCall) {
             listener.exitDistinctCountFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDistinctCountFunctionCall) {
            return visitor.visitDistinctCountFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CountStarFunctionCallContext extends AggregateFunctionContext {
    public constructor(ctx: AggregateFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.COUNT, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.STAR, 0)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterCountStarFunctionCall) {
             listener.enterCountStarFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitCountStarFunctionCall) {
             listener.exitCountStarFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitCountStarFunctionCall) {
            return visitor.visitCountStarFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RegularAggregateFunctionCallContext extends AggregateFunctionContext {
    public _functionName?: AggregationFunctionNameContext;
    public constructor(ctx: AggregateFunctionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public functionArg(): FunctionArgContext {
        return this.getRuleContext(0, FunctionArgContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public aggregationFunctionName(): AggregationFunctionNameContext {
        return this.getRuleContext(0, AggregationFunctionNameContext)!;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRegularAggregateFunctionCall) {
             listener.enterRegularAggregateFunctionCall(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRegularAggregateFunctionCall) {
             listener.exitRegularAggregateFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRegularAggregateFunctionCall) {
            return visitor.visitRegularAggregateFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FilterClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILTER(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.FILTER, 0)!;
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.LR_BRACKET, 0)!;
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.WHERE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.RR_BRACKET, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_filterClause;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFilterClause) {
             listener.enterFilterClause(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFilterClause) {
             listener.exitFilterClause(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFilterClause) {
            return visitor.visitFilterClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregationFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AVG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AVG, 0);
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COUNT, 0);
    }
    public SUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUM, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MIN, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAX, 0);
    }
    public VAR_POP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.VAR_POP, 0);
    }
    public VAR_SAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.VAR_SAMP, 0);
    }
    public VARIANCE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.VARIANCE, 0);
    }
    public STD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STD, 0);
    }
    public STDDEV(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STDDEV, 0);
    }
    public STDDEV_POP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STDDEV_POP, 0);
    }
    public STDDEV_SAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STDDEV_SAMP, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_aggregationFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAggregationFunctionName) {
             listener.enterAggregationFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAggregationFunctionName) {
             listener.exitAggregationFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAggregationFunctionName) {
            return visitor.visitAggregationFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MathematicalFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ABS, 0);
    }
    public CBRT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CBRT, 0);
    }
    public CEIL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CEIL, 0);
    }
    public CEILING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CEILING, 0);
    }
    public CONV(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CONV, 0);
    }
    public CRC32(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CRC32, 0);
    }
    public E(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.E, 0);
    }
    public EXP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.EXP, 0);
    }
    public EXPM1(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.EXPM1, 0);
    }
    public FLOOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FLOOR, 0);
    }
    public LN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LN, 0);
    }
    public LOG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOG, 0);
    }
    public LOG10(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOG10, 0);
    }
    public LOG2(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOG2, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MOD, 0);
    }
    public PI(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PI, 0);
    }
    public POW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.POW, 0);
    }
    public POWER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.POWER, 0);
    }
    public RAND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RAND, 0);
    }
    public RINT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RINT, 0);
    }
    public ROUND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ROUND, 0);
    }
    public SIGN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SIGN, 0);
    }
    public SIGNUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SIGNUM, 0);
    }
    public SQRT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SQRT, 0);
    }
    public TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TRUNCATE, 0);
    }
    public trigonometricFunctionName(): TrigonometricFunctionNameContext | null {
        return this.getRuleContext(0, TrigonometricFunctionNameContext);
    }
    public arithmeticFunctionName(): ArithmeticFunctionNameContext | null {
        return this.getRuleContext(0, ArithmeticFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_mathematicalFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterMathematicalFunctionName) {
             listener.enterMathematicalFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitMathematicalFunctionName) {
             listener.exitMathematicalFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitMathematicalFunctionName) {
            return visitor.visitMathematicalFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TrigonometricFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ACOS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ACOS, 0);
    }
    public ASIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ASIN, 0);
    }
    public ATAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ATAN, 0);
    }
    public ATAN2(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ATAN2, 0);
    }
    public COS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COS, 0);
    }
    public COSH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COSH, 0);
    }
    public COT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COT, 0);
    }
    public DEGREES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DEGREES, 0);
    }
    public RADIANS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RADIANS, 0);
    }
    public SIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SIN, 0);
    }
    public SINH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SINH, 0);
    }
    public TAN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TAN, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_trigonometricFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTrigonometricFunctionName) {
             listener.enterTrigonometricFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTrigonometricFunctionName) {
             listener.exitTrigonometricFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTrigonometricFunctionName) {
            return visitor.visitTrigonometricFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArithmeticFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ADD, 0);
    }
    public SUBTRACT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUBTRACT, 0);
    }
    public MULTIPLY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTIPLY, 0);
    }
    public DIVIDE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DIVIDE, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MOD, 0);
    }
    public MODULUS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MODULUS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_arithmeticFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterArithmeticFunctionName) {
             listener.enterArithmeticFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitArithmeticFunctionName) {
             listener.exitArithmeticFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitArithmeticFunctionName) {
            return visitor.visitArithmeticFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateTimeFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public datetimeConstantLiteral(): DatetimeConstantLiteralContext | null {
        return this.getRuleContext(0, DatetimeConstantLiteralContext);
    }
    public ADDDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ADDDATE, 0);
    }
    public ADDTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ADDTIME, 0);
    }
    public CONVERT_TZ(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CONVERT_TZ, 0);
    }
    public CURDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CURDATE, 0);
    }
    public CURTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CURTIME, 0);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE, 0);
    }
    public DATE_ADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE_ADD, 0);
    }
    public DATE_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE_FORMAT, 0);
    }
    public DATE_SUB(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATE_SUB, 0);
    }
    public DATEDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATEDIFF, 0);
    }
    public DATETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DATETIME, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY, 0);
    }
    public DAYNAME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAYNAME, 0);
    }
    public DAYOFMONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAYOFMONTH, 0);
    }
    public DAY_OF_MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_OF_MONTH, 0);
    }
    public DAYOFWEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAYOFWEEK, 0);
    }
    public DAYOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAYOFYEAR, 0);
    }
    public DAY_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_OF_YEAR, 0);
    }
    public DAY_OF_WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DAY_OF_WEEK, 0);
    }
    public FROM_DAYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FROM_DAYS, 0);
    }
    public FROM_UNIXTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FROM_UNIXTIME, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR, 0);
    }
    public HOUR_OF_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HOUR_OF_DAY, 0);
    }
    public LAST_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LAST_DAY, 0);
    }
    public MAKEDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAKEDATE, 0);
    }
    public MAKETIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAKETIME, 0);
    }
    public MICROSECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MICROSECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE, 0);
    }
    public MINUTE_OF_DAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_OF_DAY, 0);
    }
    public MINUTE_OF_HOUR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINUTE_OF_HOUR, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MONTH, 0);
    }
    public MONTHNAME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MONTHNAME, 0);
    }
    public MONTH_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MONTH_OF_YEAR, 0);
    }
    public NOW(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NOW, 0);
    }
    public PERIOD_ADD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PERIOD_ADD, 0);
    }
    public PERIOD_DIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PERIOD_DIFF, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUARTER, 0);
    }
    public SEC_TO_TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SEC_TO_TIME, 0);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND, 0);
    }
    public SECOND_OF_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SECOND_OF_MINUTE, 0);
    }
    public SUBDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUBDATE, 0);
    }
    public SUBTIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUBTIME, 0);
    }
    public SYSDATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SYSDATE, 0);
    }
    public STR_TO_DATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STR_TO_DATE, 0);
    }
    public TIME(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME, 0);
    }
    public TIME_FORMAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME_FORMAT, 0);
    }
    public TIME_TO_SEC(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME_TO_SEC, 0);
    }
    public TIMEDIFF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMEDIFF, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIMESTAMP, 0);
    }
    public TO_DAYS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TO_DAYS, 0);
    }
    public TO_SECONDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TO_SECONDS, 0);
    }
    public UNIX_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.UNIX_TIMESTAMP, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEK, 0);
    }
    public WEEKDAY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEKDAY, 0);
    }
    public WEEK_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEK_OF_YEAR, 0);
    }
    public WEEKOFYEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WEEKOFYEAR, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEAR, 0);
    }
    public YEARWEEK(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.YEARWEEK, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_dateTimeFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterDateTimeFunctionName) {
             listener.enterDateTimeFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitDateTimeFunctionName) {
             listener.exitDateTimeFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitDateTimeFunctionName) {
            return visitor.visitDateTimeFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TextFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUBSTR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUBSTR, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUBSTRING, 0);
    }
    public TRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TRIM, 0);
    }
    public LTRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LTRIM, 0);
    }
    public RTRIM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RTRIM, 0);
    }
    public LOWER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOWER, 0);
    }
    public UPPER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.UPPER, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CONCAT, 0);
    }
    public CONCAT_WS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CONCAT_WS, 0);
    }
    public LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LENGTH, 0);
    }
    public STRCMP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.STRCMP, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RIGHT, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LEFT, 0);
    }
    public ASCII(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ASCII, 0);
    }
    public LOCATE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOCATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.REPLACE, 0);
    }
    public REVERSE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.REVERSE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_textFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTextFunctionName) {
             listener.enterTextFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTextFunctionName) {
             listener.exitTextFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTextFunctionName) {
            return visitor.visitTextFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlowControlFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.IF, 0);
    }
    public IFNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.IFNULL, 0);
    }
    public NULLIF(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.NULLIF, 0);
    }
    public ISNULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ISNULL, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_flowControlFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFlowControlFunctionName) {
             listener.enterFlowControlFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFlowControlFunctionName) {
             listener.exitFlowControlFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFlowControlFunctionName) {
            return visitor.visitFlowControlFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NoFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public QUERY(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.QUERY, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_noFieldRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNoFieldRelevanceFunctionName) {
             listener.enterNoFieldRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNoFieldRelevanceFunctionName) {
             listener.exitNoFieldRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNoFieldRelevanceFunctionName) {
            return visitor.visitNoFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPEOF(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.TYPEOF, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_systemFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSystemFunctionName) {
             listener.enterSystemFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSystemFunctionName) {
             listener.exitSystemFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSystemFunctionName) {
            return visitor.visitSystemFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NestedFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NESTED(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.NESTED, 0)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_nestedFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterNestedFunctionName) {
             listener.enterNestedFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitNestedFunctionName) {
             listener.exitNestedFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitNestedFunctionName) {
            return visitor.visitNestedFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScoreRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SCORE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SCORE, 0);
    }
    public SCOREQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SCOREQUERY, 0);
    }
    public SCORE_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SCORE_QUERY, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_scoreRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterScoreRelevanceFunctionName) {
             listener.enterScoreRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitScoreRelevanceFunctionName) {
             listener.exitScoreRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitScoreRelevanceFunctionName) {
            return visitor.visitScoreRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH, 0);
    }
    public MATCHQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCHQUERY, 0);
    }
    public MATCH_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_QUERY, 0);
    }
    public MATCH_PHRASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_PHRASE, 0);
    }
    public MATCHPHRASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCHPHRASE, 0);
    }
    public MATCHPHRASEQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCHPHRASEQUERY, 0);
    }
    public MATCH_BOOL_PREFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_BOOL_PREFIX, 0);
    }
    public MATCH_PHRASE_PREFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_PHRASE_PREFIX, 0);
    }
    public WILDCARD_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WILDCARD_QUERY, 0);
    }
    public WILDCARDQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.WILDCARDQUERY, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_singleFieldRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterSingleFieldRelevanceFunctionName) {
             listener.enterSingleFieldRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitSingleFieldRelevanceFunctionName) {
             listener.exitSingleFieldRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitSingleFieldRelevanceFunctionName) {
            return visitor.visitSingleFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultiFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MULTI_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTI_MATCH, 0);
    }
    public MULTIMATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTIMATCH, 0);
    }
    public MULTIMATCHQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTIMATCHQUERY, 0);
    }
    public SIMPLE_QUERY_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SIMPLE_QUERY_STRING, 0);
    }
    public QUERY_STRING(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUERY_STRING, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_multiFieldRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterMultiFieldRelevanceFunctionName) {
             listener.enterMultiFieldRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitMultiFieldRelevanceFunctionName) {
             listener.exitMultiFieldRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitMultiFieldRelevanceFunctionName) {
            return visitor.visitMultiFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltSingleFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_QUERY, 0);
    }
    public MATCHQUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCHQUERY, 0);
    }
    public MATCH_PHRASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCH_PHRASE, 0);
    }
    public MATCHPHRASE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MATCHPHRASE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_altSingleFieldRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAltSingleFieldRelevanceFunctionName) {
             listener.enterAltSingleFieldRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAltSingleFieldRelevanceFunctionName) {
             listener.exitAltSingleFieldRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAltSingleFieldRelevanceFunctionName) {
            return visitor.visitAltSingleFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AltMultiFieldRelevanceFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MULTI_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTI_MATCH, 0);
    }
    public MULTIMATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MULTIMATCH, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_altMultiFieldRelevanceFunctionName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAltMultiFieldRelevanceFunctionName) {
             listener.enterAltMultiFieldRelevanceFunctionName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAltMultiFieldRelevanceFunctionName) {
             listener.exitAltMultiFieldRelevanceFunctionName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAltMultiFieldRelevanceFunctionName) {
            return visitor.visitAltMultiFieldRelevanceFunctionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionArg(): FunctionArgContext[];
    public functionArg(i: number): FunctionArgContext | null;
    public functionArg(i?: number): FunctionArgContext[] | FunctionArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionArgContext);
        }

        return this.getRuleContext(i, FunctionArgContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.COMMA);
    	} else {
    		return this.getToken(OpenSearchSQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_functionArgs;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFunctionArgs) {
             listener.enterFunctionArgs(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFunctionArgs) {
             listener.exitFunctionArgs(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionArgs) {
            return visitor.visitFunctionArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_functionArg;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterFunctionArg) {
             listener.enterFunctionArg(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitFunctionArg) {
             listener.exitFunctionArg(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionArg) {
            return visitor.visitFunctionArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgContext extends antlr.ParserRuleContext {
    public _argName?: StringLiteralContext;
    public _argVal?: RelevanceArgValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceArgName(): RelevanceArgNameContext | null {
        return this.getRuleContext(0, RelevanceArgNameContext);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceArg;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceArg) {
             listener.enterRelevanceArg(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceArg) {
             listener.exitRelevanceArg(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArg) {
            return visitor.visitRelevanceArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HighlightArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public highlightArgName(): HighlightArgNameContext {
        return this.getRuleContext(0, HighlightArgNameContext)!;
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public highlightArgValue(): HighlightArgValueContext {
        return this.getRuleContext(0, HighlightArgValueContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_highlightArg;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHighlightArg) {
             listener.enterHighlightArg(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHighlightArg) {
             listener.exitHighlightArg(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHighlightArg) {
            return visitor.visitHighlightArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALLOW_LEADING_WILDCARD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ALLOW_LEADING_WILDCARD, 0);
    }
    public ANALYZER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ANALYZER, 0);
    }
    public ANALYZE_WILDCARD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ANALYZE_WILDCARD, 0);
    }
    public AUTO_GENERATE_SYNONYMS_PHRASE_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AUTO_GENERATE_SYNONYMS_PHRASE_QUERY, 0);
    }
    public BOOST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.BOOST, 0);
    }
    public CASE_INSENSITIVE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CASE_INSENSITIVE, 0);
    }
    public CUTOFF_FREQUENCY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.CUTOFF_FREQUENCY, 0);
    }
    public DEFAULT_FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DEFAULT_FIELD, 0);
    }
    public DEFAULT_OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DEFAULT_OPERATOR, 0);
    }
    public ENABLE_POSITION_INCREMENTS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ENABLE_POSITION_INCREMENTS, 0);
    }
    public ESCAPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ESCAPE, 0);
    }
    public FIELDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FIELDS, 0);
    }
    public FLAGS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FLAGS, 0);
    }
    public FUZZINESS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FUZZINESS, 0);
    }
    public FUZZY_MAX_EXPANSIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FUZZY_MAX_EXPANSIONS, 0);
    }
    public FUZZY_PREFIX_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FUZZY_PREFIX_LENGTH, 0);
    }
    public FUZZY_REWRITE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FUZZY_REWRITE, 0);
    }
    public FUZZY_TRANSPOSITIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FUZZY_TRANSPOSITIONS, 0);
    }
    public LENIENT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LENIENT, 0);
    }
    public LOW_FREQ_OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LOW_FREQ_OPERATOR, 0);
    }
    public MAX_DETERMINIZED_STATES(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAX_DETERMINIZED_STATES, 0);
    }
    public MAX_EXPANSIONS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAX_EXPANSIONS, 0);
    }
    public MINIMUM_SHOULD_MATCH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MINIMUM_SHOULD_MATCH, 0);
    }
    public OPERATOR(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.OPERATOR, 0);
    }
    public PHRASE_SLOP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PHRASE_SLOP, 0);
    }
    public PREFIX_LENGTH(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.PREFIX_LENGTH, 0);
    }
    public QUOTE_ANALYZER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUOTE_ANALYZER, 0);
    }
    public QUOTE_FIELD_SUFFIX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUOTE_FIELD_SUFFIX, 0);
    }
    public REWRITE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.REWRITE, 0);
    }
    public SLOP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SLOP, 0);
    }
    public TIE_BREAKER(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIE_BREAKER, 0);
    }
    public TIME_ZONE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TIME_ZONE, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TYPE, 0);
    }
    public ZERO_TERMS_QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ZERO_TERMS_QUERY, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceArgName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceArgName) {
             listener.enterRelevanceArgName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceArgName) {
             listener.exitRelevanceArgName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArgName) {
            return visitor.visitRelevanceArgName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HighlightArgNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HIGHLIGHT_POST_TAGS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HIGHLIGHT_POST_TAGS, 0);
    }
    public HIGHLIGHT_PRE_TAGS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.HIGHLIGHT_PRE_TAGS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_highlightArgName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHighlightArgName) {
             listener.enterHighlightArgName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHighlightArgName) {
             listener.exitHighlightArgName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHighlightArgName) {
            return visitor.visitHighlightArgName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldAndWeightContext extends antlr.ParserRuleContext {
    public _field?: RelevanceFieldContext;
    public _weight?: RelevanceFieldWeightContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceField(): RelevanceFieldContext {
        return this.getRuleContext(0, RelevanceFieldContext)!;
    }
    public relevanceFieldWeight(): RelevanceFieldWeightContext | null {
        return this.getRuleContext(0, RelevanceFieldWeightContext);
    }
    public BIT_XOR_OP(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.BIT_XOR_OP, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceFieldAndWeight;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceFieldAndWeight) {
             listener.enterRelevanceFieldAndWeight(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceFieldAndWeight) {
             listener.exitRelevanceFieldAndWeight(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFieldAndWeight) {
            return visitor.visitRelevanceFieldAndWeight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldWeightContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public realLiteral(): RealLiteralContext | null {
        return this.getRuleContext(0, RealLiteralContext);
    }
    public decimalLiteral(): DecimalLiteralContext | null {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceFieldWeight;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceFieldWeight) {
             listener.enterRelevanceFieldWeight(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceFieldWeight) {
             listener.exitRelevanceFieldWeight(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceFieldWeight) {
            return visitor.visitRelevanceFieldWeight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceField;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceField) {
             listener.enterRelevanceField(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceField) {
             listener.exitRelevanceField(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceField) {
            return visitor.visitRelevanceField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceQuery;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceQuery) {
             listener.enterRelevanceQuery(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceQuery) {
             listener.exitRelevanceQuery(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceQuery) {
            return visitor.visitRelevanceQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RelevanceArgValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public constant(): ConstantContext | null {
        return this.getRuleContext(0, ConstantContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_relevanceArgValue;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterRelevanceArgValue) {
             listener.enterRelevanceArgValue(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitRelevanceArgValue) {
             listener.exitRelevanceArgValue(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitRelevanceArgValue) {
            return visitor.visitRelevanceArgValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HighlightArgValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getRuleContext(0, StringLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_highlightArgValue;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterHighlightArgValue) {
             listener.enterHighlightArgValue(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitHighlightArgValue) {
             listener.exitHighlightArgValue(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitHighlightArgValue) {
            return visitor.visitHighlightArgValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlternateMultiMatchArgNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIELDS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FIELDS, 0);
    }
    public QUERY(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.QUERY, 0);
    }
    public stringLiteral(): StringLiteralContext | null {
        return this.getRuleContext(0, StringLiteralContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_alternateMultiMatchArgName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAlternateMultiMatchArgName) {
             listener.enterAlternateMultiMatchArgName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAlternateMultiMatchArgName) {
             listener.exitAlternateMultiMatchArgName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAlternateMultiMatchArgName) {
            return visitor.visitAlternateMultiMatchArgName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlternateMultiMatchQueryContext extends antlr.ParserRuleContext {
    public _argName?: AlternateMultiMatchArgNameContext;
    public _argVal?: RelevanceArgValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public alternateMultiMatchArgName(): AlternateMultiMatchArgNameContext {
        return this.getRuleContext(0, AlternateMultiMatchArgNameContext)!;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_alternateMultiMatchQuery;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAlternateMultiMatchQuery) {
             listener.enterAlternateMultiMatchQuery(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAlternateMultiMatchQuery) {
             listener.exitAlternateMultiMatchQuery(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAlternateMultiMatchQuery) {
            return visitor.visitAlternateMultiMatchQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlternateMultiMatchFieldContext extends antlr.ParserRuleContext {
    public _argName?: AlternateMultiMatchArgNameContext;
    public _argVal?: RelevanceArgValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.EQUAL_SYMBOL, 0)!;
    }
    public alternateMultiMatchArgName(): AlternateMultiMatchArgNameContext {
        return this.getRuleContext(0, AlternateMultiMatchArgNameContext)!;
    }
    public relevanceArgValue(): RelevanceArgValueContext {
        return this.getRuleContext(0, RelevanceArgValueContext)!;
    }
    public LT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LT_SQR_PRTHS, 0);
    }
    public RT_SQR_PRTHS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.RT_SQR_PRTHS, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_alternateMultiMatchField;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAlternateMultiMatchField) {
             listener.enterAlternateMultiMatchField(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAlternateMultiMatchField) {
             listener.exitAlternateMultiMatchField(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAlternateMultiMatchField) {
            return visitor.visitAlternateMultiMatchField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_tableName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterTableName) {
             listener.enterTableName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitTableName) {
             listener.exitTableName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitTableName) {
            return visitor.visitTableName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_columnName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterColumnName) {
             listener.enterColumnName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitColumnName) {
             listener.exitColumnName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AllTupleFieldsContext extends antlr.ParserRuleContext {
    public _path?: QualifiedNameContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.DOT, 0)!;
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(OpenSearchSQLParser.STAR, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_allTupleFields;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAllTupleFields) {
             listener.enterAllTupleFields(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAllTupleFields) {
             listener.exitAllTupleFields(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAllTupleFields) {
            return visitor.visitAllTupleFields(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext {
        return this.getRuleContext(0, IdentContext)!;
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_alias;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterAlias) {
             listener.enterAlias(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitAlias) {
             listener.exitAlias(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OpenSearchSQLParser.DOT);
    	} else {
    		return this.getToken(OpenSearchSQLParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_qualifiedName;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.ID, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.DOT, 0);
    }
    public BACKTICK_QUOTE_ID(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.BACKTICK_QUOTE_ID, 0);
    }
    public keywordsCanBeId(): KeywordsCanBeIdContext | null {
        return this.getRuleContext(0, KeywordsCanBeIdContext);
    }
    public scalarFunctionName(): ScalarFunctionNameContext | null {
        return this.getRuleContext(0, ScalarFunctionNameContext);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_ident;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterIdent) {
             listener.enterIdent(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitIdent) {
             listener.exitIdent(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitIdent) {
            return visitor.visitIdent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordsCanBeIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FULL, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FIELD, 0);
    }
    public D(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.D, 0);
    }
    public T(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.T, 0);
    }
    public TS(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TS, 0);
    }
    public COUNT(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.COUNT, 0);
    }
    public SUM(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.SUM, 0);
    }
    public AVG(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.AVG, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MAX, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.MIN, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.LAST, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(OpenSearchSQLParser.TYPE, 0);
    }
    public override get ruleIndex(): number {
        return OpenSearchSQLParser.RULE_keywordsCanBeId;
    }
    public override enterRule(listener: OpenSearchSQLParserListener): void {
        if(listener.enterKeywordsCanBeId) {
             listener.enterKeywordsCanBeId(this);
        }
    }
    public override exitRule(listener: OpenSearchSQLParserListener): void {
        if(listener.exitKeywordsCanBeId) {
             listener.exitKeywordsCanBeId(this);
        }
    }
    public override accept<Result>(visitor: OpenSearchSQLParserVisitor<Result>): Result | null {
        if (visitor.visitKeywordsCanBeId) {
            return visitor.visitKeywordsCanBeId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
