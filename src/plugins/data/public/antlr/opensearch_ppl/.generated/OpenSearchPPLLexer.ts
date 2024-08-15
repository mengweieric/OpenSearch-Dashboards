// Generated from ./src/plugins/data/public/antlr/opensearch_ppl/grammar/OpenSearchPPLLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class OpenSearchPPLLexer extends antlr.Lexer {
    public static readonly SEARCH = 1;
    public static readonly DESCRIBE = 2;
    public static readonly SHOW = 3;
    public static readonly FROM = 4;
    public static readonly WHERE = 5;
    public static readonly FIELDS = 6;
    public static readonly RENAME = 7;
    public static readonly STATS = 8;
    public static readonly DEDUP = 9;
    public static readonly SORT = 10;
    public static readonly EVAL = 11;
    public static readonly HEAD = 12;
    public static readonly TOP = 13;
    public static readonly RARE = 14;
    public static readonly PARSE = 15;
    public static readonly METHOD = 16;
    public static readonly REGEX = 17;
    public static readonly PUNCT = 18;
    public static readonly GROK = 19;
    public static readonly PATTERN = 20;
    public static readonly PATTERNS = 21;
    public static readonly NEW_FIELD = 22;
    public static readonly KMEANS = 23;
    public static readonly AD = 24;
    public static readonly ML = 25;
    public static readonly AS = 26;
    public static readonly BY = 27;
    public static readonly SOURCE = 28;
    public static readonly INDEX = 29;
    public static readonly D = 30;
    public static readonly DESC = 31;
    public static readonly DATASOURCES = 32;
    public static readonly SORTBY = 33;
    public static readonly AUTO = 34;
    public static readonly STR = 35;
    public static readonly IP = 36;
    public static readonly NUM = 37;
    public static readonly KEEPEMPTY = 38;
    public static readonly CONSECUTIVE = 39;
    public static readonly DEDUP_SPLITVALUES = 40;
    public static readonly PARTITIONS = 41;
    public static readonly ALLNUM = 42;
    public static readonly DELIM = 43;
    public static readonly CENTROIDS = 44;
    public static readonly ITERATIONS = 45;
    public static readonly DISTANCE_TYPE = 46;
    public static readonly NUMBER_OF_TREES = 47;
    public static readonly SHINGLE_SIZE = 48;
    public static readonly SAMPLE_SIZE = 49;
    public static readonly OUTPUT_AFTER = 50;
    public static readonly TIME_DECAY = 51;
    public static readonly ANOMALY_RATE = 52;
    public static readonly CATEGORY_FIELD = 53;
    public static readonly TIME_FIELD = 54;
    public static readonly TIME_ZONE = 55;
    public static readonly TRAINING_DATA_SIZE = 56;
    public static readonly ANOMALY_SCORE_THRESHOLD = 57;
    public static readonly CASE = 58;
    public static readonly IN = 59;
    public static readonly NOT = 60;
    public static readonly OR = 61;
    public static readonly AND = 62;
    public static readonly XOR = 63;
    public static readonly TRUE = 64;
    public static readonly FALSE = 65;
    public static readonly REGEXP = 66;
    public static readonly CONVERT_TZ = 67;
    public static readonly DATETIME = 68;
    public static readonly DAY = 69;
    public static readonly DAY_HOUR = 70;
    public static readonly DAY_MICROSECOND = 71;
    public static readonly DAY_MINUTE = 72;
    public static readonly DAY_OF_YEAR = 73;
    public static readonly DAY_SECOND = 74;
    public static readonly HOUR = 75;
    public static readonly HOUR_MICROSECOND = 76;
    public static readonly HOUR_MINUTE = 77;
    public static readonly HOUR_OF_DAY = 78;
    public static readonly HOUR_SECOND = 79;
    public static readonly INTERVAL = 80;
    public static readonly MICROSECOND = 81;
    public static readonly MILLISECOND = 82;
    public static readonly MINUTE = 83;
    public static readonly MINUTE_MICROSECOND = 84;
    public static readonly MINUTE_OF_DAY = 85;
    public static readonly MINUTE_OF_HOUR = 86;
    public static readonly MINUTE_SECOND = 87;
    public static readonly MONTH = 88;
    public static readonly MONTH_OF_YEAR = 89;
    public static readonly QUARTER = 90;
    public static readonly SECOND = 91;
    public static readonly SECOND_MICROSECOND = 92;
    public static readonly SECOND_OF_MINUTE = 93;
    public static readonly WEEK = 94;
    public static readonly WEEK_OF_YEAR = 95;
    public static readonly YEAR = 96;
    public static readonly YEAR_MONTH = 97;
    public static readonly DATAMODEL = 98;
    public static readonly LOOKUP = 99;
    public static readonly SAVEDSEARCH = 100;
    public static readonly INT = 101;
    public static readonly INTEGER = 102;
    public static readonly DOUBLE = 103;
    public static readonly LONG = 104;
    public static readonly FLOAT = 105;
    public static readonly STRING = 106;
    public static readonly BOOLEAN = 107;
    public static readonly PIPE = 108;
    public static readonly COMMA = 109;
    public static readonly DOT = 110;
    public static readonly EQUAL = 111;
    public static readonly GREATER = 112;
    public static readonly LESS = 113;
    public static readonly NOT_GREATER = 114;
    public static readonly NOT_LESS = 115;
    public static readonly NOT_EQUAL = 116;
    public static readonly PLUS = 117;
    public static readonly MINUS = 118;
    public static readonly STAR = 119;
    public static readonly DIVIDE = 120;
    public static readonly MODULE = 121;
    public static readonly EXCLAMATION_SYMBOL = 122;
    public static readonly COLON = 123;
    public static readonly LT_PRTHS = 124;
    public static readonly RT_PRTHS = 125;
    public static readonly LT_SQR_PRTHS = 126;
    public static readonly RT_SQR_PRTHS = 127;
    public static readonly SINGLE_QUOTE = 128;
    public static readonly DOUBLE_QUOTE = 129;
    public static readonly BACKTICK = 130;
    public static readonly BIT_NOT_OP = 131;
    public static readonly BIT_AND_OP = 132;
    public static readonly BIT_XOR_OP = 133;
    public static readonly AVG = 134;
    public static readonly COUNT = 135;
    public static readonly DISTINCT_COUNT = 136;
    public static readonly ESTDC = 137;
    public static readonly ESTDC_ERROR = 138;
    public static readonly MAX = 139;
    public static readonly MEAN = 140;
    public static readonly MEDIAN = 141;
    public static readonly MIN = 142;
    public static readonly MODE = 143;
    public static readonly RANGE = 144;
    public static readonly STDEV = 145;
    public static readonly STDEVP = 146;
    public static readonly SUM = 147;
    public static readonly SUMSQ = 148;
    public static readonly VAR_SAMP = 149;
    public static readonly VAR_POP = 150;
    public static readonly STDDEV_SAMP = 151;
    public static readonly STDDEV_POP = 152;
    public static readonly PERCENTILE = 153;
    public static readonly TAKE = 154;
    public static readonly FIRST = 155;
    public static readonly LAST = 156;
    public static readonly LIST = 157;
    public static readonly VALUES = 158;
    public static readonly EARLIEST = 159;
    public static readonly EARLIEST_TIME = 160;
    public static readonly LATEST = 161;
    public static readonly LATEST_TIME = 162;
    public static readonly PER_DAY = 163;
    public static readonly PER_HOUR = 164;
    public static readonly PER_MINUTE = 165;
    public static readonly PER_SECOND = 166;
    public static readonly RATE = 167;
    public static readonly SPARKLINE = 168;
    public static readonly C = 169;
    public static readonly DC = 170;
    public static readonly ABS = 171;
    public static readonly CBRT = 172;
    public static readonly CEIL = 173;
    public static readonly CEILING = 174;
    public static readonly CONV = 175;
    public static readonly CRC32 = 176;
    public static readonly E = 177;
    public static readonly EXP = 178;
    public static readonly FLOOR = 179;
    public static readonly LN = 180;
    public static readonly LOG = 181;
    public static readonly LOG10 = 182;
    public static readonly LOG2 = 183;
    public static readonly MOD = 184;
    public static readonly PI = 185;
    public static readonly POSITION = 186;
    public static readonly POW = 187;
    public static readonly POWER = 188;
    public static readonly RAND = 189;
    public static readonly ROUND = 190;
    public static readonly SIGN = 191;
    public static readonly SQRT = 192;
    public static readonly TRUNCATE = 193;
    public static readonly ACOS = 194;
    public static readonly ASIN = 195;
    public static readonly ATAN = 196;
    public static readonly ATAN2 = 197;
    public static readonly COS = 198;
    public static readonly COT = 199;
    public static readonly DEGREES = 200;
    public static readonly RADIANS = 201;
    public static readonly SIN = 202;
    public static readonly TAN = 203;
    public static readonly ADDDATE = 204;
    public static readonly ADDTIME = 205;
    public static readonly CURDATE = 206;
    public static readonly CURRENT_DATE = 207;
    public static readonly CURRENT_TIME = 208;
    public static readonly CURRENT_TIMESTAMP = 209;
    public static readonly CURTIME = 210;
    public static readonly DATE = 211;
    public static readonly DATEDIFF = 212;
    public static readonly DATE_ADD = 213;
    public static readonly DATE_FORMAT = 214;
    public static readonly DATE_SUB = 215;
    public static readonly DAYNAME = 216;
    public static readonly DAYOFMONTH = 217;
    public static readonly DAYOFWEEK = 218;
    public static readonly DAYOFYEAR = 219;
    public static readonly DAY_OF_MONTH = 220;
    public static readonly DAY_OF_WEEK = 221;
    public static readonly EXTRACT = 222;
    public static readonly FROM_DAYS = 223;
    public static readonly FROM_UNIXTIME = 224;
    public static readonly GET_FORMAT = 225;
    public static readonly LAST_DAY = 226;
    public static readonly LOCALTIME = 227;
    public static readonly LOCALTIMESTAMP = 228;
    public static readonly MAKEDATE = 229;
    public static readonly MAKETIME = 230;
    public static readonly MONTHNAME = 231;
    public static readonly NOW = 232;
    public static readonly PERIOD_ADD = 233;
    public static readonly PERIOD_DIFF = 234;
    public static readonly SEC_TO_TIME = 235;
    public static readonly STR_TO_DATE = 236;
    public static readonly SUBDATE = 237;
    public static readonly SUBTIME = 238;
    public static readonly SYSDATE = 239;
    public static readonly TIME = 240;
    public static readonly TIMEDIFF = 241;
    public static readonly TIMESTAMP = 242;
    public static readonly TIMESTAMPADD = 243;
    public static readonly TIMESTAMPDIFF = 244;
    public static readonly TIME_FORMAT = 245;
    public static readonly TIME_TO_SEC = 246;
    public static readonly TO_DAYS = 247;
    public static readonly TO_SECONDS = 248;
    public static readonly UNIX_TIMESTAMP = 249;
    public static readonly UTC_DATE = 250;
    public static readonly UTC_TIME = 251;
    public static readonly UTC_TIMESTAMP = 252;
    public static readonly WEEKDAY = 253;
    public static readonly YEARWEEK = 254;
    public static readonly SUBSTR = 255;
    public static readonly SUBSTRING = 256;
    public static readonly LTRIM = 257;
    public static readonly RTRIM = 258;
    public static readonly TRIM = 259;
    public static readonly TO = 260;
    public static readonly LOWER = 261;
    public static readonly UPPER = 262;
    public static readonly CONCAT = 263;
    public static readonly CONCAT_WS = 264;
    public static readonly LENGTH = 265;
    public static readonly STRCMP = 266;
    public static readonly RIGHT = 267;
    public static readonly LEFT = 268;
    public static readonly ASCII = 269;
    public static readonly LOCATE = 270;
    public static readonly REPLACE = 271;
    public static readonly REVERSE = 272;
    public static readonly CAST = 273;
    public static readonly LIKE = 274;
    public static readonly ISNULL = 275;
    public static readonly ISNOTNULL = 276;
    public static readonly IFNULL = 277;
    public static readonly NULLIF = 278;
    public static readonly IF = 279;
    public static readonly TYPEOF = 280;
    public static readonly MATCH = 281;
    public static readonly MATCH_PHRASE = 282;
    public static readonly MATCH_PHRASE_PREFIX = 283;
    public static readonly MATCH_BOOL_PREFIX = 284;
    public static readonly SIMPLE_QUERY_STRING = 285;
    public static readonly MULTI_MATCH = 286;
    public static readonly QUERY_STRING = 287;
    public static readonly ALLOW_LEADING_WILDCARD = 288;
    public static readonly ANALYZE_WILDCARD = 289;
    public static readonly ANALYZER = 290;
    public static readonly AUTO_GENERATE_SYNONYMS_PHRASE_QUERY = 291;
    public static readonly BOOST = 292;
    public static readonly CUTOFF_FREQUENCY = 293;
    public static readonly DEFAULT_FIELD = 294;
    public static readonly DEFAULT_OPERATOR = 295;
    public static readonly ENABLE_POSITION_INCREMENTS = 296;
    public static readonly ESCAPE = 297;
    public static readonly FLAGS = 298;
    public static readonly FUZZY_MAX_EXPANSIONS = 299;
    public static readonly FUZZY_PREFIX_LENGTH = 300;
    public static readonly FUZZY_TRANSPOSITIONS = 301;
    public static readonly FUZZY_REWRITE = 302;
    public static readonly FUZZINESS = 303;
    public static readonly LENIENT = 304;
    public static readonly LOW_FREQ_OPERATOR = 305;
    public static readonly MAX_DETERMINIZED_STATES = 306;
    public static readonly MAX_EXPANSIONS = 307;
    public static readonly MINIMUM_SHOULD_MATCH = 308;
    public static readonly OPERATOR = 309;
    public static readonly PHRASE_SLOP = 310;
    public static readonly PREFIX_LENGTH = 311;
    public static readonly QUOTE_ANALYZER = 312;
    public static readonly QUOTE_FIELD_SUFFIX = 313;
    public static readonly REWRITE = 314;
    public static readonly SLOP = 315;
    public static readonly TIE_BREAKER = 316;
    public static readonly TYPE = 317;
    public static readonly ZERO_TERMS_QUERY = 318;
    public static readonly SPAN = 319;
    public static readonly MS = 320;
    public static readonly S = 321;
    public static readonly M = 322;
    public static readonly H = 323;
    public static readonly W = 324;
    public static readonly Q = 325;
    public static readonly Y = 326;
    public static readonly ID = 327;
    public static readonly CLUSTER = 328;
    public static readonly INTEGER_LITERAL = 329;
    public static readonly DECIMAL_LITERAL = 330;
    public static readonly ID_DATE_SUFFIX = 331;
    public static readonly DQUOTA_STRING = 332;
    public static readonly SQUOTA_STRING = 333;
    public static readonly BQUOTA_STRING = 334;
    public static readonly ERROR_RECOGNITION = 335;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WHITESPACE", "ERRORCHANNEL"
    ];

    public static readonly literalNames = [
        null, "'SEARCH'", "'DESCRIBE'", "'SHOW'", "'FROM'", "'WHERE'", "'FIELDS'", 
        "'RENAME'", "'STATS'", "'DEDUP'", "'SORT'", "'EVAL'", "'HEAD'", 
        "'TOP'", "'RARE'", "'PARSE'", "'METHOD'", "'REGEX'", "'PUNCT'", 
        "'GROK'", "'PATTERN'", "'PATTERNS'", "'NEW_FIELD'", "'KMEANS'", 
        "'AD'", "'ML'", "'AS'", "'BY'", "'SOURCE'", "'INDEX'", "'D'", "'DESC'", 
        "'DATASOURCES'", "'SORTBY'", "'AUTO'", "'STR'", "'IP'", "'NUM'", 
        "'KEEPEMPTY'", "'CONSECUTIVE'", "'DEDUP_SPLITVALUES'", "'PARTITIONS'", 
        "'ALLNUM'", "'DELIM'", "'CENTROIDS'", "'ITERATIONS'", "'DISTANCE_TYPE'", 
        "'NUMBER_OF_TREES'", "'SHINGLE_SIZE'", "'SAMPLE_SIZE'", "'OUTPUT_AFTER'", 
        "'TIME_DECAY'", "'ANOMALY_RATE'", "'CATEGORY_FIELD'", "'TIME_FIELD'", 
        "'TIME_ZONE'", "'TRAINING_DATA_SIZE'", "'ANOMALY_SCORE_THRESHOLD'", 
        "'CASE'", "'IN'", "'NOT'", "'OR'", "'AND'", "'XOR'", "'TRUE'", "'FALSE'", 
        "'REGEXP'", "'CONVERT_TZ'", "'DATETIME'", "'DAY'", "'DAY_HOUR'", 
        "'DAY_MICROSECOND'", "'DAY_MINUTE'", "'DAY_OF_YEAR'", "'DAY_SECOND'", 
        "'HOUR'", "'HOUR_MICROSECOND'", "'HOUR_MINUTE'", "'HOUR_OF_DAY'", 
        "'HOUR_SECOND'", "'INTERVAL'", "'MICROSECOND'", "'MILLISECOND'", 
        "'MINUTE'", "'MINUTE_MICROSECOND'", "'MINUTE_OF_DAY'", "'MINUTE_OF_HOUR'", 
        "'MINUTE_SECOND'", "'MONTH'", "'MONTH_OF_YEAR'", "'QUARTER'", "'SECOND'", 
        "'SECOND_MICROSECOND'", "'SECOND_OF_MINUTE'", "'WEEK'", "'WEEK_OF_YEAR'", 
        "'YEAR'", "'YEAR_MONTH'", "'DATAMODEL'", "'LOOKUP'", "'SAVEDSEARCH'", 
        "'INT'", "'INTEGER'", "'DOUBLE'", "'LONG'", "'FLOAT'", "'STRING'", 
        "'BOOLEAN'", "'|'", "','", "'.'", "'='", "'>'", "'<'", null, null, 
        null, "'+'", "'-'", "'*'", "'/'", "'%'", "'!'", "':'", "'('", "')'", 
        "'['", "']'", "'''", "'\"'", "'`'", "'~'", "'&'", "'^'", "'AVG'", 
        "'COUNT'", "'DISTINCT_COUNT'", "'ESTDC'", "'ESTDC_ERROR'", "'MAX'", 
        "'MEAN'", "'MEDIAN'", "'MIN'", "'MODE'", "'RANGE'", "'STDEV'", "'STDEVP'", 
        "'SUM'", "'SUMSQ'", "'VAR_SAMP'", "'VAR_POP'", "'STDDEV_SAMP'", 
        "'STDDEV_POP'", "'PERCENTILE'", "'TAKE'", "'FIRST'", "'LAST'", "'LIST'", 
        "'VALUES'", "'EARLIEST'", "'EARLIEST_TIME'", "'LATEST'", "'LATEST_TIME'", 
        "'PER_DAY'", "'PER_HOUR'", "'PER_MINUTE'", "'PER_SECOND'", "'RATE'", 
        "'SPARKLINE'", "'C'", "'DC'", "'ABS'", "'CBRT'", "'CEIL'", "'CEILING'", 
        "'CONV'", "'CRC32'", "'E'", "'EXP'", "'FLOOR'", "'LN'", "'LOG'", 
        "'LOG10'", "'LOG2'", "'MOD'", "'PI'", "'POSITION'", "'POW'", "'POWER'", 
        "'RAND'", "'ROUND'", "'SIGN'", "'SQRT'", "'TRUNCATE'", "'ACOS'", 
        "'ASIN'", "'ATAN'", "'ATAN2'", "'COS'", "'COT'", "'DEGREES'", "'RADIANS'", 
        "'SIN'", "'TAN'", "'ADDDATE'", "'ADDTIME'", "'CURDATE'", "'CURRENT_DATE'", 
        "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'", "'CURTIME'", "'DATE'", 
        "'DATEDIFF'", "'DATE_ADD'", "'DATE_FORMAT'", "'DATE_SUB'", "'DAYNAME'", 
        "'DAYOFMONTH'", "'DAYOFWEEK'", "'DAYOFYEAR'", "'DAY_OF_MONTH'", 
        "'DAY_OF_WEEK'", "'EXTRACT'", "'FROM_DAYS'", "'FROM_UNIXTIME'", 
        "'GET_FORMAT'", "'LAST_DAY'", "'LOCALTIME'", "'LOCALTIMESTAMP'", 
        "'MAKEDATE'", "'MAKETIME'", "'MONTHNAME'", "'NOW'", "'PERIOD_ADD'", 
        "'PERIOD_DIFF'", "'SEC_TO_TIME'", "'STR_TO_DATE'", "'SUBDATE'", 
        "'SUBTIME'", "'SYSDATE'", "'TIME'", "'TIMEDIFF'", "'TIMESTAMP'", 
        "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TIME_FORMAT'", "'TIME_TO_SEC'", 
        "'TO_DAYS'", "'TO_SECONDS'", "'UNIX_TIMESTAMP'", "'UTC_DATE'", "'UTC_TIME'", 
        "'UTC_TIMESTAMP'", "'WEEKDAY'", "'YEARWEEK'", "'SUBSTR'", "'SUBSTRING'", 
        "'LTRIM'", "'RTRIM'", "'TRIM'", "'TO'", "'LOWER'", "'UPPER'", "'CONCAT'", 
        "'CONCAT_WS'", "'LENGTH'", "'STRCMP'", "'RIGHT'", "'LEFT'", "'ASCII'", 
        "'LOCATE'", "'REPLACE'", "'REVERSE'", "'CAST'", "'LIKE'", "'ISNULL'", 
        "'ISNOTNULL'", "'IFNULL'", "'NULLIF'", "'IF'", "'TYPEOF'", "'MATCH'", 
        "'MATCH_PHRASE'", "'MATCH_PHRASE_PREFIX'", "'MATCH_BOOL_PREFIX'", 
        "'SIMPLE_QUERY_STRING'", "'MULTI_MATCH'", "'QUERY_STRING'", "'ALLOW_LEADING_WILDCARD'", 
        "'ANALYZE_WILDCARD'", "'ANALYZER'", "'AUTO_GENERATE_SYNONYMS_PHRASE_QUERY'", 
        "'BOOST'", "'CUTOFF_FREQUENCY'", "'DEFAULT_FIELD'", "'DEFAULT_OPERATOR'", 
        "'ENABLE_POSITION_INCREMENTS'", "'ESCAPE'", "'FLAGS'", "'FUZZY_MAX_EXPANSIONS'", 
        "'FUZZY_PREFIX_LENGTH'", "'FUZZY_TRANSPOSITIONS'", "'FUZZY_REWRITE'", 
        "'FUZZINESS'", "'LENIENT'", "'LOW_FREQ_OPERATOR'", "'MAX_DETERMINIZED_STATES'", 
        "'MAX_EXPANSIONS'", "'MINIMUM_SHOULD_MATCH'", "'OPERATOR'", "'PHRASE_SLOP'", 
        "'PREFIX_LENGTH'", "'QUOTE_ANALYZER'", "'QUOTE_FIELD_SUFFIX'", "'REWRITE'", 
        "'SLOP'", "'TIE_BREAKER'", "'TYPE'", "'ZERO_TERMS_QUERY'", "'SPAN'", 
        "'MS'", "'S'", "'M'", "'H'", "'W'", "'Q'", "'Y'"
    ];

    public static readonly symbolicNames = [
        null, "SEARCH", "DESCRIBE", "SHOW", "FROM", "WHERE", "FIELDS", "RENAME", 
        "STATS", "DEDUP", "SORT", "EVAL", "HEAD", "TOP", "RARE", "PARSE", 
        "METHOD", "REGEX", "PUNCT", "GROK", "PATTERN", "PATTERNS", "NEW_FIELD", 
        "KMEANS", "AD", "ML", "AS", "BY", "SOURCE", "INDEX", "D", "DESC", 
        "DATASOURCES", "SORTBY", "AUTO", "STR", "IP", "NUM", "KEEPEMPTY", 
        "CONSECUTIVE", "DEDUP_SPLITVALUES", "PARTITIONS", "ALLNUM", "DELIM", 
        "CENTROIDS", "ITERATIONS", "DISTANCE_TYPE", "NUMBER_OF_TREES", "SHINGLE_SIZE", 
        "SAMPLE_SIZE", "OUTPUT_AFTER", "TIME_DECAY", "ANOMALY_RATE", "CATEGORY_FIELD", 
        "TIME_FIELD", "TIME_ZONE", "TRAINING_DATA_SIZE", "ANOMALY_SCORE_THRESHOLD", 
        "CASE", "IN", "NOT", "OR", "AND", "XOR", "TRUE", "FALSE", "REGEXP", 
        "CONVERT_TZ", "DATETIME", "DAY", "DAY_HOUR", "DAY_MICROSECOND", 
        "DAY_MINUTE", "DAY_OF_YEAR", "DAY_SECOND", "HOUR", "HOUR_MICROSECOND", 
        "HOUR_MINUTE", "HOUR_OF_DAY", "HOUR_SECOND", "INTERVAL", "MICROSECOND", 
        "MILLISECOND", "MINUTE", "MINUTE_MICROSECOND", "MINUTE_OF_DAY", 
        "MINUTE_OF_HOUR", "MINUTE_SECOND", "MONTH", "MONTH_OF_YEAR", "QUARTER", 
        "SECOND", "SECOND_MICROSECOND", "SECOND_OF_MINUTE", "WEEK", "WEEK_OF_YEAR", 
        "YEAR", "YEAR_MONTH", "DATAMODEL", "LOOKUP", "SAVEDSEARCH", "INT", 
        "INTEGER", "DOUBLE", "LONG", "FLOAT", "STRING", "BOOLEAN", "PIPE", 
        "COMMA", "DOT", "EQUAL", "GREATER", "LESS", "NOT_GREATER", "NOT_LESS", 
        "NOT_EQUAL", "PLUS", "MINUS", "STAR", "DIVIDE", "MODULE", "EXCLAMATION_SYMBOL", 
        "COLON", "LT_PRTHS", "RT_PRTHS", "LT_SQR_PRTHS", "RT_SQR_PRTHS", 
        "SINGLE_QUOTE", "DOUBLE_QUOTE", "BACKTICK", "BIT_NOT_OP", "BIT_AND_OP", 
        "BIT_XOR_OP", "AVG", "COUNT", "DISTINCT_COUNT", "ESTDC", "ESTDC_ERROR", 
        "MAX", "MEAN", "MEDIAN", "MIN", "MODE", "RANGE", "STDEV", "STDEVP", 
        "SUM", "SUMSQ", "VAR_SAMP", "VAR_POP", "STDDEV_SAMP", "STDDEV_POP", 
        "PERCENTILE", "TAKE", "FIRST", "LAST", "LIST", "VALUES", "EARLIEST", 
        "EARLIEST_TIME", "LATEST", "LATEST_TIME", "PER_DAY", "PER_HOUR", 
        "PER_MINUTE", "PER_SECOND", "RATE", "SPARKLINE", "C", "DC", "ABS", 
        "CBRT", "CEIL", "CEILING", "CONV", "CRC32", "E", "EXP", "FLOOR", 
        "LN", "LOG", "LOG10", "LOG2", "MOD", "PI", "POSITION", "POW", "POWER", 
        "RAND", "ROUND", "SIGN", "SQRT", "TRUNCATE", "ACOS", "ASIN", "ATAN", 
        "ATAN2", "COS", "COT", "DEGREES", "RADIANS", "SIN", "TAN", "ADDDATE", 
        "ADDTIME", "CURDATE", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
        "CURTIME", "DATE", "DATEDIFF", "DATE_ADD", "DATE_FORMAT", "DATE_SUB", 
        "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "DAY_OF_MONTH", 
        "DAY_OF_WEEK", "EXTRACT", "FROM_DAYS", "FROM_UNIXTIME", "GET_FORMAT", 
        "LAST_DAY", "LOCALTIME", "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME", 
        "MONTHNAME", "NOW", "PERIOD_ADD", "PERIOD_DIFF", "SEC_TO_TIME", 
        "STR_TO_DATE", "SUBDATE", "SUBTIME", "SYSDATE", "TIME", "TIMEDIFF", 
        "TIMESTAMP", "TIMESTAMPADD", "TIMESTAMPDIFF", "TIME_FORMAT", "TIME_TO_SEC", 
        "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", "UTC_DATE", "UTC_TIME", 
        "UTC_TIMESTAMP", "WEEKDAY", "YEARWEEK", "SUBSTR", "SUBSTRING", "LTRIM", 
        "RTRIM", "TRIM", "TO", "LOWER", "UPPER", "CONCAT", "CONCAT_WS", 
        "LENGTH", "STRCMP", "RIGHT", "LEFT", "ASCII", "LOCATE", "REPLACE", 
        "REVERSE", "CAST", "LIKE", "ISNULL", "ISNOTNULL", "IFNULL", "NULLIF", 
        "IF", "TYPEOF", "MATCH", "MATCH_PHRASE", "MATCH_PHRASE_PREFIX", 
        "MATCH_BOOL_PREFIX", "SIMPLE_QUERY_STRING", "MULTI_MATCH", "QUERY_STRING", 
        "ALLOW_LEADING_WILDCARD", "ANALYZE_WILDCARD", "ANALYZER", "AUTO_GENERATE_SYNONYMS_PHRASE_QUERY", 
        "BOOST", "CUTOFF_FREQUENCY", "DEFAULT_FIELD", "DEFAULT_OPERATOR", 
        "ENABLE_POSITION_INCREMENTS", "ESCAPE", "FLAGS", "FUZZY_MAX_EXPANSIONS", 
        "FUZZY_PREFIX_LENGTH", "FUZZY_TRANSPOSITIONS", "FUZZY_REWRITE", 
        "FUZZINESS", "LENIENT", "LOW_FREQ_OPERATOR", "MAX_DETERMINIZED_STATES", 
        "MAX_EXPANSIONS", "MINIMUM_SHOULD_MATCH", "OPERATOR", "PHRASE_SLOP", 
        "PREFIX_LENGTH", "QUOTE_ANALYZER", "QUOTE_FIELD_SUFFIX", "REWRITE", 
        "SLOP", "TIE_BREAKER", "TYPE", "ZERO_TERMS_QUERY", "SPAN", "MS", 
        "S", "M", "H", "W", "Q", "Y", "ID", "CLUSTER", "INTEGER_LITERAL", 
        "DECIMAL_LITERAL", "ID_DATE_SUFFIX", "DQUOTA_STRING", "SQUOTA_STRING", 
        "BQUOTA_STRING", "ERROR_RECOGNITION"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SEARCH", "DESCRIBE", "SHOW", "FROM", "WHERE", "FIELDS", "RENAME", 
        "STATS", "DEDUP", "SORT", "EVAL", "HEAD", "TOP", "RARE", "PARSE", 
        "METHOD", "REGEX", "PUNCT", "GROK", "PATTERN", "PATTERNS", "NEW_FIELD", 
        "KMEANS", "AD", "ML", "AS", "BY", "SOURCE", "INDEX", "D", "DESC", 
        "DATASOURCES", "SORTBY", "AUTO", "STR", "IP", "NUM", "KEEPEMPTY", 
        "CONSECUTIVE", "DEDUP_SPLITVALUES", "PARTITIONS", "ALLNUM", "DELIM", 
        "CENTROIDS", "ITERATIONS", "DISTANCE_TYPE", "NUMBER_OF_TREES", "SHINGLE_SIZE", 
        "SAMPLE_SIZE", "OUTPUT_AFTER", "TIME_DECAY", "ANOMALY_RATE", "CATEGORY_FIELD", 
        "TIME_FIELD", "TIME_ZONE", "TRAINING_DATA_SIZE", "ANOMALY_SCORE_THRESHOLD", 
        "CASE", "IN", "NOT", "OR", "AND", "XOR", "TRUE", "FALSE", "REGEXP", 
        "CONVERT_TZ", "DATETIME", "DAY", "DAY_HOUR", "DAY_MICROSECOND", 
        "DAY_MINUTE", "DAY_OF_YEAR", "DAY_SECOND", "HOUR", "HOUR_MICROSECOND", 
        "HOUR_MINUTE", "HOUR_OF_DAY", "HOUR_SECOND", "INTERVAL", "MICROSECOND", 
        "MILLISECOND", "MINUTE", "MINUTE_MICROSECOND", "MINUTE_OF_DAY", 
        "MINUTE_OF_HOUR", "MINUTE_SECOND", "MONTH", "MONTH_OF_YEAR", "QUARTER", 
        "SECOND", "SECOND_MICROSECOND", "SECOND_OF_MINUTE", "WEEK", "WEEK_OF_YEAR", 
        "YEAR", "YEAR_MONTH", "DATAMODEL", "LOOKUP", "SAVEDSEARCH", "INT", 
        "INTEGER", "DOUBLE", "LONG", "FLOAT", "STRING", "BOOLEAN", "PIPE", 
        "COMMA", "DOT", "EQUAL", "GREATER", "LESS", "NOT_GREATER", "NOT_LESS", 
        "NOT_EQUAL", "PLUS", "MINUS", "STAR", "DIVIDE", "MODULE", "EXCLAMATION_SYMBOL", 
        "COLON", "LT_PRTHS", "RT_PRTHS", "LT_SQR_PRTHS", "RT_SQR_PRTHS", 
        "SINGLE_QUOTE", "DOUBLE_QUOTE", "BACKTICK", "BIT_NOT_OP", "BIT_AND_OP", 
        "BIT_XOR_OP", "AVG", "COUNT", "DISTINCT_COUNT", "ESTDC", "ESTDC_ERROR", 
        "MAX", "MEAN", "MEDIAN", "MIN", "MODE", "RANGE", "STDEV", "STDEVP", 
        "SUM", "SUMSQ", "VAR_SAMP", "VAR_POP", "STDDEV_SAMP", "STDDEV_POP", 
        "PERCENTILE", "TAKE", "FIRST", "LAST", "LIST", "VALUES", "EARLIEST", 
        "EARLIEST_TIME", "LATEST", "LATEST_TIME", "PER_DAY", "PER_HOUR", 
        "PER_MINUTE", "PER_SECOND", "RATE", "SPARKLINE", "C", "DC", "ABS", 
        "CBRT", "CEIL", "CEILING", "CONV", "CRC32", "E", "EXP", "FLOOR", 
        "LN", "LOG", "LOG10", "LOG2", "MOD", "PI", "POSITION", "POW", "POWER", 
        "RAND", "ROUND", "SIGN", "SQRT", "TRUNCATE", "ACOS", "ASIN", "ATAN", 
        "ATAN2", "COS", "COT", "DEGREES", "RADIANS", "SIN", "TAN", "ADDDATE", 
        "ADDTIME", "CURDATE", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
        "CURTIME", "DATE", "DATEDIFF", "DATE_ADD", "DATE_FORMAT", "DATE_SUB", 
        "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "DAY_OF_MONTH", 
        "DAY_OF_WEEK", "EXTRACT", "FROM_DAYS", "FROM_UNIXTIME", "GET_FORMAT", 
        "LAST_DAY", "LOCALTIME", "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME", 
        "MONTHNAME", "NOW", "PERIOD_ADD", "PERIOD_DIFF", "SEC_TO_TIME", 
        "STR_TO_DATE", "SUBDATE", "SUBTIME", "SYSDATE", "TIME", "TIMEDIFF", 
        "TIMESTAMP", "TIMESTAMPADD", "TIMESTAMPDIFF", "TIME_FORMAT", "TIME_TO_SEC", 
        "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", "UTC_DATE", "UTC_TIME", 
        "UTC_TIMESTAMP", "WEEKDAY", "YEARWEEK", "SUBSTR", "SUBSTRING", "LTRIM", 
        "RTRIM", "TRIM", "TO", "LOWER", "UPPER", "CONCAT", "CONCAT_WS", 
        "LENGTH", "STRCMP", "RIGHT", "LEFT", "ASCII", "LOCATE", "REPLACE", 
        "REVERSE", "CAST", "LIKE", "ISNULL", "ISNOTNULL", "IFNULL", "NULLIF", 
        "IF", "TYPEOF", "MATCH", "MATCH_PHRASE", "MATCH_PHRASE_PREFIX", 
        "MATCH_BOOL_PREFIX", "SIMPLE_QUERY_STRING", "MULTI_MATCH", "QUERY_STRING", 
        "ALLOW_LEADING_WILDCARD", "ANALYZE_WILDCARD", "ANALYZER", "AUTO_GENERATE_SYNONYMS_PHRASE_QUERY", 
        "BOOST", "CUTOFF_FREQUENCY", "DEFAULT_FIELD", "DEFAULT_OPERATOR", 
        "ENABLE_POSITION_INCREMENTS", "ESCAPE", "FLAGS", "FUZZY_MAX_EXPANSIONS", 
        "FUZZY_PREFIX_LENGTH", "FUZZY_TRANSPOSITIONS", "FUZZY_REWRITE", 
        "FUZZINESS", "LENIENT", "LOW_FREQ_OPERATOR", "MAX_DETERMINIZED_STATES", 
        "MAX_EXPANSIONS", "MINIMUM_SHOULD_MATCH", "OPERATOR", "PHRASE_SLOP", 
        "PREFIX_LENGTH", "QUOTE_ANALYZER", "QUOTE_FIELD_SUFFIX", "REWRITE", 
        "SLOP", "TIE_BREAKER", "TYPE", "ZERO_TERMS_QUERY", "SPAN", "MS", 
        "S", "M", "H", "W", "Q", "Y", "ID", "CLUSTER", "INTEGER_LITERAL", 
        "DECIMAL_LITERAL", "DATE_SUFFIX", "ID_LITERAL", "CLUSTER_PREFIX_LITERAL", 
        "ID_DATE_SUFFIX", "DQUOTA_STRING", "SQUOTA_STRING", "BQUOTA_STRING", 
        "DEC_DIGIT", "ERROR_RECOGNITION",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, OpenSearchPPLLexer._ATN, OpenSearchPPLLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "OpenSearchPPLLexer.g4"; }

    public get literalNames(): (string | null)[] { return OpenSearchPPLLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return OpenSearchPPLLexer.symbolicNames; }
    public get ruleNames(): string[] { return OpenSearchPPLLexer.ruleNames; }

    public get serializedATN(): number[] { return OpenSearchPPLLexer._serializedATN; }

    public get channelNames(): string[] { return OpenSearchPPLLexer.channelNames; }

    public get modeNames(): string[] { return OpenSearchPPLLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,335,3504,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,1,0,1,0,1,
        0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,
        2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,
        5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
        7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
        1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,
        1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,
        1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
        1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,
        1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
        1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,
        1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
        1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,
        1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,
        1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
        1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
        1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
        1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,
        1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,
        1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
        1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
        1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,
        1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,
        1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
        1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,
        1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,60,
        1,60,1,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,63,1,63,1,63,
        1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,
        1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
        1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,
        1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,
        1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,
        1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,
        1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,
        1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,75,
        1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,
        1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
        1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,
        1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,
        1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,
        1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,
        1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,
        1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,
        1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,
        1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,
        1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,87,
        1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,
        1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,
        1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,
        1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,
        1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,
        1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,
        1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,
        1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,
        1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,
        1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,
        1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,105,
        1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,
        1,106,1,106,1,106,1,107,1,107,1,108,1,108,1,109,1,109,1,110,1,110,
        1,111,1,111,1,112,1,112,1,113,1,113,1,113,1,114,1,114,1,114,1,115,
        1,115,1,115,1,116,1,116,1,117,1,117,1,118,1,118,1,119,1,119,1,120,
        1,120,1,121,1,121,1,122,1,122,1,123,1,123,1,124,1,124,1,125,1,125,
        1,126,1,126,1,127,1,127,1,128,1,128,1,129,1,129,1,130,1,130,1,131,
        1,131,1,132,1,132,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,
        1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,1,136,1,136,1,136,
        1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,
        1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,
        1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,1,143,
        1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,1,147,
        1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,149,
        1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,
        1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,153,1,153,1,153,
        1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,
        1,155,1,155,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,
        1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,158,
        1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        1,159,1,159,1,159,1,159,1,160,1,160,1,160,1,160,1,160,1,160,1,160,
        1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,162,1,163,1,163,
        1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,
        1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,166,1,166,1,166,1,166,
        1,166,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,1,167,
        1,168,1,168,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,171,1,171,
        1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,175,
        1,175,1,175,1,175,1,175,1,175,1,176,1,176,1,177,1,177,1,177,1,177,
        1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,180,1,180,
        1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,182,1,182,1,182,
        1,182,1,182,1,183,1,183,1,183,1,183,1,184,1,184,1,184,1,185,1,185,
        1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,
        1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,
        1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,1,190,1,190,
        1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,192,1,192,
        1,192,1,192,1,192,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,
        1,194,1,194,1,195,1,195,1,195,1,195,1,195,1,196,1,196,1,196,1,196,
        1,196,1,196,1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,1,199,
        1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,
        1,200,1,200,1,200,1,200,1,201,1,201,1,201,1,201,1,202,1,202,1,202,
        1,202,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,203,1,204,1,204,
        1,204,1,204,1,204,1,204,1,204,1,204,1,205,1,205,1,205,1,205,1,205,
        1,205,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,1,206,1,206,
        1,206,1,206,1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,
        1,207,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,1,208,
        1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,
        1,210,1,210,1,210,1,210,1,210,1,211,1,211,1,211,1,211,1,211,1,211,
        1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,1,212,1,212,1,212,
        1,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,
        1,213,1,213,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,
        1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,
        1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,
        1,217,1,217,1,217,1,217,1,217,1,217,1,217,1,218,1,218,1,218,1,218,
        1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,1,219,1,219,
        1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,
        1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,220,1,221,1,221,
        1,221,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,
        1,222,1,222,1,222,1,222,1,222,1,223,1,223,1,223,1,223,1,223,1,223,
        1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,
        1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,224,1,225,1,225,1,225,
        1,225,1,225,1,225,1,225,1,225,1,225,1,226,1,226,1,226,1,226,1,226,
        1,226,1,226,1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,227,1,227,
        1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,227,1,228,1,228,
        1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,
        1,229,1,229,1,229,1,229,1,229,1,230,1,230,1,230,1,230,1,230,1,230,
        1,230,1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,232,1,232,1,232,
        1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,233,
        1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,234,1,234,
        1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,235,
        1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,1,235,
        1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,236,1,237,1,237,1,237,
        1,237,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,238,
        1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,240,1,240,1,240,1,240,
        1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,1,241,
        1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,1,242,
        1,242,1,242,1,242,1,242,1,242,1,242,1,243,1,243,1,243,1,243,1,243,
        1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,
        1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,244,1,245,
        1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,
        1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,247,1,247,1,247,
        1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,1,248,
        1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,
        1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,249,1,250,
        1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,
        1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,251,1,251,
        1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,
        1,253,1,253,1,253,1,253,1,253,1,253,1,254,1,254,1,254,1,254,1,254,
        1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,1,255,1,255,1,255,
        1,255,1,256,1,256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,
        1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,1,260,
        1,260,1,260,1,260,1,260,1,260,1,261,1,261,1,261,1,261,1,261,1,261,
        1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,263,1,263,1,263,1,263,
        1,263,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,264,1,264,
        1,264,1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,
        1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,1,267,1,268,1,268,
        1,268,1,268,1,268,1,268,1,269,1,269,1,269,1,269,1,269,1,269,1,269,
        1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,
        1,271,1,271,1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,1,273,
        1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,1,274,1,274,1,274,
        1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,276,
        1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,1,277,
        1,277,1,277,1,278,1,278,1,278,1,279,1,279,1,279,1,279,1,279,1,279,
        1,279,1,280,1,280,1,280,1,280,1,280,1,280,1,281,1,281,1,281,1,281,
        1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,281,1,282,1,282,
        1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,
        1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,
        1,285,1,285,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,1,287,
        1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,
        1,287,1,287,1,287,1,287,1,287,1,288,1,288,1,288,1,288,1,288,1,288,
        1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,
        1,289,1,289,1,289,1,289,1,289,1,289,1,289,1,289,1,289,1,290,1,290,
        1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,291,1,291,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,
        1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,1,292,
        1,292,1,292,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,
        1,293,1,293,1,293,1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,294,
        1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,1,295,
        1,295,1,295,1,295,1,295,1,295,1,296,1,296,1,296,1,296,1,296,1,296,
        1,296,1,297,1,297,1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,
        1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,1,298,
        1,298,1,298,1,298,1,298,1,298,1,298,1,299,1,299,1,299,1,299,1,299,
        1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,
        1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,1,300,1,300,1,300,
        1,300,1,300,1,300,1,300,1,300,1,300,1,300,1,300,1,300,1,300,1,300,
        1,300,1,300,1,300,1,301,1,301,1,301,1,301,1,301,1,301,1,301,1,301,
        1,301,1,301,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,
        1,302,1,302,1,302,1,302,1,302,1,303,1,303,1,303,1,303,1,303,1,303,
        1,303,1,303,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,
        1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,304,1,305,1,305,
        1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,
        1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,1,305,
        1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,1,306,
        1,306,1,306,1,306,1,306,1,307,1,307,1,307,1,307,1,307,1,307,1,307,
        1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,1,307,
        1,307,1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,308,1,308,1,308,
        1,308,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,
        1,309,1,309,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,1,310,
        1,310,1,310,1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,
        1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,312,1,312,
        1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,1,312,
        1,312,1,312,1,312,1,312,1,312,1,312,1,313,1,313,1,313,1,313,1,313,
        1,313,1,313,1,313,1,314,1,314,1,314,1,314,1,314,1,315,1,315,1,315,
        1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,316,1,316,
        1,316,1,316,1,316,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,
        1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,318,1,318,
        1,318,1,318,1,318,1,319,1,319,1,319,1,320,1,320,1,321,1,321,1,322,
        1,322,1,323,1,323,1,324,1,324,1,325,1,325,1,326,1,326,1,327,1,327,
        1,328,4,328,3403,8,328,11,328,12,328,3404,1,329,4,329,3408,8,329,
        11,329,12,329,3409,3,329,3412,8,329,1,329,1,329,4,329,3416,8,329,
        11,329,12,329,3417,1,330,1,330,4,330,3422,8,330,11,330,12,330,3423,
        4,330,3426,8,330,11,330,12,330,3427,1,331,4,331,3431,8,331,11,331,
        12,331,3432,1,331,5,331,3436,8,331,10,331,12,331,3439,9,331,1,332,
        4,332,3442,8,332,11,332,12,332,3443,1,332,5,332,3447,8,332,10,332,
        12,332,3450,9,332,1,332,1,332,1,333,3,333,3455,8,333,1,333,1,333,
        1,333,1,334,1,334,1,334,1,334,1,334,1,334,5,334,3466,8,334,10,334,
        12,334,3469,9,334,1,334,1,334,1,335,1,335,1,335,1,335,1,335,1,335,
        5,335,3479,8,335,10,335,12,335,3482,9,335,1,335,1,335,1,336,1,336,
        1,336,1,336,1,336,1,336,5,336,3492,8,336,10,336,12,336,3495,9,336,
        1,336,1,336,1,337,1,337,1,338,1,338,1,338,1,338,2,3432,3443,0,339,
        1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
        27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,
        49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,
        71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,
        93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,
        113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,131,
        66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,149,75,
        151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,84,169,
        85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,187,94,
        189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,205,103,
        207,104,209,105,211,106,213,107,215,108,217,109,219,110,221,111,
        223,112,225,113,227,114,229,115,231,116,233,117,235,118,237,119,
        239,120,241,121,243,122,245,123,247,124,249,125,251,126,253,127,
        255,128,257,129,259,130,261,131,263,132,265,133,267,134,269,135,
        271,136,273,137,275,138,277,139,279,140,281,141,283,142,285,143,
        287,144,289,145,291,146,293,147,295,148,297,149,299,150,301,151,
        303,152,305,153,307,154,309,155,311,156,313,157,315,158,317,159,
        319,160,321,161,323,162,325,163,327,164,329,165,331,166,333,167,
        335,168,337,169,339,170,341,171,343,172,345,173,347,174,349,175,
        351,176,353,177,355,178,357,179,359,180,361,181,363,182,365,183,
        367,184,369,185,371,186,373,187,375,188,377,189,379,190,381,191,
        383,192,385,193,387,194,389,195,391,196,393,197,395,198,397,199,
        399,200,401,201,403,202,405,203,407,204,409,205,411,206,413,207,
        415,208,417,209,419,210,421,211,423,212,425,213,427,214,429,215,
        431,216,433,217,435,218,437,219,439,220,441,221,443,222,445,223,
        447,224,449,225,451,226,453,227,455,228,457,229,459,230,461,231,
        463,232,465,233,467,234,469,235,471,236,473,237,475,238,477,239,
        479,240,481,241,483,242,485,243,487,244,489,245,491,246,493,247,
        495,248,497,249,499,250,501,251,503,252,505,253,507,254,509,255,
        511,256,513,257,515,258,517,259,519,260,521,261,523,262,525,263,
        527,264,529,265,531,266,533,267,535,268,537,269,539,270,541,271,
        543,272,545,273,547,274,549,275,551,276,553,277,555,278,557,279,
        559,280,561,281,563,282,565,283,567,284,569,285,571,286,573,287,
        575,288,577,289,579,290,581,291,583,292,585,293,587,294,589,295,
        591,296,593,297,595,298,597,299,599,300,601,301,603,302,605,303,
        607,304,609,305,611,306,613,307,615,308,617,309,619,310,621,311,
        623,312,625,313,627,314,629,315,631,316,633,317,635,318,637,319,
        639,320,641,321,643,322,645,323,647,324,649,325,651,326,653,327,
        655,328,657,329,659,330,661,0,663,0,665,0,667,331,669,332,671,333,
        673,334,675,0,677,335,1,0,9,1,0,45,46,2,0,42,42,48,57,2,0,42,42,
        64,90,5,0,42,42,45,45,48,57,65,90,95,95,2,0,42,42,65,90,2,0,34,34,
        92,92,2,0,39,39,92,92,2,0,92,92,96,96,1,0,48,57,3519,0,1,1,0,0,0,
        0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
        1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,
        1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,
        1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,
        1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,
        1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,
        0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,
        0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,
        131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,
        0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,
        1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,
        0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,
        0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,
        177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,
        0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,
        1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,
        0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,
        0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,
        223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,
        0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,
        1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,
        0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,
        0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,
        269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,
        0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,
        1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,
        0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,
        0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,
        315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,
        0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,
        1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,
        0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,
        0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,
        361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,
        0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,
        1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,
        0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,0,397,1,
        0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,
        407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,415,1,0,
        0,0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,0,0,0,425,
        1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,
        0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,0,443,1,
        0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,
        453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,461,1,0,
        0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,0,0,0,471,
        1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,
        0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,0,489,1,
        0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,
        499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,507,1,0,
        0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,0,0,0,517,
        1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,
        0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,0,535,1,
        0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,
        545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,553,1,0,
        0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,0,0,0,563,
        1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,
        0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,0,581,1,
        0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,
        591,1,0,0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,599,1,0,
        0,0,0,601,1,0,0,0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,0,0,0,609,
        1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,
        0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,0,0,627,1,
        0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,
        637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,645,1,0,
        0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,0,0,0,655,
        1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,
        0,671,1,0,0,0,0,673,1,0,0,0,0,677,1,0,0,0,1,679,1,0,0,0,3,686,1,
        0,0,0,5,695,1,0,0,0,7,700,1,0,0,0,9,705,1,0,0,0,11,711,1,0,0,0,13,
        718,1,0,0,0,15,725,1,0,0,0,17,731,1,0,0,0,19,737,1,0,0,0,21,742,
        1,0,0,0,23,747,1,0,0,0,25,752,1,0,0,0,27,756,1,0,0,0,29,761,1,0,
        0,0,31,767,1,0,0,0,33,774,1,0,0,0,35,780,1,0,0,0,37,786,1,0,0,0,
        39,791,1,0,0,0,41,799,1,0,0,0,43,808,1,0,0,0,45,818,1,0,0,0,47,825,
        1,0,0,0,49,828,1,0,0,0,51,831,1,0,0,0,53,834,1,0,0,0,55,837,1,0,
        0,0,57,844,1,0,0,0,59,850,1,0,0,0,61,852,1,0,0,0,63,857,1,0,0,0,
        65,869,1,0,0,0,67,876,1,0,0,0,69,881,1,0,0,0,71,885,1,0,0,0,73,888,
        1,0,0,0,75,892,1,0,0,0,77,902,1,0,0,0,79,914,1,0,0,0,81,932,1,0,
        0,0,83,943,1,0,0,0,85,950,1,0,0,0,87,956,1,0,0,0,89,966,1,0,0,0,
        91,977,1,0,0,0,93,991,1,0,0,0,95,1007,1,0,0,0,97,1020,1,0,0,0,99,
        1032,1,0,0,0,101,1045,1,0,0,0,103,1056,1,0,0,0,105,1069,1,0,0,0,
        107,1084,1,0,0,0,109,1095,1,0,0,0,111,1105,1,0,0,0,113,1124,1,0,
        0,0,115,1148,1,0,0,0,117,1153,1,0,0,0,119,1156,1,0,0,0,121,1160,
        1,0,0,0,123,1163,1,0,0,0,125,1167,1,0,0,0,127,1171,1,0,0,0,129,1176,
        1,0,0,0,131,1182,1,0,0,0,133,1189,1,0,0,0,135,1200,1,0,0,0,137,1209,
        1,0,0,0,139,1213,1,0,0,0,141,1222,1,0,0,0,143,1238,1,0,0,0,145,1249,
        1,0,0,0,147,1261,1,0,0,0,149,1272,1,0,0,0,151,1277,1,0,0,0,153,1294,
        1,0,0,0,155,1306,1,0,0,0,157,1318,1,0,0,0,159,1330,1,0,0,0,161,1339,
        1,0,0,0,163,1351,1,0,0,0,165,1363,1,0,0,0,167,1370,1,0,0,0,169,1389,
        1,0,0,0,171,1403,1,0,0,0,173,1418,1,0,0,0,175,1432,1,0,0,0,177,1438,
        1,0,0,0,179,1452,1,0,0,0,181,1460,1,0,0,0,183,1467,1,0,0,0,185,1486,
        1,0,0,0,187,1503,1,0,0,0,189,1508,1,0,0,0,191,1521,1,0,0,0,193,1526,
        1,0,0,0,195,1537,1,0,0,0,197,1547,1,0,0,0,199,1554,1,0,0,0,201,1566,
        1,0,0,0,203,1570,1,0,0,0,205,1578,1,0,0,0,207,1585,1,0,0,0,209,1590,
        1,0,0,0,211,1596,1,0,0,0,213,1603,1,0,0,0,215,1611,1,0,0,0,217,1613,
        1,0,0,0,219,1615,1,0,0,0,221,1617,1,0,0,0,223,1619,1,0,0,0,225,1621,
        1,0,0,0,227,1623,1,0,0,0,229,1626,1,0,0,0,231,1629,1,0,0,0,233,1632,
        1,0,0,0,235,1634,1,0,0,0,237,1636,1,0,0,0,239,1638,1,0,0,0,241,1640,
        1,0,0,0,243,1642,1,0,0,0,245,1644,1,0,0,0,247,1646,1,0,0,0,249,1648,
        1,0,0,0,251,1650,1,0,0,0,253,1652,1,0,0,0,255,1654,1,0,0,0,257,1656,
        1,0,0,0,259,1658,1,0,0,0,261,1660,1,0,0,0,263,1662,1,0,0,0,265,1664,
        1,0,0,0,267,1666,1,0,0,0,269,1670,1,0,0,0,271,1676,1,0,0,0,273,1691,
        1,0,0,0,275,1697,1,0,0,0,277,1709,1,0,0,0,279,1713,1,0,0,0,281,1718,
        1,0,0,0,283,1725,1,0,0,0,285,1729,1,0,0,0,287,1734,1,0,0,0,289,1740,
        1,0,0,0,291,1746,1,0,0,0,293,1753,1,0,0,0,295,1757,1,0,0,0,297,1763,
        1,0,0,0,299,1772,1,0,0,0,301,1780,1,0,0,0,303,1792,1,0,0,0,305,1803,
        1,0,0,0,307,1814,1,0,0,0,309,1819,1,0,0,0,311,1825,1,0,0,0,313,1830,
        1,0,0,0,315,1835,1,0,0,0,317,1842,1,0,0,0,319,1851,1,0,0,0,321,1865,
        1,0,0,0,323,1872,1,0,0,0,325,1884,1,0,0,0,327,1892,1,0,0,0,329,1901,
        1,0,0,0,331,1912,1,0,0,0,333,1923,1,0,0,0,335,1928,1,0,0,0,337,1938,
        1,0,0,0,339,1940,1,0,0,0,341,1943,1,0,0,0,343,1947,1,0,0,0,345,1952,
        1,0,0,0,347,1957,1,0,0,0,349,1965,1,0,0,0,351,1970,1,0,0,0,353,1976,
        1,0,0,0,355,1978,1,0,0,0,357,1982,1,0,0,0,359,1988,1,0,0,0,361,1991,
        1,0,0,0,363,1995,1,0,0,0,365,2001,1,0,0,0,367,2006,1,0,0,0,369,2010,
        1,0,0,0,371,2013,1,0,0,0,373,2022,1,0,0,0,375,2026,1,0,0,0,377,2032,
        1,0,0,0,379,2037,1,0,0,0,381,2043,1,0,0,0,383,2048,1,0,0,0,385,2053,
        1,0,0,0,387,2062,1,0,0,0,389,2067,1,0,0,0,391,2072,1,0,0,0,393,2077,
        1,0,0,0,395,2083,1,0,0,0,397,2087,1,0,0,0,399,2091,1,0,0,0,401,2099,
        1,0,0,0,403,2107,1,0,0,0,405,2111,1,0,0,0,407,2115,1,0,0,0,409,2123,
        1,0,0,0,411,2131,1,0,0,0,413,2139,1,0,0,0,415,2152,1,0,0,0,417,2165,
        1,0,0,0,419,2183,1,0,0,0,421,2191,1,0,0,0,423,2196,1,0,0,0,425,2205,
        1,0,0,0,427,2214,1,0,0,0,429,2226,1,0,0,0,431,2235,1,0,0,0,433,2243,
        1,0,0,0,435,2254,1,0,0,0,437,2264,1,0,0,0,439,2274,1,0,0,0,441,2287,
        1,0,0,0,443,2299,1,0,0,0,445,2307,1,0,0,0,447,2317,1,0,0,0,449,2331,
        1,0,0,0,451,2342,1,0,0,0,453,2351,1,0,0,0,455,2361,1,0,0,0,457,2376,
        1,0,0,0,459,2385,1,0,0,0,461,2394,1,0,0,0,463,2404,1,0,0,0,465,2408,
        1,0,0,0,467,2419,1,0,0,0,469,2431,1,0,0,0,471,2443,1,0,0,0,473,2455,
        1,0,0,0,475,2463,1,0,0,0,477,2471,1,0,0,0,479,2479,1,0,0,0,481,2484,
        1,0,0,0,483,2493,1,0,0,0,485,2503,1,0,0,0,487,2516,1,0,0,0,489,2530,
        1,0,0,0,491,2542,1,0,0,0,493,2554,1,0,0,0,495,2562,1,0,0,0,497,2573,
        1,0,0,0,499,2588,1,0,0,0,501,2597,1,0,0,0,503,2606,1,0,0,0,505,2620,
        1,0,0,0,507,2628,1,0,0,0,509,2637,1,0,0,0,511,2644,1,0,0,0,513,2654,
        1,0,0,0,515,2660,1,0,0,0,517,2666,1,0,0,0,519,2671,1,0,0,0,521,2674,
        1,0,0,0,523,2680,1,0,0,0,525,2686,1,0,0,0,527,2693,1,0,0,0,529,2703,
        1,0,0,0,531,2710,1,0,0,0,533,2717,1,0,0,0,535,2723,1,0,0,0,537,2728,
        1,0,0,0,539,2734,1,0,0,0,541,2741,1,0,0,0,543,2749,1,0,0,0,545,2757,
        1,0,0,0,547,2762,1,0,0,0,549,2767,1,0,0,0,551,2774,1,0,0,0,553,2784,
        1,0,0,0,555,2791,1,0,0,0,557,2798,1,0,0,0,559,2801,1,0,0,0,561,2808,
        1,0,0,0,563,2814,1,0,0,0,565,2827,1,0,0,0,567,2847,1,0,0,0,569,2865,
        1,0,0,0,571,2885,1,0,0,0,573,2897,1,0,0,0,575,2910,1,0,0,0,577,2933,
        1,0,0,0,579,2950,1,0,0,0,581,2959,1,0,0,0,583,2995,1,0,0,0,585,3001,
        1,0,0,0,587,3018,1,0,0,0,589,3032,1,0,0,0,591,3049,1,0,0,0,593,3076,
        1,0,0,0,595,3083,1,0,0,0,597,3089,1,0,0,0,599,3110,1,0,0,0,601,3130,
        1,0,0,0,603,3151,1,0,0,0,605,3165,1,0,0,0,607,3175,1,0,0,0,609,3183,
        1,0,0,0,611,3201,1,0,0,0,613,3225,1,0,0,0,615,3240,1,0,0,0,617,3261,
        1,0,0,0,619,3270,1,0,0,0,621,3282,1,0,0,0,623,3296,1,0,0,0,625,3311,
        1,0,0,0,627,3330,1,0,0,0,629,3338,1,0,0,0,631,3343,1,0,0,0,633,3355,
        1,0,0,0,635,3360,1,0,0,0,637,3377,1,0,0,0,639,3382,1,0,0,0,641,3385,
        1,0,0,0,643,3387,1,0,0,0,645,3389,1,0,0,0,647,3391,1,0,0,0,649,3393,
        1,0,0,0,651,3395,1,0,0,0,653,3397,1,0,0,0,655,3399,1,0,0,0,657,3402,
        1,0,0,0,659,3411,1,0,0,0,661,3425,1,0,0,0,663,3430,1,0,0,0,665,3441,
        1,0,0,0,667,3454,1,0,0,0,669,3459,1,0,0,0,671,3472,1,0,0,0,673,3485,
        1,0,0,0,675,3498,1,0,0,0,677,3500,1,0,0,0,679,680,5,83,0,0,680,681,
        5,69,0,0,681,682,5,65,0,0,682,683,5,82,0,0,683,684,5,67,0,0,684,
        685,5,72,0,0,685,2,1,0,0,0,686,687,5,68,0,0,687,688,5,69,0,0,688,
        689,5,83,0,0,689,690,5,67,0,0,690,691,5,82,0,0,691,692,5,73,0,0,
        692,693,5,66,0,0,693,694,5,69,0,0,694,4,1,0,0,0,695,696,5,83,0,0,
        696,697,5,72,0,0,697,698,5,79,0,0,698,699,5,87,0,0,699,6,1,0,0,0,
        700,701,5,70,0,0,701,702,5,82,0,0,702,703,5,79,0,0,703,704,5,77,
        0,0,704,8,1,0,0,0,705,706,5,87,0,0,706,707,5,72,0,0,707,708,5,69,
        0,0,708,709,5,82,0,0,709,710,5,69,0,0,710,10,1,0,0,0,711,712,5,70,
        0,0,712,713,5,73,0,0,713,714,5,69,0,0,714,715,5,76,0,0,715,716,5,
        68,0,0,716,717,5,83,0,0,717,12,1,0,0,0,718,719,5,82,0,0,719,720,
        5,69,0,0,720,721,5,78,0,0,721,722,5,65,0,0,722,723,5,77,0,0,723,
        724,5,69,0,0,724,14,1,0,0,0,725,726,5,83,0,0,726,727,5,84,0,0,727,
        728,5,65,0,0,728,729,5,84,0,0,729,730,5,83,0,0,730,16,1,0,0,0,731,
        732,5,68,0,0,732,733,5,69,0,0,733,734,5,68,0,0,734,735,5,85,0,0,
        735,736,5,80,0,0,736,18,1,0,0,0,737,738,5,83,0,0,738,739,5,79,0,
        0,739,740,5,82,0,0,740,741,5,84,0,0,741,20,1,0,0,0,742,743,5,69,
        0,0,743,744,5,86,0,0,744,745,5,65,0,0,745,746,5,76,0,0,746,22,1,
        0,0,0,747,748,5,72,0,0,748,749,5,69,0,0,749,750,5,65,0,0,750,751,
        5,68,0,0,751,24,1,0,0,0,752,753,5,84,0,0,753,754,5,79,0,0,754,755,
        5,80,0,0,755,26,1,0,0,0,756,757,5,82,0,0,757,758,5,65,0,0,758,759,
        5,82,0,0,759,760,5,69,0,0,760,28,1,0,0,0,761,762,5,80,0,0,762,763,
        5,65,0,0,763,764,5,82,0,0,764,765,5,83,0,0,765,766,5,69,0,0,766,
        30,1,0,0,0,767,768,5,77,0,0,768,769,5,69,0,0,769,770,5,84,0,0,770,
        771,5,72,0,0,771,772,5,79,0,0,772,773,5,68,0,0,773,32,1,0,0,0,774,
        775,5,82,0,0,775,776,5,69,0,0,776,777,5,71,0,0,777,778,5,69,0,0,
        778,779,5,88,0,0,779,34,1,0,0,0,780,781,5,80,0,0,781,782,5,85,0,
        0,782,783,5,78,0,0,783,784,5,67,0,0,784,785,5,84,0,0,785,36,1,0,
        0,0,786,787,5,71,0,0,787,788,5,82,0,0,788,789,5,79,0,0,789,790,5,
        75,0,0,790,38,1,0,0,0,791,792,5,80,0,0,792,793,5,65,0,0,793,794,
        5,84,0,0,794,795,5,84,0,0,795,796,5,69,0,0,796,797,5,82,0,0,797,
        798,5,78,0,0,798,40,1,0,0,0,799,800,5,80,0,0,800,801,5,65,0,0,801,
        802,5,84,0,0,802,803,5,84,0,0,803,804,5,69,0,0,804,805,5,82,0,0,
        805,806,5,78,0,0,806,807,5,83,0,0,807,42,1,0,0,0,808,809,5,78,0,
        0,809,810,5,69,0,0,810,811,5,87,0,0,811,812,5,95,0,0,812,813,5,70,
        0,0,813,814,5,73,0,0,814,815,5,69,0,0,815,816,5,76,0,0,816,817,5,
        68,0,0,817,44,1,0,0,0,818,819,5,75,0,0,819,820,5,77,0,0,820,821,
        5,69,0,0,821,822,5,65,0,0,822,823,5,78,0,0,823,824,5,83,0,0,824,
        46,1,0,0,0,825,826,5,65,0,0,826,827,5,68,0,0,827,48,1,0,0,0,828,
        829,5,77,0,0,829,830,5,76,0,0,830,50,1,0,0,0,831,832,5,65,0,0,832,
        833,5,83,0,0,833,52,1,0,0,0,834,835,5,66,0,0,835,836,5,89,0,0,836,
        54,1,0,0,0,837,838,5,83,0,0,838,839,5,79,0,0,839,840,5,85,0,0,840,
        841,5,82,0,0,841,842,5,67,0,0,842,843,5,69,0,0,843,56,1,0,0,0,844,
        845,5,73,0,0,845,846,5,78,0,0,846,847,5,68,0,0,847,848,5,69,0,0,
        848,849,5,88,0,0,849,58,1,0,0,0,850,851,5,68,0,0,851,60,1,0,0,0,
        852,853,5,68,0,0,853,854,5,69,0,0,854,855,5,83,0,0,855,856,5,67,
        0,0,856,62,1,0,0,0,857,858,5,68,0,0,858,859,5,65,0,0,859,860,5,84,
        0,0,860,861,5,65,0,0,861,862,5,83,0,0,862,863,5,79,0,0,863,864,5,
        85,0,0,864,865,5,82,0,0,865,866,5,67,0,0,866,867,5,69,0,0,867,868,
        5,83,0,0,868,64,1,0,0,0,869,870,5,83,0,0,870,871,5,79,0,0,871,872,
        5,82,0,0,872,873,5,84,0,0,873,874,5,66,0,0,874,875,5,89,0,0,875,
        66,1,0,0,0,876,877,5,65,0,0,877,878,5,85,0,0,878,879,5,84,0,0,879,
        880,5,79,0,0,880,68,1,0,0,0,881,882,5,83,0,0,882,883,5,84,0,0,883,
        884,5,82,0,0,884,70,1,0,0,0,885,886,5,73,0,0,886,887,5,80,0,0,887,
        72,1,0,0,0,888,889,5,78,0,0,889,890,5,85,0,0,890,891,5,77,0,0,891,
        74,1,0,0,0,892,893,5,75,0,0,893,894,5,69,0,0,894,895,5,69,0,0,895,
        896,5,80,0,0,896,897,5,69,0,0,897,898,5,77,0,0,898,899,5,80,0,0,
        899,900,5,84,0,0,900,901,5,89,0,0,901,76,1,0,0,0,902,903,5,67,0,
        0,903,904,5,79,0,0,904,905,5,78,0,0,905,906,5,83,0,0,906,907,5,69,
        0,0,907,908,5,67,0,0,908,909,5,85,0,0,909,910,5,84,0,0,910,911,5,
        73,0,0,911,912,5,86,0,0,912,913,5,69,0,0,913,78,1,0,0,0,914,915,
        5,68,0,0,915,916,5,69,0,0,916,917,5,68,0,0,917,918,5,85,0,0,918,
        919,5,80,0,0,919,920,5,95,0,0,920,921,5,83,0,0,921,922,5,80,0,0,
        922,923,5,76,0,0,923,924,5,73,0,0,924,925,5,84,0,0,925,926,5,86,
        0,0,926,927,5,65,0,0,927,928,5,76,0,0,928,929,5,85,0,0,929,930,5,
        69,0,0,930,931,5,83,0,0,931,80,1,0,0,0,932,933,5,80,0,0,933,934,
        5,65,0,0,934,935,5,82,0,0,935,936,5,84,0,0,936,937,5,73,0,0,937,
        938,5,84,0,0,938,939,5,73,0,0,939,940,5,79,0,0,940,941,5,78,0,0,
        941,942,5,83,0,0,942,82,1,0,0,0,943,944,5,65,0,0,944,945,5,76,0,
        0,945,946,5,76,0,0,946,947,5,78,0,0,947,948,5,85,0,0,948,949,5,77,
        0,0,949,84,1,0,0,0,950,951,5,68,0,0,951,952,5,69,0,0,952,953,5,76,
        0,0,953,954,5,73,0,0,954,955,5,77,0,0,955,86,1,0,0,0,956,957,5,67,
        0,0,957,958,5,69,0,0,958,959,5,78,0,0,959,960,5,84,0,0,960,961,5,
        82,0,0,961,962,5,79,0,0,962,963,5,73,0,0,963,964,5,68,0,0,964,965,
        5,83,0,0,965,88,1,0,0,0,966,967,5,73,0,0,967,968,5,84,0,0,968,969,
        5,69,0,0,969,970,5,82,0,0,970,971,5,65,0,0,971,972,5,84,0,0,972,
        973,5,73,0,0,973,974,5,79,0,0,974,975,5,78,0,0,975,976,5,83,0,0,
        976,90,1,0,0,0,977,978,5,68,0,0,978,979,5,73,0,0,979,980,5,83,0,
        0,980,981,5,84,0,0,981,982,5,65,0,0,982,983,5,78,0,0,983,984,5,67,
        0,0,984,985,5,69,0,0,985,986,5,95,0,0,986,987,5,84,0,0,987,988,5,
        89,0,0,988,989,5,80,0,0,989,990,5,69,0,0,990,92,1,0,0,0,991,992,
        5,78,0,0,992,993,5,85,0,0,993,994,5,77,0,0,994,995,5,66,0,0,995,
        996,5,69,0,0,996,997,5,82,0,0,997,998,5,95,0,0,998,999,5,79,0,0,
        999,1000,5,70,0,0,1000,1001,5,95,0,0,1001,1002,5,84,0,0,1002,1003,
        5,82,0,0,1003,1004,5,69,0,0,1004,1005,5,69,0,0,1005,1006,5,83,0,
        0,1006,94,1,0,0,0,1007,1008,5,83,0,0,1008,1009,5,72,0,0,1009,1010,
        5,73,0,0,1010,1011,5,78,0,0,1011,1012,5,71,0,0,1012,1013,5,76,0,
        0,1013,1014,5,69,0,0,1014,1015,5,95,0,0,1015,1016,5,83,0,0,1016,
        1017,5,73,0,0,1017,1018,5,90,0,0,1018,1019,5,69,0,0,1019,96,1,0,
        0,0,1020,1021,5,83,0,0,1021,1022,5,65,0,0,1022,1023,5,77,0,0,1023,
        1024,5,80,0,0,1024,1025,5,76,0,0,1025,1026,5,69,0,0,1026,1027,5,
        95,0,0,1027,1028,5,83,0,0,1028,1029,5,73,0,0,1029,1030,5,90,0,0,
        1030,1031,5,69,0,0,1031,98,1,0,0,0,1032,1033,5,79,0,0,1033,1034,
        5,85,0,0,1034,1035,5,84,0,0,1035,1036,5,80,0,0,1036,1037,5,85,0,
        0,1037,1038,5,84,0,0,1038,1039,5,95,0,0,1039,1040,5,65,0,0,1040,
        1041,5,70,0,0,1041,1042,5,84,0,0,1042,1043,5,69,0,0,1043,1044,5,
        82,0,0,1044,100,1,0,0,0,1045,1046,5,84,0,0,1046,1047,5,73,0,0,1047,
        1048,5,77,0,0,1048,1049,5,69,0,0,1049,1050,5,95,0,0,1050,1051,5,
        68,0,0,1051,1052,5,69,0,0,1052,1053,5,67,0,0,1053,1054,5,65,0,0,
        1054,1055,5,89,0,0,1055,102,1,0,0,0,1056,1057,5,65,0,0,1057,1058,
        5,78,0,0,1058,1059,5,79,0,0,1059,1060,5,77,0,0,1060,1061,5,65,0,
        0,1061,1062,5,76,0,0,1062,1063,5,89,0,0,1063,1064,5,95,0,0,1064,
        1065,5,82,0,0,1065,1066,5,65,0,0,1066,1067,5,84,0,0,1067,1068,5,
        69,0,0,1068,104,1,0,0,0,1069,1070,5,67,0,0,1070,1071,5,65,0,0,1071,
        1072,5,84,0,0,1072,1073,5,69,0,0,1073,1074,5,71,0,0,1074,1075,5,
        79,0,0,1075,1076,5,82,0,0,1076,1077,5,89,0,0,1077,1078,5,95,0,0,
        1078,1079,5,70,0,0,1079,1080,5,73,0,0,1080,1081,5,69,0,0,1081,1082,
        5,76,0,0,1082,1083,5,68,0,0,1083,106,1,0,0,0,1084,1085,5,84,0,0,
        1085,1086,5,73,0,0,1086,1087,5,77,0,0,1087,1088,5,69,0,0,1088,1089,
        5,95,0,0,1089,1090,5,70,0,0,1090,1091,5,73,0,0,1091,1092,5,69,0,
        0,1092,1093,5,76,0,0,1093,1094,5,68,0,0,1094,108,1,0,0,0,1095,1096,
        5,84,0,0,1096,1097,5,73,0,0,1097,1098,5,77,0,0,1098,1099,5,69,0,
        0,1099,1100,5,95,0,0,1100,1101,5,90,0,0,1101,1102,5,79,0,0,1102,
        1103,5,78,0,0,1103,1104,5,69,0,0,1104,110,1,0,0,0,1105,1106,5,84,
        0,0,1106,1107,5,82,0,0,1107,1108,5,65,0,0,1108,1109,5,73,0,0,1109,
        1110,5,78,0,0,1110,1111,5,73,0,0,1111,1112,5,78,0,0,1112,1113,5,
        71,0,0,1113,1114,5,95,0,0,1114,1115,5,68,0,0,1115,1116,5,65,0,0,
        1116,1117,5,84,0,0,1117,1118,5,65,0,0,1118,1119,5,95,0,0,1119,1120,
        5,83,0,0,1120,1121,5,73,0,0,1121,1122,5,90,0,0,1122,1123,5,69,0,
        0,1123,112,1,0,0,0,1124,1125,5,65,0,0,1125,1126,5,78,0,0,1126,1127,
        5,79,0,0,1127,1128,5,77,0,0,1128,1129,5,65,0,0,1129,1130,5,76,0,
        0,1130,1131,5,89,0,0,1131,1132,5,95,0,0,1132,1133,5,83,0,0,1133,
        1134,5,67,0,0,1134,1135,5,79,0,0,1135,1136,5,82,0,0,1136,1137,5,
        69,0,0,1137,1138,5,95,0,0,1138,1139,5,84,0,0,1139,1140,5,72,0,0,
        1140,1141,5,82,0,0,1141,1142,5,69,0,0,1142,1143,5,83,0,0,1143,1144,
        5,72,0,0,1144,1145,5,79,0,0,1145,1146,5,76,0,0,1146,1147,5,68,0,
        0,1147,114,1,0,0,0,1148,1149,5,67,0,0,1149,1150,5,65,0,0,1150,1151,
        5,83,0,0,1151,1152,5,69,0,0,1152,116,1,0,0,0,1153,1154,5,73,0,0,
        1154,1155,5,78,0,0,1155,118,1,0,0,0,1156,1157,5,78,0,0,1157,1158,
        5,79,0,0,1158,1159,5,84,0,0,1159,120,1,0,0,0,1160,1161,5,79,0,0,
        1161,1162,5,82,0,0,1162,122,1,0,0,0,1163,1164,5,65,0,0,1164,1165,
        5,78,0,0,1165,1166,5,68,0,0,1166,124,1,0,0,0,1167,1168,5,88,0,0,
        1168,1169,5,79,0,0,1169,1170,5,82,0,0,1170,126,1,0,0,0,1171,1172,
        5,84,0,0,1172,1173,5,82,0,0,1173,1174,5,85,0,0,1174,1175,5,69,0,
        0,1175,128,1,0,0,0,1176,1177,5,70,0,0,1177,1178,5,65,0,0,1178,1179,
        5,76,0,0,1179,1180,5,83,0,0,1180,1181,5,69,0,0,1181,130,1,0,0,0,
        1182,1183,5,82,0,0,1183,1184,5,69,0,0,1184,1185,5,71,0,0,1185,1186,
        5,69,0,0,1186,1187,5,88,0,0,1187,1188,5,80,0,0,1188,132,1,0,0,0,
        1189,1190,5,67,0,0,1190,1191,5,79,0,0,1191,1192,5,78,0,0,1192,1193,
        5,86,0,0,1193,1194,5,69,0,0,1194,1195,5,82,0,0,1195,1196,5,84,0,
        0,1196,1197,5,95,0,0,1197,1198,5,84,0,0,1198,1199,5,90,0,0,1199,
        134,1,0,0,0,1200,1201,5,68,0,0,1201,1202,5,65,0,0,1202,1203,5,84,
        0,0,1203,1204,5,69,0,0,1204,1205,5,84,0,0,1205,1206,5,73,0,0,1206,
        1207,5,77,0,0,1207,1208,5,69,0,0,1208,136,1,0,0,0,1209,1210,5,68,
        0,0,1210,1211,5,65,0,0,1211,1212,5,89,0,0,1212,138,1,0,0,0,1213,
        1214,5,68,0,0,1214,1215,5,65,0,0,1215,1216,5,89,0,0,1216,1217,5,
        95,0,0,1217,1218,5,72,0,0,1218,1219,5,79,0,0,1219,1220,5,85,0,0,
        1220,1221,5,82,0,0,1221,140,1,0,0,0,1222,1223,5,68,0,0,1223,1224,
        5,65,0,0,1224,1225,5,89,0,0,1225,1226,5,95,0,0,1226,1227,5,77,0,
        0,1227,1228,5,73,0,0,1228,1229,5,67,0,0,1229,1230,5,82,0,0,1230,
        1231,5,79,0,0,1231,1232,5,83,0,0,1232,1233,5,69,0,0,1233,1234,5,
        67,0,0,1234,1235,5,79,0,0,1235,1236,5,78,0,0,1236,1237,5,68,0,0,
        1237,142,1,0,0,0,1238,1239,5,68,0,0,1239,1240,5,65,0,0,1240,1241,
        5,89,0,0,1241,1242,5,95,0,0,1242,1243,5,77,0,0,1243,1244,5,73,0,
        0,1244,1245,5,78,0,0,1245,1246,5,85,0,0,1246,1247,5,84,0,0,1247,
        1248,5,69,0,0,1248,144,1,0,0,0,1249,1250,5,68,0,0,1250,1251,5,65,
        0,0,1251,1252,5,89,0,0,1252,1253,5,95,0,0,1253,1254,5,79,0,0,1254,
        1255,5,70,0,0,1255,1256,5,95,0,0,1256,1257,5,89,0,0,1257,1258,5,
        69,0,0,1258,1259,5,65,0,0,1259,1260,5,82,0,0,1260,146,1,0,0,0,1261,
        1262,5,68,0,0,1262,1263,5,65,0,0,1263,1264,5,89,0,0,1264,1265,5,
        95,0,0,1265,1266,5,83,0,0,1266,1267,5,69,0,0,1267,1268,5,67,0,0,
        1268,1269,5,79,0,0,1269,1270,5,78,0,0,1270,1271,5,68,0,0,1271,148,
        1,0,0,0,1272,1273,5,72,0,0,1273,1274,5,79,0,0,1274,1275,5,85,0,0,
        1275,1276,5,82,0,0,1276,150,1,0,0,0,1277,1278,5,72,0,0,1278,1279,
        5,79,0,0,1279,1280,5,85,0,0,1280,1281,5,82,0,0,1281,1282,5,95,0,
        0,1282,1283,5,77,0,0,1283,1284,5,73,0,0,1284,1285,5,67,0,0,1285,
        1286,5,82,0,0,1286,1287,5,79,0,0,1287,1288,5,83,0,0,1288,1289,5,
        69,0,0,1289,1290,5,67,0,0,1290,1291,5,79,0,0,1291,1292,5,78,0,0,
        1292,1293,5,68,0,0,1293,152,1,0,0,0,1294,1295,5,72,0,0,1295,1296,
        5,79,0,0,1296,1297,5,85,0,0,1297,1298,5,82,0,0,1298,1299,5,95,0,
        0,1299,1300,5,77,0,0,1300,1301,5,73,0,0,1301,1302,5,78,0,0,1302,
        1303,5,85,0,0,1303,1304,5,84,0,0,1304,1305,5,69,0,0,1305,154,1,0,
        0,0,1306,1307,5,72,0,0,1307,1308,5,79,0,0,1308,1309,5,85,0,0,1309,
        1310,5,82,0,0,1310,1311,5,95,0,0,1311,1312,5,79,0,0,1312,1313,5,
        70,0,0,1313,1314,5,95,0,0,1314,1315,5,68,0,0,1315,1316,5,65,0,0,
        1316,1317,5,89,0,0,1317,156,1,0,0,0,1318,1319,5,72,0,0,1319,1320,
        5,79,0,0,1320,1321,5,85,0,0,1321,1322,5,82,0,0,1322,1323,5,95,0,
        0,1323,1324,5,83,0,0,1324,1325,5,69,0,0,1325,1326,5,67,0,0,1326,
        1327,5,79,0,0,1327,1328,5,78,0,0,1328,1329,5,68,0,0,1329,158,1,0,
        0,0,1330,1331,5,73,0,0,1331,1332,5,78,0,0,1332,1333,5,84,0,0,1333,
        1334,5,69,0,0,1334,1335,5,82,0,0,1335,1336,5,86,0,0,1336,1337,5,
        65,0,0,1337,1338,5,76,0,0,1338,160,1,0,0,0,1339,1340,5,77,0,0,1340,
        1341,5,73,0,0,1341,1342,5,67,0,0,1342,1343,5,82,0,0,1343,1344,5,
        79,0,0,1344,1345,5,83,0,0,1345,1346,5,69,0,0,1346,1347,5,67,0,0,
        1347,1348,5,79,0,0,1348,1349,5,78,0,0,1349,1350,5,68,0,0,1350,162,
        1,0,0,0,1351,1352,5,77,0,0,1352,1353,5,73,0,0,1353,1354,5,76,0,0,
        1354,1355,5,76,0,0,1355,1356,5,73,0,0,1356,1357,5,83,0,0,1357,1358,
        5,69,0,0,1358,1359,5,67,0,0,1359,1360,5,79,0,0,1360,1361,5,78,0,
        0,1361,1362,5,68,0,0,1362,164,1,0,0,0,1363,1364,5,77,0,0,1364,1365,
        5,73,0,0,1365,1366,5,78,0,0,1366,1367,5,85,0,0,1367,1368,5,84,0,
        0,1368,1369,5,69,0,0,1369,166,1,0,0,0,1370,1371,5,77,0,0,1371,1372,
        5,73,0,0,1372,1373,5,78,0,0,1373,1374,5,85,0,0,1374,1375,5,84,0,
        0,1375,1376,5,69,0,0,1376,1377,5,95,0,0,1377,1378,5,77,0,0,1378,
        1379,5,73,0,0,1379,1380,5,67,0,0,1380,1381,5,82,0,0,1381,1382,5,
        79,0,0,1382,1383,5,83,0,0,1383,1384,5,69,0,0,1384,1385,5,67,0,0,
        1385,1386,5,79,0,0,1386,1387,5,78,0,0,1387,1388,5,68,0,0,1388,168,
        1,0,0,0,1389,1390,5,77,0,0,1390,1391,5,73,0,0,1391,1392,5,78,0,0,
        1392,1393,5,85,0,0,1393,1394,5,84,0,0,1394,1395,5,69,0,0,1395,1396,
        5,95,0,0,1396,1397,5,79,0,0,1397,1398,5,70,0,0,1398,1399,5,95,0,
        0,1399,1400,5,68,0,0,1400,1401,5,65,0,0,1401,1402,5,89,0,0,1402,
        170,1,0,0,0,1403,1404,5,77,0,0,1404,1405,5,73,0,0,1405,1406,5,78,
        0,0,1406,1407,5,85,0,0,1407,1408,5,84,0,0,1408,1409,5,69,0,0,1409,
        1410,5,95,0,0,1410,1411,5,79,0,0,1411,1412,5,70,0,0,1412,1413,5,
        95,0,0,1413,1414,5,72,0,0,1414,1415,5,79,0,0,1415,1416,5,85,0,0,
        1416,1417,5,82,0,0,1417,172,1,0,0,0,1418,1419,5,77,0,0,1419,1420,
        5,73,0,0,1420,1421,5,78,0,0,1421,1422,5,85,0,0,1422,1423,5,84,0,
        0,1423,1424,5,69,0,0,1424,1425,5,95,0,0,1425,1426,5,83,0,0,1426,
        1427,5,69,0,0,1427,1428,5,67,0,0,1428,1429,5,79,0,0,1429,1430,5,
        78,0,0,1430,1431,5,68,0,0,1431,174,1,0,0,0,1432,1433,5,77,0,0,1433,
        1434,5,79,0,0,1434,1435,5,78,0,0,1435,1436,5,84,0,0,1436,1437,5,
        72,0,0,1437,176,1,0,0,0,1438,1439,5,77,0,0,1439,1440,5,79,0,0,1440,
        1441,5,78,0,0,1441,1442,5,84,0,0,1442,1443,5,72,0,0,1443,1444,5,
        95,0,0,1444,1445,5,79,0,0,1445,1446,5,70,0,0,1446,1447,5,95,0,0,
        1447,1448,5,89,0,0,1448,1449,5,69,0,0,1449,1450,5,65,0,0,1450,1451,
        5,82,0,0,1451,178,1,0,0,0,1452,1453,5,81,0,0,1453,1454,5,85,0,0,
        1454,1455,5,65,0,0,1455,1456,5,82,0,0,1456,1457,5,84,0,0,1457,1458,
        5,69,0,0,1458,1459,5,82,0,0,1459,180,1,0,0,0,1460,1461,5,83,0,0,
        1461,1462,5,69,0,0,1462,1463,5,67,0,0,1463,1464,5,79,0,0,1464,1465,
        5,78,0,0,1465,1466,5,68,0,0,1466,182,1,0,0,0,1467,1468,5,83,0,0,
        1468,1469,5,69,0,0,1469,1470,5,67,0,0,1470,1471,5,79,0,0,1471,1472,
        5,78,0,0,1472,1473,5,68,0,0,1473,1474,5,95,0,0,1474,1475,5,77,0,
        0,1475,1476,5,73,0,0,1476,1477,5,67,0,0,1477,1478,5,82,0,0,1478,
        1479,5,79,0,0,1479,1480,5,83,0,0,1480,1481,5,69,0,0,1481,1482,5,
        67,0,0,1482,1483,5,79,0,0,1483,1484,5,78,0,0,1484,1485,5,68,0,0,
        1485,184,1,0,0,0,1486,1487,5,83,0,0,1487,1488,5,69,0,0,1488,1489,
        5,67,0,0,1489,1490,5,79,0,0,1490,1491,5,78,0,0,1491,1492,5,68,0,
        0,1492,1493,5,95,0,0,1493,1494,5,79,0,0,1494,1495,5,70,0,0,1495,
        1496,5,95,0,0,1496,1497,5,77,0,0,1497,1498,5,73,0,0,1498,1499,5,
        78,0,0,1499,1500,5,85,0,0,1500,1501,5,84,0,0,1501,1502,5,69,0,0,
        1502,186,1,0,0,0,1503,1504,5,87,0,0,1504,1505,5,69,0,0,1505,1506,
        5,69,0,0,1506,1507,5,75,0,0,1507,188,1,0,0,0,1508,1509,5,87,0,0,
        1509,1510,5,69,0,0,1510,1511,5,69,0,0,1511,1512,5,75,0,0,1512,1513,
        5,95,0,0,1513,1514,5,79,0,0,1514,1515,5,70,0,0,1515,1516,5,95,0,
        0,1516,1517,5,89,0,0,1517,1518,5,69,0,0,1518,1519,5,65,0,0,1519,
        1520,5,82,0,0,1520,190,1,0,0,0,1521,1522,5,89,0,0,1522,1523,5,69,
        0,0,1523,1524,5,65,0,0,1524,1525,5,82,0,0,1525,192,1,0,0,0,1526,
        1527,5,89,0,0,1527,1528,5,69,0,0,1528,1529,5,65,0,0,1529,1530,5,
        82,0,0,1530,1531,5,95,0,0,1531,1532,5,77,0,0,1532,1533,5,79,0,0,
        1533,1534,5,78,0,0,1534,1535,5,84,0,0,1535,1536,5,72,0,0,1536,194,
        1,0,0,0,1537,1538,5,68,0,0,1538,1539,5,65,0,0,1539,1540,5,84,0,0,
        1540,1541,5,65,0,0,1541,1542,5,77,0,0,1542,1543,5,79,0,0,1543,1544,
        5,68,0,0,1544,1545,5,69,0,0,1545,1546,5,76,0,0,1546,196,1,0,0,0,
        1547,1548,5,76,0,0,1548,1549,5,79,0,0,1549,1550,5,79,0,0,1550,1551,
        5,75,0,0,1551,1552,5,85,0,0,1552,1553,5,80,0,0,1553,198,1,0,0,0,
        1554,1555,5,83,0,0,1555,1556,5,65,0,0,1556,1557,5,86,0,0,1557,1558,
        5,69,0,0,1558,1559,5,68,0,0,1559,1560,5,83,0,0,1560,1561,5,69,0,
        0,1561,1562,5,65,0,0,1562,1563,5,82,0,0,1563,1564,5,67,0,0,1564,
        1565,5,72,0,0,1565,200,1,0,0,0,1566,1567,5,73,0,0,1567,1568,5,78,
        0,0,1568,1569,5,84,0,0,1569,202,1,0,0,0,1570,1571,5,73,0,0,1571,
        1572,5,78,0,0,1572,1573,5,84,0,0,1573,1574,5,69,0,0,1574,1575,5,
        71,0,0,1575,1576,5,69,0,0,1576,1577,5,82,0,0,1577,204,1,0,0,0,1578,
        1579,5,68,0,0,1579,1580,5,79,0,0,1580,1581,5,85,0,0,1581,1582,5,
        66,0,0,1582,1583,5,76,0,0,1583,1584,5,69,0,0,1584,206,1,0,0,0,1585,
        1586,5,76,0,0,1586,1587,5,79,0,0,1587,1588,5,78,0,0,1588,1589,5,
        71,0,0,1589,208,1,0,0,0,1590,1591,5,70,0,0,1591,1592,5,76,0,0,1592,
        1593,5,79,0,0,1593,1594,5,65,0,0,1594,1595,5,84,0,0,1595,210,1,0,
        0,0,1596,1597,5,83,0,0,1597,1598,5,84,0,0,1598,1599,5,82,0,0,1599,
        1600,5,73,0,0,1600,1601,5,78,0,0,1601,1602,5,71,0,0,1602,212,1,0,
        0,0,1603,1604,5,66,0,0,1604,1605,5,79,0,0,1605,1606,5,79,0,0,1606,
        1607,5,76,0,0,1607,1608,5,69,0,0,1608,1609,5,65,0,0,1609,1610,5,
        78,0,0,1610,214,1,0,0,0,1611,1612,5,124,0,0,1612,216,1,0,0,0,1613,
        1614,5,44,0,0,1614,218,1,0,0,0,1615,1616,5,46,0,0,1616,220,1,0,0,
        0,1617,1618,5,61,0,0,1618,222,1,0,0,0,1619,1620,5,62,0,0,1620,224,
        1,0,0,0,1621,1622,5,60,0,0,1622,226,1,0,0,0,1623,1624,5,60,0,0,1624,
        1625,5,61,0,0,1625,228,1,0,0,0,1626,1627,5,62,0,0,1627,1628,5,61,
        0,0,1628,230,1,0,0,0,1629,1630,5,33,0,0,1630,1631,5,61,0,0,1631,
        232,1,0,0,0,1632,1633,5,43,0,0,1633,234,1,0,0,0,1634,1635,5,45,0,
        0,1635,236,1,0,0,0,1636,1637,5,42,0,0,1637,238,1,0,0,0,1638,1639,
        5,47,0,0,1639,240,1,0,0,0,1640,1641,5,37,0,0,1641,242,1,0,0,0,1642,
        1643,5,33,0,0,1643,244,1,0,0,0,1644,1645,5,58,0,0,1645,246,1,0,0,
        0,1646,1647,5,40,0,0,1647,248,1,0,0,0,1648,1649,5,41,0,0,1649,250,
        1,0,0,0,1650,1651,5,91,0,0,1651,252,1,0,0,0,1652,1653,5,93,0,0,1653,
        254,1,0,0,0,1654,1655,5,39,0,0,1655,256,1,0,0,0,1656,1657,5,34,0,
        0,1657,258,1,0,0,0,1658,1659,5,96,0,0,1659,260,1,0,0,0,1660,1661,
        5,126,0,0,1661,262,1,0,0,0,1662,1663,5,38,0,0,1663,264,1,0,0,0,1664,
        1665,5,94,0,0,1665,266,1,0,0,0,1666,1667,5,65,0,0,1667,1668,5,86,
        0,0,1668,1669,5,71,0,0,1669,268,1,0,0,0,1670,1671,5,67,0,0,1671,
        1672,5,79,0,0,1672,1673,5,85,0,0,1673,1674,5,78,0,0,1674,1675,5,
        84,0,0,1675,270,1,0,0,0,1676,1677,5,68,0,0,1677,1678,5,73,0,0,1678,
        1679,5,83,0,0,1679,1680,5,84,0,0,1680,1681,5,73,0,0,1681,1682,5,
        78,0,0,1682,1683,5,67,0,0,1683,1684,5,84,0,0,1684,1685,5,95,0,0,
        1685,1686,5,67,0,0,1686,1687,5,79,0,0,1687,1688,5,85,0,0,1688,1689,
        5,78,0,0,1689,1690,5,84,0,0,1690,272,1,0,0,0,1691,1692,5,69,0,0,
        1692,1693,5,83,0,0,1693,1694,5,84,0,0,1694,1695,5,68,0,0,1695,1696,
        5,67,0,0,1696,274,1,0,0,0,1697,1698,5,69,0,0,1698,1699,5,83,0,0,
        1699,1700,5,84,0,0,1700,1701,5,68,0,0,1701,1702,5,67,0,0,1702,1703,
        5,95,0,0,1703,1704,5,69,0,0,1704,1705,5,82,0,0,1705,1706,5,82,0,
        0,1706,1707,5,79,0,0,1707,1708,5,82,0,0,1708,276,1,0,0,0,1709,1710,
        5,77,0,0,1710,1711,5,65,0,0,1711,1712,5,88,0,0,1712,278,1,0,0,0,
        1713,1714,5,77,0,0,1714,1715,5,69,0,0,1715,1716,5,65,0,0,1716,1717,
        5,78,0,0,1717,280,1,0,0,0,1718,1719,5,77,0,0,1719,1720,5,69,0,0,
        1720,1721,5,68,0,0,1721,1722,5,73,0,0,1722,1723,5,65,0,0,1723,1724,
        5,78,0,0,1724,282,1,0,0,0,1725,1726,5,77,0,0,1726,1727,5,73,0,0,
        1727,1728,5,78,0,0,1728,284,1,0,0,0,1729,1730,5,77,0,0,1730,1731,
        5,79,0,0,1731,1732,5,68,0,0,1732,1733,5,69,0,0,1733,286,1,0,0,0,
        1734,1735,5,82,0,0,1735,1736,5,65,0,0,1736,1737,5,78,0,0,1737,1738,
        5,71,0,0,1738,1739,5,69,0,0,1739,288,1,0,0,0,1740,1741,5,83,0,0,
        1741,1742,5,84,0,0,1742,1743,5,68,0,0,1743,1744,5,69,0,0,1744,1745,
        5,86,0,0,1745,290,1,0,0,0,1746,1747,5,83,0,0,1747,1748,5,84,0,0,
        1748,1749,5,68,0,0,1749,1750,5,69,0,0,1750,1751,5,86,0,0,1751,1752,
        5,80,0,0,1752,292,1,0,0,0,1753,1754,5,83,0,0,1754,1755,5,85,0,0,
        1755,1756,5,77,0,0,1756,294,1,0,0,0,1757,1758,5,83,0,0,1758,1759,
        5,85,0,0,1759,1760,5,77,0,0,1760,1761,5,83,0,0,1761,1762,5,81,0,
        0,1762,296,1,0,0,0,1763,1764,5,86,0,0,1764,1765,5,65,0,0,1765,1766,
        5,82,0,0,1766,1767,5,95,0,0,1767,1768,5,83,0,0,1768,1769,5,65,0,
        0,1769,1770,5,77,0,0,1770,1771,5,80,0,0,1771,298,1,0,0,0,1772,1773,
        5,86,0,0,1773,1774,5,65,0,0,1774,1775,5,82,0,0,1775,1776,5,95,0,
        0,1776,1777,5,80,0,0,1777,1778,5,79,0,0,1778,1779,5,80,0,0,1779,
        300,1,0,0,0,1780,1781,5,83,0,0,1781,1782,5,84,0,0,1782,1783,5,68,
        0,0,1783,1784,5,68,0,0,1784,1785,5,69,0,0,1785,1786,5,86,0,0,1786,
        1787,5,95,0,0,1787,1788,5,83,0,0,1788,1789,5,65,0,0,1789,1790,5,
        77,0,0,1790,1791,5,80,0,0,1791,302,1,0,0,0,1792,1793,5,83,0,0,1793,
        1794,5,84,0,0,1794,1795,5,68,0,0,1795,1796,5,68,0,0,1796,1797,5,
        69,0,0,1797,1798,5,86,0,0,1798,1799,5,95,0,0,1799,1800,5,80,0,0,
        1800,1801,5,79,0,0,1801,1802,5,80,0,0,1802,304,1,0,0,0,1803,1804,
        5,80,0,0,1804,1805,5,69,0,0,1805,1806,5,82,0,0,1806,1807,5,67,0,
        0,1807,1808,5,69,0,0,1808,1809,5,78,0,0,1809,1810,5,84,0,0,1810,
        1811,5,73,0,0,1811,1812,5,76,0,0,1812,1813,5,69,0,0,1813,306,1,0,
        0,0,1814,1815,5,84,0,0,1815,1816,5,65,0,0,1816,1817,5,75,0,0,1817,
        1818,5,69,0,0,1818,308,1,0,0,0,1819,1820,5,70,0,0,1820,1821,5,73,
        0,0,1821,1822,5,82,0,0,1822,1823,5,83,0,0,1823,1824,5,84,0,0,1824,
        310,1,0,0,0,1825,1826,5,76,0,0,1826,1827,5,65,0,0,1827,1828,5,83,
        0,0,1828,1829,5,84,0,0,1829,312,1,0,0,0,1830,1831,5,76,0,0,1831,
        1832,5,73,0,0,1832,1833,5,83,0,0,1833,1834,5,84,0,0,1834,314,1,0,
        0,0,1835,1836,5,86,0,0,1836,1837,5,65,0,0,1837,1838,5,76,0,0,1838,
        1839,5,85,0,0,1839,1840,5,69,0,0,1840,1841,5,83,0,0,1841,316,1,0,
        0,0,1842,1843,5,69,0,0,1843,1844,5,65,0,0,1844,1845,5,82,0,0,1845,
        1846,5,76,0,0,1846,1847,5,73,0,0,1847,1848,5,69,0,0,1848,1849,5,
        83,0,0,1849,1850,5,84,0,0,1850,318,1,0,0,0,1851,1852,5,69,0,0,1852,
        1853,5,65,0,0,1853,1854,5,82,0,0,1854,1855,5,76,0,0,1855,1856,5,
        73,0,0,1856,1857,5,69,0,0,1857,1858,5,83,0,0,1858,1859,5,84,0,0,
        1859,1860,5,95,0,0,1860,1861,5,84,0,0,1861,1862,5,73,0,0,1862,1863,
        5,77,0,0,1863,1864,5,69,0,0,1864,320,1,0,0,0,1865,1866,5,76,0,0,
        1866,1867,5,65,0,0,1867,1868,5,84,0,0,1868,1869,5,69,0,0,1869,1870,
        5,83,0,0,1870,1871,5,84,0,0,1871,322,1,0,0,0,1872,1873,5,76,0,0,
        1873,1874,5,65,0,0,1874,1875,5,84,0,0,1875,1876,5,69,0,0,1876,1877,
        5,83,0,0,1877,1878,5,84,0,0,1878,1879,5,95,0,0,1879,1880,5,84,0,
        0,1880,1881,5,73,0,0,1881,1882,5,77,0,0,1882,1883,5,69,0,0,1883,
        324,1,0,0,0,1884,1885,5,80,0,0,1885,1886,5,69,0,0,1886,1887,5,82,
        0,0,1887,1888,5,95,0,0,1888,1889,5,68,0,0,1889,1890,5,65,0,0,1890,
        1891,5,89,0,0,1891,326,1,0,0,0,1892,1893,5,80,0,0,1893,1894,5,69,
        0,0,1894,1895,5,82,0,0,1895,1896,5,95,0,0,1896,1897,5,72,0,0,1897,
        1898,5,79,0,0,1898,1899,5,85,0,0,1899,1900,5,82,0,0,1900,328,1,0,
        0,0,1901,1902,5,80,0,0,1902,1903,5,69,0,0,1903,1904,5,82,0,0,1904,
        1905,5,95,0,0,1905,1906,5,77,0,0,1906,1907,5,73,0,0,1907,1908,5,
        78,0,0,1908,1909,5,85,0,0,1909,1910,5,84,0,0,1910,1911,5,69,0,0,
        1911,330,1,0,0,0,1912,1913,5,80,0,0,1913,1914,5,69,0,0,1914,1915,
        5,82,0,0,1915,1916,5,95,0,0,1916,1917,5,83,0,0,1917,1918,5,69,0,
        0,1918,1919,5,67,0,0,1919,1920,5,79,0,0,1920,1921,5,78,0,0,1921,
        1922,5,68,0,0,1922,332,1,0,0,0,1923,1924,5,82,0,0,1924,1925,5,65,
        0,0,1925,1926,5,84,0,0,1926,1927,5,69,0,0,1927,334,1,0,0,0,1928,
        1929,5,83,0,0,1929,1930,5,80,0,0,1930,1931,5,65,0,0,1931,1932,5,
        82,0,0,1932,1933,5,75,0,0,1933,1934,5,76,0,0,1934,1935,5,73,0,0,
        1935,1936,5,78,0,0,1936,1937,5,69,0,0,1937,336,1,0,0,0,1938,1939,
        5,67,0,0,1939,338,1,0,0,0,1940,1941,5,68,0,0,1941,1942,5,67,0,0,
        1942,340,1,0,0,0,1943,1944,5,65,0,0,1944,1945,5,66,0,0,1945,1946,
        5,83,0,0,1946,342,1,0,0,0,1947,1948,5,67,0,0,1948,1949,5,66,0,0,
        1949,1950,5,82,0,0,1950,1951,5,84,0,0,1951,344,1,0,0,0,1952,1953,
        5,67,0,0,1953,1954,5,69,0,0,1954,1955,5,73,0,0,1955,1956,5,76,0,
        0,1956,346,1,0,0,0,1957,1958,5,67,0,0,1958,1959,5,69,0,0,1959,1960,
        5,73,0,0,1960,1961,5,76,0,0,1961,1962,5,73,0,0,1962,1963,5,78,0,
        0,1963,1964,5,71,0,0,1964,348,1,0,0,0,1965,1966,5,67,0,0,1966,1967,
        5,79,0,0,1967,1968,5,78,0,0,1968,1969,5,86,0,0,1969,350,1,0,0,0,
        1970,1971,5,67,0,0,1971,1972,5,82,0,0,1972,1973,5,67,0,0,1973,1974,
        5,51,0,0,1974,1975,5,50,0,0,1975,352,1,0,0,0,1976,1977,5,69,0,0,
        1977,354,1,0,0,0,1978,1979,5,69,0,0,1979,1980,5,88,0,0,1980,1981,
        5,80,0,0,1981,356,1,0,0,0,1982,1983,5,70,0,0,1983,1984,5,76,0,0,
        1984,1985,5,79,0,0,1985,1986,5,79,0,0,1986,1987,5,82,0,0,1987,358,
        1,0,0,0,1988,1989,5,76,0,0,1989,1990,5,78,0,0,1990,360,1,0,0,0,1991,
        1992,5,76,0,0,1992,1993,5,79,0,0,1993,1994,5,71,0,0,1994,362,1,0,
        0,0,1995,1996,5,76,0,0,1996,1997,5,79,0,0,1997,1998,5,71,0,0,1998,
        1999,5,49,0,0,1999,2000,5,48,0,0,2000,364,1,0,0,0,2001,2002,5,76,
        0,0,2002,2003,5,79,0,0,2003,2004,5,71,0,0,2004,2005,5,50,0,0,2005,
        366,1,0,0,0,2006,2007,5,77,0,0,2007,2008,5,79,0,0,2008,2009,5,68,
        0,0,2009,368,1,0,0,0,2010,2011,5,80,0,0,2011,2012,5,73,0,0,2012,
        370,1,0,0,0,2013,2014,5,80,0,0,2014,2015,5,79,0,0,2015,2016,5,83,
        0,0,2016,2017,5,73,0,0,2017,2018,5,84,0,0,2018,2019,5,73,0,0,2019,
        2020,5,79,0,0,2020,2021,5,78,0,0,2021,372,1,0,0,0,2022,2023,5,80,
        0,0,2023,2024,5,79,0,0,2024,2025,5,87,0,0,2025,374,1,0,0,0,2026,
        2027,5,80,0,0,2027,2028,5,79,0,0,2028,2029,5,87,0,0,2029,2030,5,
        69,0,0,2030,2031,5,82,0,0,2031,376,1,0,0,0,2032,2033,5,82,0,0,2033,
        2034,5,65,0,0,2034,2035,5,78,0,0,2035,2036,5,68,0,0,2036,378,1,0,
        0,0,2037,2038,5,82,0,0,2038,2039,5,79,0,0,2039,2040,5,85,0,0,2040,
        2041,5,78,0,0,2041,2042,5,68,0,0,2042,380,1,0,0,0,2043,2044,5,83,
        0,0,2044,2045,5,73,0,0,2045,2046,5,71,0,0,2046,2047,5,78,0,0,2047,
        382,1,0,0,0,2048,2049,5,83,0,0,2049,2050,5,81,0,0,2050,2051,5,82,
        0,0,2051,2052,5,84,0,0,2052,384,1,0,0,0,2053,2054,5,84,0,0,2054,
        2055,5,82,0,0,2055,2056,5,85,0,0,2056,2057,5,78,0,0,2057,2058,5,
        67,0,0,2058,2059,5,65,0,0,2059,2060,5,84,0,0,2060,2061,5,69,0,0,
        2061,386,1,0,0,0,2062,2063,5,65,0,0,2063,2064,5,67,0,0,2064,2065,
        5,79,0,0,2065,2066,5,83,0,0,2066,388,1,0,0,0,2067,2068,5,65,0,0,
        2068,2069,5,83,0,0,2069,2070,5,73,0,0,2070,2071,5,78,0,0,2071,390,
        1,0,0,0,2072,2073,5,65,0,0,2073,2074,5,84,0,0,2074,2075,5,65,0,0,
        2075,2076,5,78,0,0,2076,392,1,0,0,0,2077,2078,5,65,0,0,2078,2079,
        5,84,0,0,2079,2080,5,65,0,0,2080,2081,5,78,0,0,2081,2082,5,50,0,
        0,2082,394,1,0,0,0,2083,2084,5,67,0,0,2084,2085,5,79,0,0,2085,2086,
        5,83,0,0,2086,396,1,0,0,0,2087,2088,5,67,0,0,2088,2089,5,79,0,0,
        2089,2090,5,84,0,0,2090,398,1,0,0,0,2091,2092,5,68,0,0,2092,2093,
        5,69,0,0,2093,2094,5,71,0,0,2094,2095,5,82,0,0,2095,2096,5,69,0,
        0,2096,2097,5,69,0,0,2097,2098,5,83,0,0,2098,400,1,0,0,0,2099,2100,
        5,82,0,0,2100,2101,5,65,0,0,2101,2102,5,68,0,0,2102,2103,5,73,0,
        0,2103,2104,5,65,0,0,2104,2105,5,78,0,0,2105,2106,5,83,0,0,2106,
        402,1,0,0,0,2107,2108,5,83,0,0,2108,2109,5,73,0,0,2109,2110,5,78,
        0,0,2110,404,1,0,0,0,2111,2112,5,84,0,0,2112,2113,5,65,0,0,2113,
        2114,5,78,0,0,2114,406,1,0,0,0,2115,2116,5,65,0,0,2116,2117,5,68,
        0,0,2117,2118,5,68,0,0,2118,2119,5,68,0,0,2119,2120,5,65,0,0,2120,
        2121,5,84,0,0,2121,2122,5,69,0,0,2122,408,1,0,0,0,2123,2124,5,65,
        0,0,2124,2125,5,68,0,0,2125,2126,5,68,0,0,2126,2127,5,84,0,0,2127,
        2128,5,73,0,0,2128,2129,5,77,0,0,2129,2130,5,69,0,0,2130,410,1,0,
        0,0,2131,2132,5,67,0,0,2132,2133,5,85,0,0,2133,2134,5,82,0,0,2134,
        2135,5,68,0,0,2135,2136,5,65,0,0,2136,2137,5,84,0,0,2137,2138,5,
        69,0,0,2138,412,1,0,0,0,2139,2140,5,67,0,0,2140,2141,5,85,0,0,2141,
        2142,5,82,0,0,2142,2143,5,82,0,0,2143,2144,5,69,0,0,2144,2145,5,
        78,0,0,2145,2146,5,84,0,0,2146,2147,5,95,0,0,2147,2148,5,68,0,0,
        2148,2149,5,65,0,0,2149,2150,5,84,0,0,2150,2151,5,69,0,0,2151,414,
        1,0,0,0,2152,2153,5,67,0,0,2153,2154,5,85,0,0,2154,2155,5,82,0,0,
        2155,2156,5,82,0,0,2156,2157,5,69,0,0,2157,2158,5,78,0,0,2158,2159,
        5,84,0,0,2159,2160,5,95,0,0,2160,2161,5,84,0,0,2161,2162,5,73,0,
        0,2162,2163,5,77,0,0,2163,2164,5,69,0,0,2164,416,1,0,0,0,2165,2166,
        5,67,0,0,2166,2167,5,85,0,0,2167,2168,5,82,0,0,2168,2169,5,82,0,
        0,2169,2170,5,69,0,0,2170,2171,5,78,0,0,2171,2172,5,84,0,0,2172,
        2173,5,95,0,0,2173,2174,5,84,0,0,2174,2175,5,73,0,0,2175,2176,5,
        77,0,0,2176,2177,5,69,0,0,2177,2178,5,83,0,0,2178,2179,5,84,0,0,
        2179,2180,5,65,0,0,2180,2181,5,77,0,0,2181,2182,5,80,0,0,2182,418,
        1,0,0,0,2183,2184,5,67,0,0,2184,2185,5,85,0,0,2185,2186,5,82,0,0,
        2186,2187,5,84,0,0,2187,2188,5,73,0,0,2188,2189,5,77,0,0,2189,2190,
        5,69,0,0,2190,420,1,0,0,0,2191,2192,5,68,0,0,2192,2193,5,65,0,0,
        2193,2194,5,84,0,0,2194,2195,5,69,0,0,2195,422,1,0,0,0,2196,2197,
        5,68,0,0,2197,2198,5,65,0,0,2198,2199,5,84,0,0,2199,2200,5,69,0,
        0,2200,2201,5,68,0,0,2201,2202,5,73,0,0,2202,2203,5,70,0,0,2203,
        2204,5,70,0,0,2204,424,1,0,0,0,2205,2206,5,68,0,0,2206,2207,5,65,
        0,0,2207,2208,5,84,0,0,2208,2209,5,69,0,0,2209,2210,5,95,0,0,2210,
        2211,5,65,0,0,2211,2212,5,68,0,0,2212,2213,5,68,0,0,2213,426,1,0,
        0,0,2214,2215,5,68,0,0,2215,2216,5,65,0,0,2216,2217,5,84,0,0,2217,
        2218,5,69,0,0,2218,2219,5,95,0,0,2219,2220,5,70,0,0,2220,2221,5,
        79,0,0,2221,2222,5,82,0,0,2222,2223,5,77,0,0,2223,2224,5,65,0,0,
        2224,2225,5,84,0,0,2225,428,1,0,0,0,2226,2227,5,68,0,0,2227,2228,
        5,65,0,0,2228,2229,5,84,0,0,2229,2230,5,69,0,0,2230,2231,5,95,0,
        0,2231,2232,5,83,0,0,2232,2233,5,85,0,0,2233,2234,5,66,0,0,2234,
        430,1,0,0,0,2235,2236,5,68,0,0,2236,2237,5,65,0,0,2237,2238,5,89,
        0,0,2238,2239,5,78,0,0,2239,2240,5,65,0,0,2240,2241,5,77,0,0,2241,
        2242,5,69,0,0,2242,432,1,0,0,0,2243,2244,5,68,0,0,2244,2245,5,65,
        0,0,2245,2246,5,89,0,0,2246,2247,5,79,0,0,2247,2248,5,70,0,0,2248,
        2249,5,77,0,0,2249,2250,5,79,0,0,2250,2251,5,78,0,0,2251,2252,5,
        84,0,0,2252,2253,5,72,0,0,2253,434,1,0,0,0,2254,2255,5,68,0,0,2255,
        2256,5,65,0,0,2256,2257,5,89,0,0,2257,2258,5,79,0,0,2258,2259,5,
        70,0,0,2259,2260,5,87,0,0,2260,2261,5,69,0,0,2261,2262,5,69,0,0,
        2262,2263,5,75,0,0,2263,436,1,0,0,0,2264,2265,5,68,0,0,2265,2266,
        5,65,0,0,2266,2267,5,89,0,0,2267,2268,5,79,0,0,2268,2269,5,70,0,
        0,2269,2270,5,89,0,0,2270,2271,5,69,0,0,2271,2272,5,65,0,0,2272,
        2273,5,82,0,0,2273,438,1,0,0,0,2274,2275,5,68,0,0,2275,2276,5,65,
        0,0,2276,2277,5,89,0,0,2277,2278,5,95,0,0,2278,2279,5,79,0,0,2279,
        2280,5,70,0,0,2280,2281,5,95,0,0,2281,2282,5,77,0,0,2282,2283,5,
        79,0,0,2283,2284,5,78,0,0,2284,2285,5,84,0,0,2285,2286,5,72,0,0,
        2286,440,1,0,0,0,2287,2288,5,68,0,0,2288,2289,5,65,0,0,2289,2290,
        5,89,0,0,2290,2291,5,95,0,0,2291,2292,5,79,0,0,2292,2293,5,70,0,
        0,2293,2294,5,95,0,0,2294,2295,5,87,0,0,2295,2296,5,69,0,0,2296,
        2297,5,69,0,0,2297,2298,5,75,0,0,2298,442,1,0,0,0,2299,2300,5,69,
        0,0,2300,2301,5,88,0,0,2301,2302,5,84,0,0,2302,2303,5,82,0,0,2303,
        2304,5,65,0,0,2304,2305,5,67,0,0,2305,2306,5,84,0,0,2306,444,1,0,
        0,0,2307,2308,5,70,0,0,2308,2309,5,82,0,0,2309,2310,5,79,0,0,2310,
        2311,5,77,0,0,2311,2312,5,95,0,0,2312,2313,5,68,0,0,2313,2314,5,
        65,0,0,2314,2315,5,89,0,0,2315,2316,5,83,0,0,2316,446,1,0,0,0,2317,
        2318,5,70,0,0,2318,2319,5,82,0,0,2319,2320,5,79,0,0,2320,2321,5,
        77,0,0,2321,2322,5,95,0,0,2322,2323,5,85,0,0,2323,2324,5,78,0,0,
        2324,2325,5,73,0,0,2325,2326,5,88,0,0,2326,2327,5,84,0,0,2327,2328,
        5,73,0,0,2328,2329,5,77,0,0,2329,2330,5,69,0,0,2330,448,1,0,0,0,
        2331,2332,5,71,0,0,2332,2333,5,69,0,0,2333,2334,5,84,0,0,2334,2335,
        5,95,0,0,2335,2336,5,70,0,0,2336,2337,5,79,0,0,2337,2338,5,82,0,
        0,2338,2339,5,77,0,0,2339,2340,5,65,0,0,2340,2341,5,84,0,0,2341,
        450,1,0,0,0,2342,2343,5,76,0,0,2343,2344,5,65,0,0,2344,2345,5,83,
        0,0,2345,2346,5,84,0,0,2346,2347,5,95,0,0,2347,2348,5,68,0,0,2348,
        2349,5,65,0,0,2349,2350,5,89,0,0,2350,452,1,0,0,0,2351,2352,5,76,
        0,0,2352,2353,5,79,0,0,2353,2354,5,67,0,0,2354,2355,5,65,0,0,2355,
        2356,5,76,0,0,2356,2357,5,84,0,0,2357,2358,5,73,0,0,2358,2359,5,
        77,0,0,2359,2360,5,69,0,0,2360,454,1,0,0,0,2361,2362,5,76,0,0,2362,
        2363,5,79,0,0,2363,2364,5,67,0,0,2364,2365,5,65,0,0,2365,2366,5,
        76,0,0,2366,2367,5,84,0,0,2367,2368,5,73,0,0,2368,2369,5,77,0,0,
        2369,2370,5,69,0,0,2370,2371,5,83,0,0,2371,2372,5,84,0,0,2372,2373,
        5,65,0,0,2373,2374,5,77,0,0,2374,2375,5,80,0,0,2375,456,1,0,0,0,
        2376,2377,5,77,0,0,2377,2378,5,65,0,0,2378,2379,5,75,0,0,2379,2380,
        5,69,0,0,2380,2381,5,68,0,0,2381,2382,5,65,0,0,2382,2383,5,84,0,
        0,2383,2384,5,69,0,0,2384,458,1,0,0,0,2385,2386,5,77,0,0,2386,2387,
        5,65,0,0,2387,2388,5,75,0,0,2388,2389,5,69,0,0,2389,2390,5,84,0,
        0,2390,2391,5,73,0,0,2391,2392,5,77,0,0,2392,2393,5,69,0,0,2393,
        460,1,0,0,0,2394,2395,5,77,0,0,2395,2396,5,79,0,0,2396,2397,5,78,
        0,0,2397,2398,5,84,0,0,2398,2399,5,72,0,0,2399,2400,5,78,0,0,2400,
        2401,5,65,0,0,2401,2402,5,77,0,0,2402,2403,5,69,0,0,2403,462,1,0,
        0,0,2404,2405,5,78,0,0,2405,2406,5,79,0,0,2406,2407,5,87,0,0,2407,
        464,1,0,0,0,2408,2409,5,80,0,0,2409,2410,5,69,0,0,2410,2411,5,82,
        0,0,2411,2412,5,73,0,0,2412,2413,5,79,0,0,2413,2414,5,68,0,0,2414,
        2415,5,95,0,0,2415,2416,5,65,0,0,2416,2417,5,68,0,0,2417,2418,5,
        68,0,0,2418,466,1,0,0,0,2419,2420,5,80,0,0,2420,2421,5,69,0,0,2421,
        2422,5,82,0,0,2422,2423,5,73,0,0,2423,2424,5,79,0,0,2424,2425,5,
        68,0,0,2425,2426,5,95,0,0,2426,2427,5,68,0,0,2427,2428,5,73,0,0,
        2428,2429,5,70,0,0,2429,2430,5,70,0,0,2430,468,1,0,0,0,2431,2432,
        5,83,0,0,2432,2433,5,69,0,0,2433,2434,5,67,0,0,2434,2435,5,95,0,
        0,2435,2436,5,84,0,0,2436,2437,5,79,0,0,2437,2438,5,95,0,0,2438,
        2439,5,84,0,0,2439,2440,5,73,0,0,2440,2441,5,77,0,0,2441,2442,5,
        69,0,0,2442,470,1,0,0,0,2443,2444,5,83,0,0,2444,2445,5,84,0,0,2445,
        2446,5,82,0,0,2446,2447,5,95,0,0,2447,2448,5,84,0,0,2448,2449,5,
        79,0,0,2449,2450,5,95,0,0,2450,2451,5,68,0,0,2451,2452,5,65,0,0,
        2452,2453,5,84,0,0,2453,2454,5,69,0,0,2454,472,1,0,0,0,2455,2456,
        5,83,0,0,2456,2457,5,85,0,0,2457,2458,5,66,0,0,2458,2459,5,68,0,
        0,2459,2460,5,65,0,0,2460,2461,5,84,0,0,2461,2462,5,69,0,0,2462,
        474,1,0,0,0,2463,2464,5,83,0,0,2464,2465,5,85,0,0,2465,2466,5,66,
        0,0,2466,2467,5,84,0,0,2467,2468,5,73,0,0,2468,2469,5,77,0,0,2469,
        2470,5,69,0,0,2470,476,1,0,0,0,2471,2472,5,83,0,0,2472,2473,5,89,
        0,0,2473,2474,5,83,0,0,2474,2475,5,68,0,0,2475,2476,5,65,0,0,2476,
        2477,5,84,0,0,2477,2478,5,69,0,0,2478,478,1,0,0,0,2479,2480,5,84,
        0,0,2480,2481,5,73,0,0,2481,2482,5,77,0,0,2482,2483,5,69,0,0,2483,
        480,1,0,0,0,2484,2485,5,84,0,0,2485,2486,5,73,0,0,2486,2487,5,77,
        0,0,2487,2488,5,69,0,0,2488,2489,5,68,0,0,2489,2490,5,73,0,0,2490,
        2491,5,70,0,0,2491,2492,5,70,0,0,2492,482,1,0,0,0,2493,2494,5,84,
        0,0,2494,2495,5,73,0,0,2495,2496,5,77,0,0,2496,2497,5,69,0,0,2497,
        2498,5,83,0,0,2498,2499,5,84,0,0,2499,2500,5,65,0,0,2500,2501,5,
        77,0,0,2501,2502,5,80,0,0,2502,484,1,0,0,0,2503,2504,5,84,0,0,2504,
        2505,5,73,0,0,2505,2506,5,77,0,0,2506,2507,5,69,0,0,2507,2508,5,
        83,0,0,2508,2509,5,84,0,0,2509,2510,5,65,0,0,2510,2511,5,77,0,0,
        2511,2512,5,80,0,0,2512,2513,5,65,0,0,2513,2514,5,68,0,0,2514,2515,
        5,68,0,0,2515,486,1,0,0,0,2516,2517,5,84,0,0,2517,2518,5,73,0,0,
        2518,2519,5,77,0,0,2519,2520,5,69,0,0,2520,2521,5,83,0,0,2521,2522,
        5,84,0,0,2522,2523,5,65,0,0,2523,2524,5,77,0,0,2524,2525,5,80,0,
        0,2525,2526,5,68,0,0,2526,2527,5,73,0,0,2527,2528,5,70,0,0,2528,
        2529,5,70,0,0,2529,488,1,0,0,0,2530,2531,5,84,0,0,2531,2532,5,73,
        0,0,2532,2533,5,77,0,0,2533,2534,5,69,0,0,2534,2535,5,95,0,0,2535,
        2536,5,70,0,0,2536,2537,5,79,0,0,2537,2538,5,82,0,0,2538,2539,5,
        77,0,0,2539,2540,5,65,0,0,2540,2541,5,84,0,0,2541,490,1,0,0,0,2542,
        2543,5,84,0,0,2543,2544,5,73,0,0,2544,2545,5,77,0,0,2545,2546,5,
        69,0,0,2546,2547,5,95,0,0,2547,2548,5,84,0,0,2548,2549,5,79,0,0,
        2549,2550,5,95,0,0,2550,2551,5,83,0,0,2551,2552,5,69,0,0,2552,2553,
        5,67,0,0,2553,492,1,0,0,0,2554,2555,5,84,0,0,2555,2556,5,79,0,0,
        2556,2557,5,95,0,0,2557,2558,5,68,0,0,2558,2559,5,65,0,0,2559,2560,
        5,89,0,0,2560,2561,5,83,0,0,2561,494,1,0,0,0,2562,2563,5,84,0,0,
        2563,2564,5,79,0,0,2564,2565,5,95,0,0,2565,2566,5,83,0,0,2566,2567,
        5,69,0,0,2567,2568,5,67,0,0,2568,2569,5,79,0,0,2569,2570,5,78,0,
        0,2570,2571,5,68,0,0,2571,2572,5,83,0,0,2572,496,1,0,0,0,2573,2574,
        5,85,0,0,2574,2575,5,78,0,0,2575,2576,5,73,0,0,2576,2577,5,88,0,
        0,2577,2578,5,95,0,0,2578,2579,5,84,0,0,2579,2580,5,73,0,0,2580,
        2581,5,77,0,0,2581,2582,5,69,0,0,2582,2583,5,83,0,0,2583,2584,5,
        84,0,0,2584,2585,5,65,0,0,2585,2586,5,77,0,0,2586,2587,5,80,0,0,
        2587,498,1,0,0,0,2588,2589,5,85,0,0,2589,2590,5,84,0,0,2590,2591,
        5,67,0,0,2591,2592,5,95,0,0,2592,2593,5,68,0,0,2593,2594,5,65,0,
        0,2594,2595,5,84,0,0,2595,2596,5,69,0,0,2596,500,1,0,0,0,2597,2598,
        5,85,0,0,2598,2599,5,84,0,0,2599,2600,5,67,0,0,2600,2601,5,95,0,
        0,2601,2602,5,84,0,0,2602,2603,5,73,0,0,2603,2604,5,77,0,0,2604,
        2605,5,69,0,0,2605,502,1,0,0,0,2606,2607,5,85,0,0,2607,2608,5,84,
        0,0,2608,2609,5,67,0,0,2609,2610,5,95,0,0,2610,2611,5,84,0,0,2611,
        2612,5,73,0,0,2612,2613,5,77,0,0,2613,2614,5,69,0,0,2614,2615,5,
        83,0,0,2615,2616,5,84,0,0,2616,2617,5,65,0,0,2617,2618,5,77,0,0,
        2618,2619,5,80,0,0,2619,504,1,0,0,0,2620,2621,5,87,0,0,2621,2622,
        5,69,0,0,2622,2623,5,69,0,0,2623,2624,5,75,0,0,2624,2625,5,68,0,
        0,2625,2626,5,65,0,0,2626,2627,5,89,0,0,2627,506,1,0,0,0,2628,2629,
        5,89,0,0,2629,2630,5,69,0,0,2630,2631,5,65,0,0,2631,2632,5,82,0,
        0,2632,2633,5,87,0,0,2633,2634,5,69,0,0,2634,2635,5,69,0,0,2635,
        2636,5,75,0,0,2636,508,1,0,0,0,2637,2638,5,83,0,0,2638,2639,5,85,
        0,0,2639,2640,5,66,0,0,2640,2641,5,83,0,0,2641,2642,5,84,0,0,2642,
        2643,5,82,0,0,2643,510,1,0,0,0,2644,2645,5,83,0,0,2645,2646,5,85,
        0,0,2646,2647,5,66,0,0,2647,2648,5,83,0,0,2648,2649,5,84,0,0,2649,
        2650,5,82,0,0,2650,2651,5,73,0,0,2651,2652,5,78,0,0,2652,2653,5,
        71,0,0,2653,512,1,0,0,0,2654,2655,5,76,0,0,2655,2656,5,84,0,0,2656,
        2657,5,82,0,0,2657,2658,5,73,0,0,2658,2659,5,77,0,0,2659,514,1,0,
        0,0,2660,2661,5,82,0,0,2661,2662,5,84,0,0,2662,2663,5,82,0,0,2663,
        2664,5,73,0,0,2664,2665,5,77,0,0,2665,516,1,0,0,0,2666,2667,5,84,
        0,0,2667,2668,5,82,0,0,2668,2669,5,73,0,0,2669,2670,5,77,0,0,2670,
        518,1,0,0,0,2671,2672,5,84,0,0,2672,2673,5,79,0,0,2673,520,1,0,0,
        0,2674,2675,5,76,0,0,2675,2676,5,79,0,0,2676,2677,5,87,0,0,2677,
        2678,5,69,0,0,2678,2679,5,82,0,0,2679,522,1,0,0,0,2680,2681,5,85,
        0,0,2681,2682,5,80,0,0,2682,2683,5,80,0,0,2683,2684,5,69,0,0,2684,
        2685,5,82,0,0,2685,524,1,0,0,0,2686,2687,5,67,0,0,2687,2688,5,79,
        0,0,2688,2689,5,78,0,0,2689,2690,5,67,0,0,2690,2691,5,65,0,0,2691,
        2692,5,84,0,0,2692,526,1,0,0,0,2693,2694,5,67,0,0,2694,2695,5,79,
        0,0,2695,2696,5,78,0,0,2696,2697,5,67,0,0,2697,2698,5,65,0,0,2698,
        2699,5,84,0,0,2699,2700,5,95,0,0,2700,2701,5,87,0,0,2701,2702,5,
        83,0,0,2702,528,1,0,0,0,2703,2704,5,76,0,0,2704,2705,5,69,0,0,2705,
        2706,5,78,0,0,2706,2707,5,71,0,0,2707,2708,5,84,0,0,2708,2709,5,
        72,0,0,2709,530,1,0,0,0,2710,2711,5,83,0,0,2711,2712,5,84,0,0,2712,
        2713,5,82,0,0,2713,2714,5,67,0,0,2714,2715,5,77,0,0,2715,2716,5,
        80,0,0,2716,532,1,0,0,0,2717,2718,5,82,0,0,2718,2719,5,73,0,0,2719,
        2720,5,71,0,0,2720,2721,5,72,0,0,2721,2722,5,84,0,0,2722,534,1,0,
        0,0,2723,2724,5,76,0,0,2724,2725,5,69,0,0,2725,2726,5,70,0,0,2726,
        2727,5,84,0,0,2727,536,1,0,0,0,2728,2729,5,65,0,0,2729,2730,5,83,
        0,0,2730,2731,5,67,0,0,2731,2732,5,73,0,0,2732,2733,5,73,0,0,2733,
        538,1,0,0,0,2734,2735,5,76,0,0,2735,2736,5,79,0,0,2736,2737,5,67,
        0,0,2737,2738,5,65,0,0,2738,2739,5,84,0,0,2739,2740,5,69,0,0,2740,
        540,1,0,0,0,2741,2742,5,82,0,0,2742,2743,5,69,0,0,2743,2744,5,80,
        0,0,2744,2745,5,76,0,0,2745,2746,5,65,0,0,2746,2747,5,67,0,0,2747,
        2748,5,69,0,0,2748,542,1,0,0,0,2749,2750,5,82,0,0,2750,2751,5,69,
        0,0,2751,2752,5,86,0,0,2752,2753,5,69,0,0,2753,2754,5,82,0,0,2754,
        2755,5,83,0,0,2755,2756,5,69,0,0,2756,544,1,0,0,0,2757,2758,5,67,
        0,0,2758,2759,5,65,0,0,2759,2760,5,83,0,0,2760,2761,5,84,0,0,2761,
        546,1,0,0,0,2762,2763,5,76,0,0,2763,2764,5,73,0,0,2764,2765,5,75,
        0,0,2765,2766,5,69,0,0,2766,548,1,0,0,0,2767,2768,5,73,0,0,2768,
        2769,5,83,0,0,2769,2770,5,78,0,0,2770,2771,5,85,0,0,2771,2772,5,
        76,0,0,2772,2773,5,76,0,0,2773,550,1,0,0,0,2774,2775,5,73,0,0,2775,
        2776,5,83,0,0,2776,2777,5,78,0,0,2777,2778,5,79,0,0,2778,2779,5,
        84,0,0,2779,2780,5,78,0,0,2780,2781,5,85,0,0,2781,2782,5,76,0,0,
        2782,2783,5,76,0,0,2783,552,1,0,0,0,2784,2785,5,73,0,0,2785,2786,
        5,70,0,0,2786,2787,5,78,0,0,2787,2788,5,85,0,0,2788,2789,5,76,0,
        0,2789,2790,5,76,0,0,2790,554,1,0,0,0,2791,2792,5,78,0,0,2792,2793,
        5,85,0,0,2793,2794,5,76,0,0,2794,2795,5,76,0,0,2795,2796,5,73,0,
        0,2796,2797,5,70,0,0,2797,556,1,0,0,0,2798,2799,5,73,0,0,2799,2800,
        5,70,0,0,2800,558,1,0,0,0,2801,2802,5,84,0,0,2802,2803,5,89,0,0,
        2803,2804,5,80,0,0,2804,2805,5,69,0,0,2805,2806,5,79,0,0,2806,2807,
        5,70,0,0,2807,560,1,0,0,0,2808,2809,5,77,0,0,2809,2810,5,65,0,0,
        2810,2811,5,84,0,0,2811,2812,5,67,0,0,2812,2813,5,72,0,0,2813,562,
        1,0,0,0,2814,2815,5,77,0,0,2815,2816,5,65,0,0,2816,2817,5,84,0,0,
        2817,2818,5,67,0,0,2818,2819,5,72,0,0,2819,2820,5,95,0,0,2820,2821,
        5,80,0,0,2821,2822,5,72,0,0,2822,2823,5,82,0,0,2823,2824,5,65,0,
        0,2824,2825,5,83,0,0,2825,2826,5,69,0,0,2826,564,1,0,0,0,2827,2828,
        5,77,0,0,2828,2829,5,65,0,0,2829,2830,5,84,0,0,2830,2831,5,67,0,
        0,2831,2832,5,72,0,0,2832,2833,5,95,0,0,2833,2834,5,80,0,0,2834,
        2835,5,72,0,0,2835,2836,5,82,0,0,2836,2837,5,65,0,0,2837,2838,5,
        83,0,0,2838,2839,5,69,0,0,2839,2840,5,95,0,0,2840,2841,5,80,0,0,
        2841,2842,5,82,0,0,2842,2843,5,69,0,0,2843,2844,5,70,0,0,2844,2845,
        5,73,0,0,2845,2846,5,88,0,0,2846,566,1,0,0,0,2847,2848,5,77,0,0,
        2848,2849,5,65,0,0,2849,2850,5,84,0,0,2850,2851,5,67,0,0,2851,2852,
        5,72,0,0,2852,2853,5,95,0,0,2853,2854,5,66,0,0,2854,2855,5,79,0,
        0,2855,2856,5,79,0,0,2856,2857,5,76,0,0,2857,2858,5,95,0,0,2858,
        2859,5,80,0,0,2859,2860,5,82,0,0,2860,2861,5,69,0,0,2861,2862,5,
        70,0,0,2862,2863,5,73,0,0,2863,2864,5,88,0,0,2864,568,1,0,0,0,2865,
        2866,5,83,0,0,2866,2867,5,73,0,0,2867,2868,5,77,0,0,2868,2869,5,
        80,0,0,2869,2870,5,76,0,0,2870,2871,5,69,0,0,2871,2872,5,95,0,0,
        2872,2873,5,81,0,0,2873,2874,5,85,0,0,2874,2875,5,69,0,0,2875,2876,
        5,82,0,0,2876,2877,5,89,0,0,2877,2878,5,95,0,0,2878,2879,5,83,0,
        0,2879,2880,5,84,0,0,2880,2881,5,82,0,0,2881,2882,5,73,0,0,2882,
        2883,5,78,0,0,2883,2884,5,71,0,0,2884,570,1,0,0,0,2885,2886,5,77,
        0,0,2886,2887,5,85,0,0,2887,2888,5,76,0,0,2888,2889,5,84,0,0,2889,
        2890,5,73,0,0,2890,2891,5,95,0,0,2891,2892,5,77,0,0,2892,2893,5,
        65,0,0,2893,2894,5,84,0,0,2894,2895,5,67,0,0,2895,2896,5,72,0,0,
        2896,572,1,0,0,0,2897,2898,5,81,0,0,2898,2899,5,85,0,0,2899,2900,
        5,69,0,0,2900,2901,5,82,0,0,2901,2902,5,89,0,0,2902,2903,5,95,0,
        0,2903,2904,5,83,0,0,2904,2905,5,84,0,0,2905,2906,5,82,0,0,2906,
        2907,5,73,0,0,2907,2908,5,78,0,0,2908,2909,5,71,0,0,2909,574,1,0,
        0,0,2910,2911,5,65,0,0,2911,2912,5,76,0,0,2912,2913,5,76,0,0,2913,
        2914,5,79,0,0,2914,2915,5,87,0,0,2915,2916,5,95,0,0,2916,2917,5,
        76,0,0,2917,2918,5,69,0,0,2918,2919,5,65,0,0,2919,2920,5,68,0,0,
        2920,2921,5,73,0,0,2921,2922,5,78,0,0,2922,2923,5,71,0,0,2923,2924,
        5,95,0,0,2924,2925,5,87,0,0,2925,2926,5,73,0,0,2926,2927,5,76,0,
        0,2927,2928,5,68,0,0,2928,2929,5,67,0,0,2929,2930,5,65,0,0,2930,
        2931,5,82,0,0,2931,2932,5,68,0,0,2932,576,1,0,0,0,2933,2934,5,65,
        0,0,2934,2935,5,78,0,0,2935,2936,5,65,0,0,2936,2937,5,76,0,0,2937,
        2938,5,89,0,0,2938,2939,5,90,0,0,2939,2940,5,69,0,0,2940,2941,5,
        95,0,0,2941,2942,5,87,0,0,2942,2943,5,73,0,0,2943,2944,5,76,0,0,
        2944,2945,5,68,0,0,2945,2946,5,67,0,0,2946,2947,5,65,0,0,2947,2948,
        5,82,0,0,2948,2949,5,68,0,0,2949,578,1,0,0,0,2950,2951,5,65,0,0,
        2951,2952,5,78,0,0,2952,2953,5,65,0,0,2953,2954,5,76,0,0,2954,2955,
        5,89,0,0,2955,2956,5,90,0,0,2956,2957,5,69,0,0,2957,2958,5,82,0,
        0,2958,580,1,0,0,0,2959,2960,5,65,0,0,2960,2961,5,85,0,0,2961,2962,
        5,84,0,0,2962,2963,5,79,0,0,2963,2964,5,95,0,0,2964,2965,5,71,0,
        0,2965,2966,5,69,0,0,2966,2967,5,78,0,0,2967,2968,5,69,0,0,2968,
        2969,5,82,0,0,2969,2970,5,65,0,0,2970,2971,5,84,0,0,2971,2972,5,
        69,0,0,2972,2973,5,95,0,0,2973,2974,5,83,0,0,2974,2975,5,89,0,0,
        2975,2976,5,78,0,0,2976,2977,5,79,0,0,2977,2978,5,78,0,0,2978,2979,
        5,89,0,0,2979,2980,5,77,0,0,2980,2981,5,83,0,0,2981,2982,5,95,0,
        0,2982,2983,5,80,0,0,2983,2984,5,72,0,0,2984,2985,5,82,0,0,2985,
        2986,5,65,0,0,2986,2987,5,83,0,0,2987,2988,5,69,0,0,2988,2989,5,
        95,0,0,2989,2990,5,81,0,0,2990,2991,5,85,0,0,2991,2992,5,69,0,0,
        2992,2993,5,82,0,0,2993,2994,5,89,0,0,2994,582,1,0,0,0,2995,2996,
        5,66,0,0,2996,2997,5,79,0,0,2997,2998,5,79,0,0,2998,2999,5,83,0,
        0,2999,3000,5,84,0,0,3000,584,1,0,0,0,3001,3002,5,67,0,0,3002,3003,
        5,85,0,0,3003,3004,5,84,0,0,3004,3005,5,79,0,0,3005,3006,5,70,0,
        0,3006,3007,5,70,0,0,3007,3008,5,95,0,0,3008,3009,5,70,0,0,3009,
        3010,5,82,0,0,3010,3011,5,69,0,0,3011,3012,5,81,0,0,3012,3013,5,
        85,0,0,3013,3014,5,69,0,0,3014,3015,5,78,0,0,3015,3016,5,67,0,0,
        3016,3017,5,89,0,0,3017,586,1,0,0,0,3018,3019,5,68,0,0,3019,3020,
        5,69,0,0,3020,3021,5,70,0,0,3021,3022,5,65,0,0,3022,3023,5,85,0,
        0,3023,3024,5,76,0,0,3024,3025,5,84,0,0,3025,3026,5,95,0,0,3026,
        3027,5,70,0,0,3027,3028,5,73,0,0,3028,3029,5,69,0,0,3029,3030,5,
        76,0,0,3030,3031,5,68,0,0,3031,588,1,0,0,0,3032,3033,5,68,0,0,3033,
        3034,5,69,0,0,3034,3035,5,70,0,0,3035,3036,5,65,0,0,3036,3037,5,
        85,0,0,3037,3038,5,76,0,0,3038,3039,5,84,0,0,3039,3040,5,95,0,0,
        3040,3041,5,79,0,0,3041,3042,5,80,0,0,3042,3043,5,69,0,0,3043,3044,
        5,82,0,0,3044,3045,5,65,0,0,3045,3046,5,84,0,0,3046,3047,5,79,0,
        0,3047,3048,5,82,0,0,3048,590,1,0,0,0,3049,3050,5,69,0,0,3050,3051,
        5,78,0,0,3051,3052,5,65,0,0,3052,3053,5,66,0,0,3053,3054,5,76,0,
        0,3054,3055,5,69,0,0,3055,3056,5,95,0,0,3056,3057,5,80,0,0,3057,
        3058,5,79,0,0,3058,3059,5,83,0,0,3059,3060,5,73,0,0,3060,3061,5,
        84,0,0,3061,3062,5,73,0,0,3062,3063,5,79,0,0,3063,3064,5,78,0,0,
        3064,3065,5,95,0,0,3065,3066,5,73,0,0,3066,3067,5,78,0,0,3067,3068,
        5,67,0,0,3068,3069,5,82,0,0,3069,3070,5,69,0,0,3070,3071,5,77,0,
        0,3071,3072,5,69,0,0,3072,3073,5,78,0,0,3073,3074,5,84,0,0,3074,
        3075,5,83,0,0,3075,592,1,0,0,0,3076,3077,5,69,0,0,3077,3078,5,83,
        0,0,3078,3079,5,67,0,0,3079,3080,5,65,0,0,3080,3081,5,80,0,0,3081,
        3082,5,69,0,0,3082,594,1,0,0,0,3083,3084,5,70,0,0,3084,3085,5,76,
        0,0,3085,3086,5,65,0,0,3086,3087,5,71,0,0,3087,3088,5,83,0,0,3088,
        596,1,0,0,0,3089,3090,5,70,0,0,3090,3091,5,85,0,0,3091,3092,5,90,
        0,0,3092,3093,5,90,0,0,3093,3094,5,89,0,0,3094,3095,5,95,0,0,3095,
        3096,5,77,0,0,3096,3097,5,65,0,0,3097,3098,5,88,0,0,3098,3099,5,
        95,0,0,3099,3100,5,69,0,0,3100,3101,5,88,0,0,3101,3102,5,80,0,0,
        3102,3103,5,65,0,0,3103,3104,5,78,0,0,3104,3105,5,83,0,0,3105,3106,
        5,73,0,0,3106,3107,5,79,0,0,3107,3108,5,78,0,0,3108,3109,5,83,0,
        0,3109,598,1,0,0,0,3110,3111,5,70,0,0,3111,3112,5,85,0,0,3112,3113,
        5,90,0,0,3113,3114,5,90,0,0,3114,3115,5,89,0,0,3115,3116,5,95,0,
        0,3116,3117,5,80,0,0,3117,3118,5,82,0,0,3118,3119,5,69,0,0,3119,
        3120,5,70,0,0,3120,3121,5,73,0,0,3121,3122,5,88,0,0,3122,3123,5,
        95,0,0,3123,3124,5,76,0,0,3124,3125,5,69,0,0,3125,3126,5,78,0,0,
        3126,3127,5,71,0,0,3127,3128,5,84,0,0,3128,3129,5,72,0,0,3129,600,
        1,0,0,0,3130,3131,5,70,0,0,3131,3132,5,85,0,0,3132,3133,5,90,0,0,
        3133,3134,5,90,0,0,3134,3135,5,89,0,0,3135,3136,5,95,0,0,3136,3137,
        5,84,0,0,3137,3138,5,82,0,0,3138,3139,5,65,0,0,3139,3140,5,78,0,
        0,3140,3141,5,83,0,0,3141,3142,5,80,0,0,3142,3143,5,79,0,0,3143,
        3144,5,83,0,0,3144,3145,5,73,0,0,3145,3146,5,84,0,0,3146,3147,5,
        73,0,0,3147,3148,5,79,0,0,3148,3149,5,78,0,0,3149,3150,5,83,0,0,
        3150,602,1,0,0,0,3151,3152,5,70,0,0,3152,3153,5,85,0,0,3153,3154,
        5,90,0,0,3154,3155,5,90,0,0,3155,3156,5,89,0,0,3156,3157,5,95,0,
        0,3157,3158,5,82,0,0,3158,3159,5,69,0,0,3159,3160,5,87,0,0,3160,
        3161,5,82,0,0,3161,3162,5,73,0,0,3162,3163,5,84,0,0,3163,3164,5,
        69,0,0,3164,604,1,0,0,0,3165,3166,5,70,0,0,3166,3167,5,85,0,0,3167,
        3168,5,90,0,0,3168,3169,5,90,0,0,3169,3170,5,73,0,0,3170,3171,5,
        78,0,0,3171,3172,5,69,0,0,3172,3173,5,83,0,0,3173,3174,5,83,0,0,
        3174,606,1,0,0,0,3175,3176,5,76,0,0,3176,3177,5,69,0,0,3177,3178,
        5,78,0,0,3178,3179,5,73,0,0,3179,3180,5,69,0,0,3180,3181,5,78,0,
        0,3181,3182,5,84,0,0,3182,608,1,0,0,0,3183,3184,5,76,0,0,3184,3185,
        5,79,0,0,3185,3186,5,87,0,0,3186,3187,5,95,0,0,3187,3188,5,70,0,
        0,3188,3189,5,82,0,0,3189,3190,5,69,0,0,3190,3191,5,81,0,0,3191,
        3192,5,95,0,0,3192,3193,5,79,0,0,3193,3194,5,80,0,0,3194,3195,5,
        69,0,0,3195,3196,5,82,0,0,3196,3197,5,65,0,0,3197,3198,5,84,0,0,
        3198,3199,5,79,0,0,3199,3200,5,82,0,0,3200,610,1,0,0,0,3201,3202,
        5,77,0,0,3202,3203,5,65,0,0,3203,3204,5,88,0,0,3204,3205,5,95,0,
        0,3205,3206,5,68,0,0,3206,3207,5,69,0,0,3207,3208,5,84,0,0,3208,
        3209,5,69,0,0,3209,3210,5,82,0,0,3210,3211,5,77,0,0,3211,3212,5,
        73,0,0,3212,3213,5,78,0,0,3213,3214,5,73,0,0,3214,3215,5,90,0,0,
        3215,3216,5,69,0,0,3216,3217,5,68,0,0,3217,3218,5,95,0,0,3218,3219,
        5,83,0,0,3219,3220,5,84,0,0,3220,3221,5,65,0,0,3221,3222,5,84,0,
        0,3222,3223,5,69,0,0,3223,3224,5,83,0,0,3224,612,1,0,0,0,3225,3226,
        5,77,0,0,3226,3227,5,65,0,0,3227,3228,5,88,0,0,3228,3229,5,95,0,
        0,3229,3230,5,69,0,0,3230,3231,5,88,0,0,3231,3232,5,80,0,0,3232,
        3233,5,65,0,0,3233,3234,5,78,0,0,3234,3235,5,83,0,0,3235,3236,5,
        73,0,0,3236,3237,5,79,0,0,3237,3238,5,78,0,0,3238,3239,5,83,0,0,
        3239,614,1,0,0,0,3240,3241,5,77,0,0,3241,3242,5,73,0,0,3242,3243,
        5,78,0,0,3243,3244,5,73,0,0,3244,3245,5,77,0,0,3245,3246,5,85,0,
        0,3246,3247,5,77,0,0,3247,3248,5,95,0,0,3248,3249,5,83,0,0,3249,
        3250,5,72,0,0,3250,3251,5,79,0,0,3251,3252,5,85,0,0,3252,3253,5,
        76,0,0,3253,3254,5,68,0,0,3254,3255,5,95,0,0,3255,3256,5,77,0,0,
        3256,3257,5,65,0,0,3257,3258,5,84,0,0,3258,3259,5,67,0,0,3259,3260,
        5,72,0,0,3260,616,1,0,0,0,3261,3262,5,79,0,0,3262,3263,5,80,0,0,
        3263,3264,5,69,0,0,3264,3265,5,82,0,0,3265,3266,5,65,0,0,3266,3267,
        5,84,0,0,3267,3268,5,79,0,0,3268,3269,5,82,0,0,3269,618,1,0,0,0,
        3270,3271,5,80,0,0,3271,3272,5,72,0,0,3272,3273,5,82,0,0,3273,3274,
        5,65,0,0,3274,3275,5,83,0,0,3275,3276,5,69,0,0,3276,3277,5,95,0,
        0,3277,3278,5,83,0,0,3278,3279,5,76,0,0,3279,3280,5,79,0,0,3280,
        3281,5,80,0,0,3281,620,1,0,0,0,3282,3283,5,80,0,0,3283,3284,5,82,
        0,0,3284,3285,5,69,0,0,3285,3286,5,70,0,0,3286,3287,5,73,0,0,3287,
        3288,5,88,0,0,3288,3289,5,95,0,0,3289,3290,5,76,0,0,3290,3291,5,
        69,0,0,3291,3292,5,78,0,0,3292,3293,5,71,0,0,3293,3294,5,84,0,0,
        3294,3295,5,72,0,0,3295,622,1,0,0,0,3296,3297,5,81,0,0,3297,3298,
        5,85,0,0,3298,3299,5,79,0,0,3299,3300,5,84,0,0,3300,3301,5,69,0,
        0,3301,3302,5,95,0,0,3302,3303,5,65,0,0,3303,3304,5,78,0,0,3304,
        3305,5,65,0,0,3305,3306,5,76,0,0,3306,3307,5,89,0,0,3307,3308,5,
        90,0,0,3308,3309,5,69,0,0,3309,3310,5,82,0,0,3310,624,1,0,0,0,3311,
        3312,5,81,0,0,3312,3313,5,85,0,0,3313,3314,5,79,0,0,3314,3315,5,
        84,0,0,3315,3316,5,69,0,0,3316,3317,5,95,0,0,3317,3318,5,70,0,0,
        3318,3319,5,73,0,0,3319,3320,5,69,0,0,3320,3321,5,76,0,0,3321,3322,
        5,68,0,0,3322,3323,5,95,0,0,3323,3324,5,83,0,0,3324,3325,5,85,0,
        0,3325,3326,5,70,0,0,3326,3327,5,70,0,0,3327,3328,5,73,0,0,3328,
        3329,5,88,0,0,3329,626,1,0,0,0,3330,3331,5,82,0,0,3331,3332,5,69,
        0,0,3332,3333,5,87,0,0,3333,3334,5,82,0,0,3334,3335,5,73,0,0,3335,
        3336,5,84,0,0,3336,3337,5,69,0,0,3337,628,1,0,0,0,3338,3339,5,83,
        0,0,3339,3340,5,76,0,0,3340,3341,5,79,0,0,3341,3342,5,80,0,0,3342,
        630,1,0,0,0,3343,3344,5,84,0,0,3344,3345,5,73,0,0,3345,3346,5,69,
        0,0,3346,3347,5,95,0,0,3347,3348,5,66,0,0,3348,3349,5,82,0,0,3349,
        3350,5,69,0,0,3350,3351,5,65,0,0,3351,3352,5,75,0,0,3352,3353,5,
        69,0,0,3353,3354,5,82,0,0,3354,632,1,0,0,0,3355,3356,5,84,0,0,3356,
        3357,5,89,0,0,3357,3358,5,80,0,0,3358,3359,5,69,0,0,3359,634,1,0,
        0,0,3360,3361,5,90,0,0,3361,3362,5,69,0,0,3362,3363,5,82,0,0,3363,
        3364,5,79,0,0,3364,3365,5,95,0,0,3365,3366,5,84,0,0,3366,3367,5,
        69,0,0,3367,3368,5,82,0,0,3368,3369,5,77,0,0,3369,3370,5,83,0,0,
        3370,3371,5,95,0,0,3371,3372,5,81,0,0,3372,3373,5,85,0,0,3373,3374,
        5,69,0,0,3374,3375,5,82,0,0,3375,3376,5,89,0,0,3376,636,1,0,0,0,
        3377,3378,5,83,0,0,3378,3379,5,80,0,0,3379,3380,5,65,0,0,3380,3381,
        5,78,0,0,3381,638,1,0,0,0,3382,3383,5,77,0,0,3383,3384,5,83,0,0,
        3384,640,1,0,0,0,3385,3386,5,83,0,0,3386,642,1,0,0,0,3387,3388,5,
        77,0,0,3388,644,1,0,0,0,3389,3390,5,72,0,0,3390,646,1,0,0,0,3391,
        3392,5,87,0,0,3392,648,1,0,0,0,3393,3394,5,81,0,0,3394,650,1,0,0,
        0,3395,3396,5,89,0,0,3396,652,1,0,0,0,3397,3398,3,663,331,0,3398,
        654,1,0,0,0,3399,3400,3,665,332,0,3400,656,1,0,0,0,3401,3403,3,675,
        337,0,3402,3401,1,0,0,0,3403,3404,1,0,0,0,3404,3402,1,0,0,0,3404,
        3405,1,0,0,0,3405,658,1,0,0,0,3406,3408,3,675,337,0,3407,3406,1,
        0,0,0,3408,3409,1,0,0,0,3409,3407,1,0,0,0,3409,3410,1,0,0,0,3410,
        3412,1,0,0,0,3411,3407,1,0,0,0,3411,3412,1,0,0,0,3412,3413,1,0,0,
        0,3413,3415,5,46,0,0,3414,3416,3,675,337,0,3415,3414,1,0,0,0,3416,
        3417,1,0,0,0,3417,3415,1,0,0,0,3417,3418,1,0,0,0,3418,660,1,0,0,
        0,3419,3421,7,0,0,0,3420,3422,7,1,0,0,3421,3420,1,0,0,0,3422,3423,
        1,0,0,0,3423,3421,1,0,0,0,3423,3424,1,0,0,0,3424,3426,1,0,0,0,3425,
        3419,1,0,0,0,3426,3427,1,0,0,0,3427,3425,1,0,0,0,3427,3428,1,0,0,
        0,3428,662,1,0,0,0,3429,3431,7,2,0,0,3430,3429,1,0,0,0,3431,3432,
        1,0,0,0,3432,3433,1,0,0,0,3432,3430,1,0,0,0,3433,3437,1,0,0,0,3434,
        3436,7,3,0,0,3435,3434,1,0,0,0,3436,3439,1,0,0,0,3437,3435,1,0,0,
        0,3437,3438,1,0,0,0,3438,664,1,0,0,0,3439,3437,1,0,0,0,3440,3442,
        7,4,0,0,3441,3440,1,0,0,0,3442,3443,1,0,0,0,3443,3444,1,0,0,0,3443,
        3441,1,0,0,0,3444,3448,1,0,0,0,3445,3447,7,3,0,0,3446,3445,1,0,0,
        0,3447,3450,1,0,0,0,3448,3446,1,0,0,0,3448,3449,1,0,0,0,3449,3451,
        1,0,0,0,3450,3448,1,0,0,0,3451,3452,3,245,122,0,3452,666,1,0,0,0,
        3453,3455,3,665,332,0,3454,3453,1,0,0,0,3454,3455,1,0,0,0,3455,3456,
        1,0,0,0,3456,3457,3,663,331,0,3457,3458,3,661,330,0,3458,668,1,0,
        0,0,3459,3467,5,34,0,0,3460,3461,5,92,0,0,3461,3466,9,0,0,0,3462,
        3463,5,34,0,0,3463,3466,5,34,0,0,3464,3466,8,5,0,0,3465,3460,1,0,
        0,0,3465,3462,1,0,0,0,3465,3464,1,0,0,0,3466,3469,1,0,0,0,3467,3465,
        1,0,0,0,3467,3468,1,0,0,0,3468,3470,1,0,0,0,3469,3467,1,0,0,0,3470,
        3471,5,34,0,0,3471,670,1,0,0,0,3472,3480,5,39,0,0,3473,3474,5,92,
        0,0,3474,3479,9,0,0,0,3475,3476,5,39,0,0,3476,3479,5,39,0,0,3477,
        3479,8,6,0,0,3478,3473,1,0,0,0,3478,3475,1,0,0,0,3478,3477,1,0,0,
        0,3479,3482,1,0,0,0,3480,3478,1,0,0,0,3480,3481,1,0,0,0,3481,3483,
        1,0,0,0,3482,3480,1,0,0,0,3483,3484,5,39,0,0,3484,672,1,0,0,0,3485,
        3493,5,96,0,0,3486,3487,5,92,0,0,3487,3492,9,0,0,0,3488,3489,5,96,
        0,0,3489,3492,5,96,0,0,3490,3492,8,7,0,0,3491,3486,1,0,0,0,3491,
        3488,1,0,0,0,3491,3490,1,0,0,0,3492,3495,1,0,0,0,3493,3491,1,0,0,
        0,3493,3494,1,0,0,0,3494,3496,1,0,0,0,3495,3493,1,0,0,0,3496,3497,
        5,96,0,0,3497,674,1,0,0,0,3498,3499,7,8,0,0,3499,676,1,0,0,0,3500,
        3501,9,0,0,0,3501,3502,1,0,0,0,3502,3503,6,338,0,0,3503,678,1,0,
        0,0,18,0,3404,3409,3411,3417,3423,3427,3432,3437,3443,3448,3454,
        3465,3467,3478,3480,3491,3493,1,0,3,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OpenSearchPPLLexer.__ATN) {
            OpenSearchPPLLexer.__ATN = new antlr.ATNDeserializer().deserialize(OpenSearchPPLLexer._serializedATN);
        }

        return OpenSearchPPLLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OpenSearchPPLLexer.literalNames, OpenSearchPPLLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OpenSearchPPLLexer.vocabulary;
    }

    private static readonly decisionsToDFA = OpenSearchPPLLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}