package hu.unideb.inf.restaurant.util;

public class DistanceCalc {
    private static final int r = 6371;

    /**
     * Calculates distance between two geolocation using Haversine formula
     * @param lat1 current latitude
     * @param lat2 restaurant latitude
     * @param lon1 current longitude
     * @param lon2 restaurant longitude
     * @return the distance in kilometres
     */
    public static Double calculate(Double lat1, Double lat2, Double lon1, Double lon2) {
        double p = Math.PI / 180;

        double a = 0.5 - Math.cos((lat2 - lat1) * p) / 2
                        + Math.cos(lat1 * p) * Math.cos(lat2 * p) *
                        (1 - Math.cos((lon2 - lon1) * p)) / 2;

        return 2 * r * Math.asin(Math.sqrt(a));
    }
}
