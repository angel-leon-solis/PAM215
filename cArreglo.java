class cArreglo{
   
     static void imprimir(int a []){
            for (int i=0; i< a.length;i++){
                System.out.println(a[i]+ "-");
            }
            System.out.println();
        }
    static double obtenerPromedio(int a[]) {
        int suma = 0;
        for (int i = 0; i < a.length; i++) {
            suma += a[i];
        }
        return (double) suma / a.length;
    }

    public static void main( String[] ars){
        int edades[]= {19,23,21,20,24,20};

        imprimir(edades);
        System.out.println(obtenerPromedio(edades));
    }
}